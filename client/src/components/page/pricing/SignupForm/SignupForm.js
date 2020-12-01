import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { ElementContainer } from "components/shared/layout";
import { ErrorMessage, FormContainer, FormLabel, FormLink, InputField, RadioButton, RadioContainer, RadioLabel, RadioLegend, RequiredFields, Submit } from "components/shared/form";
import { LoadingSpinner } from "components/shared/utilities";

const ComponentContainer = styled(ElementContainer)`
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
    await axios.post("/signupform", data);
    history.push("/success");
  };

  return (
    <ComponentContainer>
      <FormContainer method="POST" action="/signupform" id="signupform" onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor="signupform">
          Ready to get into action? - Subscribe here!
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
        <InputField 
          type="text"
          id="phone"
          name="phone"
          placeholder="* Your Phone Number"
          autoComplete="off"
          minLength="8"
          maxLength="25"
          ref={register({
            required: { value: true, message: "PHONE NUMBER is required. Enter only numbers." },
            pattern: { value: /^[0-9]+$/i, message: "Enter only numbers." },
            minLength: { value: 8, message: "Enter minimum 8 characters." },
            maxLength: { value: 25, message: "Enter maximum 25 characters." }
          })}
        />
        {errors.phone && <ErrorMessage errorMessage={errors.phone.message} />}
        <RadioLegend legendData={"* Which plan would you like to subscribe to?"} />
        <RadioContainer>
          <RadioButton
            type="radio"
            id="radiosolo"
            name="radio"
            value="solo"
            ref={register({
              required: { value: true, message: "PLAN is required." }
            })}
          />
          <RadioLabel htmlFor="radiosolo">Solo.</RadioLabel>
        </RadioContainer>
        <RadioContainer>
          <RadioButton
            type="radio"
            id="radioduo"
            name="radio"
            value="duo"
            ref={register({
              required: { value: true, message: "PLAN is required." }
            })}
          />
          <RadioLabel htmlFor="radioduo">Duo.</RadioLabel>
        </RadioContainer>
        {errors.radio && <ErrorMessage errorMessage={errors.radio.message} />}
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
            By submitting data to CKPD you give your consent that your data may be processed for purposes described in the <FormLink to="/pricing">Terms & Conditions</FormLink> & <FormLink to="/pricing">Privacy Policy</FormLink>.
          </RadioLabel>
        </RadioContainer>
        {errors.checkbox && <ErrorMessage errorMessage={errors.checkbox.message} />}
        <RequiredFields requiredData={"* Required fields."} />
        {formState.isSubmitting ? <LoadingSpinner loadingMessage={"Submitting form... Please wait!"} /> : <Submit type="submit" name="submit" value="Submit" />}
      </FormContainer>
    </ComponentContainer>
  );
};

export default SignupForm;