import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { PROJECT_ROOT } from "utilities/constants/urls";
import { SectionElementContainer } from "components/shared/layout";
import { ErrorMessage, FormContainer, FormLabel, FormLink, InputField, RadioButton, RadioContainer, RadioLabel, RadioLegend, RequiredFields, Submit } from "components/shared/form";
import { LoadingSpinner } from "components/shared/utilities";
import { trackUserEvent } from "utilities/analytics/analyticsTracking";
import { email, lettersOnly, numbersOnly } from "utilities/helpers/regex/forms";

const ComponentContainer = styled(SectionElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 95%;
  margin: 0 auto;
  padding: 2rem 2rem 2rem 2rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    width: 70%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    width: 50%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-start: 2;
    grid-column-end: 4;
    width: 100%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 80%;
  }
`;

const SignupForm = () => {
  const history = useHistory();
  const { register, handleSubmit, errors, formState } = useForm();

  const onSubmit = async (data) => {
    await axios.post("/forms/signup", data);
    trackUserEvent("signup form", "submit");
    history.push(`/${PROJECT_ROOT}/success`);
  };

  return (
    <ComponentContainer>
      <FormContainer method={"POST"} action={`/forms/signup`} onSubmit={handleSubmit(onSubmit)} id={"signupform"}>
        <FormLabel htmlFor={"signupform"} render={"Ready to plunge into action? - Subscribe here!"} />
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
            required: { value: true, message: "POKEDEX ID is required. Enter numbers only." },
            pattern: { value: numbersOnly, message: "Enter numbers only." },
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
        <InputField
          type={"text"}
          id={"phone"}
          name={"phone"}
          placeholder={"* Your Phone Number"}
          autoComplete={"off"}
          ref={register({
            required: { value: true, message: "PHONE NUMBER is required. Enter numbers only." },
            pattern: { value: numbersOnly, message: "Enter numbers only." }
          })}
        />
        {errors.phone && <ErrorMessage render={errors.phone.message} />}
        <RadioLegend render={"* Which plan would you like to subscribe to?"} />
        <RadioContainer>
          <RadioButton
            type={"radio"}
            id={"radiosolo"}
            name={"radio"}
            value={"solo"}
            ref={register({
              required: { value: true, message: "PLAN is required." }
            })}
          />
          <RadioLabel htmlFor={"radiosolo"} render={"Solo"} />
        </RadioContainer>
        <RadioContainer>
          <RadioButton
            type={"radio"}
            id={"radioduo"}
            name={"radio"}
            value={"duo"}
            ref={register({
              required: { value: true, message: "PLAN is required." }
            })}
          />
          <RadioLabel htmlFor={"radioduo"} render={"Duo"} />
        </RadioContainer>
        {errors.radio && <ErrorMessage render={errors.radio.message} />}
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
          <RadioLabel htmlFor={"checkbox"} render={<>By submitting data to CKPD you give your consent that your data may be processed for purposes described in the <FormLink to={`/${PROJECT_ROOT}/pricing`} render={"Terms & Conditions"} /> & <FormLink to={`/${PROJECT_ROOT}/pricing`} render={"Privacy Policy"} />.</>} />
        </RadioContainer>
        {errors.checkbox && <ErrorMessage render={errors.checkbox.message} />}
        <RequiredFields render={"* Required fields."} />
        {formState.isSubmitting ? <LoadingSpinner render={"Submitting your form... Please wait!"} /> : <Submit type={"submit"} name={"submit"} value={"Submit"} />}
      </FormContainer>
    </ComponentContainer>
  );
};

export default SignupForm;