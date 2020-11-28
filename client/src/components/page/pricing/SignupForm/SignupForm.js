import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ElementContainer } from "components/shared/layout";
import { FormContainer, FormLink, FormSubmitButton, InputErrorMessage, InputField, InputFormLabel, ItemRadioButton, ItemRadioContainer, MainRadioContainer, RadioFormLabel, RequiredFields } from "components/shared/form";
import { ItemContainer } from "components/shared";
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

const RadioTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.secondary};
  margin: 2.5rem 0 0 0;
`;

const SignupForm = () => {
  const { register, handleSubmit, errors, formState } = useForm();
  
  const history = useHistory();

  const onSubmit = async (data) => {
    await axios.post("/signupform", data);

    history.push("/success");
  };

  const componentInputData = [
    {
      type: "text",
      id: "name",
      name: "name",
      placeholder: "* Your Name",
      ref: {
        requiredMessage: "NAME is required. Enter only alphabetic characters",
        pattern: /^[A-Za-z ]+$/i,
        maxLength: 30,
        maxLengthMessage: "Enter maximum 30 characters."
      }
    },
    {
      type: "number",
      id: "pokedex",
      name: "pokedex",
      placeholder: "* Your PokedexID number",
      ref: {
        requiredMessage: "POKEDEX ID is required.",
        minLength: 14,
        minLengthMessage: "Your POKEDEX ID must be 14 characters long.",
        maxLength: 14,
        maxLengthMessage: "Your POKEDEX ID must be 14 characters long."
      }
    },
    {
      type: "email",
      id: "email",
      name: "email",
      placeholder: "* Your Email",
      ref: {
        requiredMessage: "EMAIL is required. Enter a valid email address.",
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        maxLength: 40,
        maxLengthMessage: "Enter maximum 40 characters."
      }
    },
    {
      type: "number",
      id: "phone",
      name: "phone",
      placeholder: "* Your Phone Number",
      ref: {
        requiredMessage: "PHONE NUMBER is required. Use only numbers.",
        maxLength: 20,
        maxLengthMessage: "Enter maximum 20 characters. Use only numbers."
      }
    }
  ];

  const componentRadioData = [
    {
      type: "radio",
      id: "radiosolo",
      name: "radio",
      value: "solo",
      placeholder: "Solo.",
      ref: {
        requiredMessage: "PLAN is required."
      }
    },
    {
      type: "radio",
      id: "radioduo",
      name: "radio",
      value: "duo",
      placeholder: "Duo.",
      ref: {
        requiredMessage: "PLAN is required."
      }
    }
  ];

  const renderComponentInputData = componentInputData.map(({ type, id, name, placeholder, ref }) => {
    return (
      <ItemContainer key={id}>
        <InputField 
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          autoComplete="off"
          ref={register({
            required: {
              value: true,
              message: ref.requiredMessage
            },
            pattern: {
              value: ref?.pattern,
              message: ref.requiredMessage
            },
            minLength: {
              value: ref?.minLength,
              message: ref?.minLengthMessage
            },
            maxLength: {
              value: ref?.maxLength,
              message: ref?.maxLengthMessage
            }
          })}
        />
        {name === "name" ? errors.name && <InputErrorMessage>{errors.name.message}</InputErrorMessage> : null}
        {name === "pokedex" ? errors.pokedex && <InputErrorMessage>{errors.pokedex.message}</InputErrorMessage> : null}
        {name === "email" ? errors.email && <InputErrorMessage>{errors.email.message}</InputErrorMessage> : null}
        {name === "phone" ? errors.phone && <InputErrorMessage>{errors.phone.message}</InputErrorMessage> : null}
      </ItemContainer>
    );
  });

  const renderComponentRadioData = componentRadioData.map(({ type, id, name, value, placeholder, ref }) => {
    return (
      <ItemRadioContainer key={id}>
        <ItemRadioButton 
          type={type}
          id={id}
          name={name}
          value={value}
          ref={register({
            required: {
              value: true,
              message: ref.requiredMessage
            }
          })} 
        />
        <RadioFormLabel htmlFor="radio">{placeholder}</RadioFormLabel>
      </ItemRadioContainer>
    );
  });

  return (
    <ComponentContainer>
      <FormContainer method="POST" action="/signupform" id="signupform" onSubmit={handleSubmit(onSubmit)}>
        <InputFormLabel htmlFor="signupform">Ready to get into action? - Subscribe here!</InputFormLabel>
        {renderComponentInputData}
        <MainRadioContainer>
          <RadioTitle>* Which plan would you like to subscribe to?</RadioTitle>
          {renderComponentRadioData}
          {errors.radio && <InputErrorMessage>{errors.radio.message}</InputErrorMessage>}
        </MainRadioContainer>
        <MainRadioContainer>
          <ItemRadioContainer>
            <ItemRadioButton 
              type="checkbox"
              id="checkbox"
              name="checkbox"
              ref={register({
                required: {
                  value: true,
                  message: "CONSENT is required."
                }
              })} 
            />
            <RadioFormLabel htmlFor="checkbox">* By submitting data to us you give your consent that data you submit may be processed for the purposes described in the <FormLink to="/pricing">Terms & Conditions</FormLink> & <FormLink to="/pricing">Privacy Policy</FormLink>.</RadioFormLabel>
          </ItemRadioContainer>
          {errors.checkbox && <InputErrorMessage>{errors.checkbox.message}</InputErrorMessage>}
        </MainRadioContainer>
        <RequiredFields>* Required fields.</RequiredFields>
        {formState.isSubmitting ? <LoadingSpinner message={"Submitting form... Please wait!"} /> : <FormSubmitButton type="submit" name="submit" value="Submit Form" />}
      </FormContainer>
    </ComponentContainer>
  );
};

export default SignupForm;