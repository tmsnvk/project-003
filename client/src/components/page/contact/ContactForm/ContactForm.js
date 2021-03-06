import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { BACKEND_ROOT, PROJECT_ROOT } from "utilities/constants/urls";
import { trackUserEvent } from "utilities/analytics/analyticsTracking";
import { SectionElementContainer } from "components/shared/layout";
import { ErrorMessage, FormContainer, FormLabel, FormLink, InputField, RadioButton, RadioContainer, RadioLabel, RadioLegend, RequiredFields, Submit, Textarea } from "components/shared/form";
import { LoadingSpinner } from "components/shared/utilities";
import { email, lettersOnly, numbersOnly } from "utilities/helpers/regex/forms";

const ComponentContainer = styled(SectionElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 90%;
  margin: 0 auto;
  padding: 2rem 2rem 2rem 2rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 4;
    width: 60%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    width: 50%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 40%;
  }
`;

const ContactForm = () => {
  const history = useHistory();
  const { register, handleSubmit, errors, formState } = useForm();

  const onSubmit = async (data) => {
    await axios.post(`${BACKEND_ROOT}/forms/contact`, data);
    trackUserEvent("contact form", "submit");
    history.push(`/${PROJECT_ROOT}/success`);
  };

  return (
    <ComponentContainer>
      <FormContainer method={"POST"} action={"/forms/contact"} onSubmit={handleSubmit(onSubmit)} id={"contactform"}>
        <FormLabel htmlFor={"contactform"} render={"Have a question you didn't find in the FAQ? - Tell us!"} />
        <InputField
          type={"text"}
          id={"name"}
          name={"name"}
          placeholder={"* Your Name"}
          autoComplete={"off"}
          ref={register({
            required: { value: true, message: "NAME is required. Enter letters only." },
            pattern: { value: lettersOnly, message: "Enter letters only." }
          })}
        />
        {errors.name && <ErrorMessage render={errors.name.message} />}
        <InputField
          type={"text"}
          id={"pokedex"}
          name={"pokedex"}
          placeholder={"* Your PokedexID number"}
          autoComplete={"off"}
          maxLength={"14"}
          ref={register({
            required: { value: true, message: "POKEDEX ID is required. Enter only numbers." },
            pattern: { value: numbersOnly, message: "Enter only numbers." },
            minLength: { value: 14, message: "Enter 14 characters." },
            maxLength: { value: 14, message: "Enter 14 characters." }
          })}
        />
        {errors.pokedex && <ErrorMessage render={errors.pokedex.message} />}
        <InputField
          type={"email"}
          id={"email"}
          name={"email"}
          placeholder={"* Your Email"}
          autoComplete={"off"}
          ref={register({
            required: { value: true, message: "EMAIL is required. Enter a valid email address." },
            pattern: { value: email, message: "Enter a valid email address." }
          })}
        />
        {errors.email && <ErrorMessage render={errors.email.message} />}
        <Textarea
          id={"textarea"}
          name={"textarea"}
          placeholder={"* Your Message"}
          autoComplete={"off"}
          maxLength={"1000"}
          ref={register({
            required: { value: true, message: "MESSAGE is required. Enter maximum 1000 characters." },
            maxLength: { value: 1000, message: "Enter maximum 1000 characters." } 
          })} 
        />
        {errors.textarea && <ErrorMessage render={errors.textarea.message} />}
        <RadioLegend render={"* Data submission agreement."} />
        <RadioContainer>
          <RadioButton
            type={"checkbox"}
            id={"checkbox"}
            name={"checkbox"}
            ref={register({
              required: { value: true, message: "CONSENT is required." }
            })} 
          />
          <RadioLabel htmlFor={"checkbox"} render={<>By submitting data to CKPD you give your consent that your data may be processed for purposes described in the <FormLink to={`${PROJECT_ROOT}/contact`} render={"Terms & Conditions"} /> & <FormLink to={`${PROJECT_ROOT}/contact`} render={"Privacy Policy"} />.</>}>
          </RadioLabel>
        </RadioContainer>
        {errors.checkbox && <ErrorMessage render={errors.checkbox.message} />}
        <RequiredFields render={"* Required fields."} />
        {formState.isSubmitting ? (<LoadingSpinner render={"Submitting your form... Please wait!"} />) : (<Submit type="submit" name="submit" value="Submit" />)}
      </FormContainer>
    </ComponentContainer>
  );
};

export default ContactForm;