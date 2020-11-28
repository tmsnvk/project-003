import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
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
  width: 90%;
  margin: 0 auto;

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

const TextareaInputField = styled.textarea`
  width: 25rem;
  height: 20rem;
  resize: none;
  font-family: ${({ theme }) => theme.fontFamily.main};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 1rem 0.5rem 0.5rem 2rem;
  background-color: ${({ theme }) => theme.color.primaryDark};
  border: 1px solid ${({ theme }) => theme.color.secondary};
  box-shadow: 0px 2px 2px 0px ${({ theme }) => theme.color.shadow};
  border-radius: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryLight};
  }

  &:focus {
		outline: none;
		background-color: ${({ theme }) => theme.color.primaryLight};
  }

  &::placeholder {
		letter-spacing: 0.2rem;
		padding: 1rem 1rem 1rem 1rem;
		color: ${({ theme }) => theme.color.secondary};
	}

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    width: 30rem;
  }
`;

const ContactForm = () => {
  const { register, handleSubmit, errors, formState } = useForm();
  
  const history = useHistory();

  const onSubmit = async (data) => {
    await axios.post("/contactform", data);

    history.push("/success");
  };

  const componentInputData = [
    {
      type: "text",
      id: "name",
      name: "name",
      placeholder: "* Your Name",
      ref: {
        value: true,
        requiredMessage: "NAME is required. Enter only alphabetic characters.",
        pattern: /^[A-Za-z ]+$/i,
        maxLength: 30,
        maxLengthMessage: "Enter maximum 30 characters."
      }
    },
    {
      type: "number",
      id: "pokedex",
      name: "pokedex",
      placeholder: "Your PokedexID number",
      ref: {
        value: false,
        requiredMessage: undefined,
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
        value: true,
        requiredMessage: "EMAIL is required. Enter a valid email address.",
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        maxLength: 40,
        maxLengthMessage: "Enter maximum 40 characters."
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
              value: ref.value,
              message: ref?.requiredMessage
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
      </ItemContainer>
    );
  });

  return (
    <ComponentContainer>
      <FormContainer method="POST" action="/contactform" id="contactform" onSubmit={handleSubmit(onSubmit)}>
        <InputFormLabel htmlFor="contactform">Have a question you didn't find in the FAQ? - Tell us!</InputFormLabel>
       {renderComponentInputData}
        <ItemContainer>
          <TextareaInputField
            id="textarea"
            name="textarea"
            placeholder="* Your Message"
            autoComplete="off"
            ref={register({
              required: {
                value: true,
                message: "MESSAGE is required. Enter maximum 1000 characters."
              },
              maxLength: {
                value: 1000,
                message: "Enter maximum 1000 characters."
              } 
            })} />
          {errors.textarea && <InputErrorMessage>{errors.textarea.message}</InputErrorMessage>}
        </ItemContainer>
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
              })} />
            <RadioFormLabel htmlFor="checkbox">* By submitting data to us you give your consent that data you submit may be processed for the purposes described in the <FormLink to="/contact">Terms & Conditions</FormLink> & <FormLink to="/contact">Privacy Policy</FormLink>.</RadioFormLabel>
          </ItemRadioContainer>
          {errors.checkbox && <InputErrorMessage>{errors.checkbox.message}</InputErrorMessage>}
        </MainRadioContainer>
        <RequiredFields>* Required fields.</RequiredFields>
        {formState.isSubmitting ? <LoadingSpinner message={"Submitting form... Please wait!"} /> : <FormSubmitButton type="submit" name="submit" value="Submit Form" />}
      </FormContainer>
    </ComponentContainer>
  );
};

export default ContactForm;