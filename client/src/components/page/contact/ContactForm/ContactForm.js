import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { trackUserEvent } from "utilities/analytics/analyticsTracking";
import axios from "axios";
import styled from "styled-components";
import { SectionElementContainer } from "components/shared/layout";
import { ErrorMessage, FormContainer, FormLabel, FormLink, InputField, RadioButton, RadioContainer, RadioLabel, RadioLegend, RequiredFields, Submit, Textarea } from "components/shared/form";
import { LoadingSpinner } from "components/shared/utilities";

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
    await axios.post("/contactform", data);
    trackUserEvent("contact form", "submit");
    history.push("/success");
  };

  return (
    <ComponentContainer>
      <FormContainer method="POST" action="/contactform" id="contactform" onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor="contactform">
          Have a question you didn't find in the FAQ? - Tell us!
        </FormLabel>
        <InputField 
          type="text"
          id="name"
          name="name"
          placeholder="* Your Name"
          autoComplete="off"
          maxLength="40"
          ref={register({
            required: { value: true, message: "NAME is required. Enter only letters." },
            pattern: { value: /^[A-Za-z ]+$/i, message: "Enter only letters." },
            minLength: { value: 4, message: "Enter minimum 4 characters." },
            maxLength: { value: 40, message: "Enter maximum 40 characters." }
          })}
        />
        {errors.name && <ErrorMessage errorMessage={errors.name.message} />}
        <InputField 
          type="text"
          id="pokedex"
          name="pokedex"
          placeholder="* Your PokedexID number"
          autoComplete="off"
          maxLength="14"
          ref={register({
            required: { value: true, message: "POKEDEX ID is required. Enter only numbers." },
            pattern: { value: /^[0-9]+$/i, message: "Enter only numbers." },
            minLength: { value: 14, message: "Enter 14 characters." },
            maxLength: { value: 14, message: "Enter 14 characters." }
          })}
        />
        {errors.pokedex && <ErrorMessage errorMessage={errors.pokedex.message} />}
        <InputField 
          type="email"
          id="email"
          name="email"
          placeholder="* Your Email"
          autoComplete="off"
          ref={register({
            required: { value: true, message: "EMAIL is required. Enter a valid email address." },
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i, message: "Enter a valid email address." }
          })}
        />
        {errors.email && <ErrorMessage errorMessage={errors.email.message} />}
        <Textarea
          id="textarea"
          name="textarea"
          placeholder="* Your Message"
          autoComplete="off"
          maxLength="1000"
          ref={register({
            required: { value: true, message: "MESSAGE is required. Enter maximum 1000 characters." },
            maxLength: { value: 1000, message: "Enter maximum 1000 characters." } 
          })} 
        />
        {errors.textarea && <ErrorMessage errorMessage={errors.textarea.message} />}
        <RadioLegend legendData={"* Data submission agreement."} />
        <RadioContainer>
          <RadioButton
            type="checkbox"
            id="checkbox"
            name="checkbox"
            ref={register({
              required: { value: true, message: "CONSENT is required." }
            })} 
          />
          <RadioLabel htmlFor="checkbox">
            By submitting data to CKPD you give your consent that your data may be processed for purposes described in the <FormLink to="/contact">Terms & Conditions</FormLink> & <FormLink to="/contact">Privacy Policy</FormLink>.
          </RadioLabel>
        </RadioContainer>
        {errors.checkbox && <ErrorMessage errorMessage={errors.checkbox.message} />}
        <RequiredFields requiredData={"* Required fields."} />
        {formState.isSubmitting ? <LoadingSpinner loadingMessage={"Submitting form... Please wait!"} /> : <Submit type="submit" name="submit" value="Submit" />}
      </FormContainer>
    </ComponentContainer>
  );
};

export default ContactForm;