import React from "react";
import styled from "styled-components";
import ElementContainer from "../common/ElementContainer";
import InputField from "../common/InputField";
import FormSubmitButton from "../common/FormSubmitButton";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const ComponentContainer = styled(ElementContainer)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 95%;
  margin: 0 auto;
  padding: 2rem 2rem 2rem 2rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 70%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-end: 3;
    width: 50%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-start: 2;
    grid-column-end: 4;
    width: 100%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 80%;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputFormLabel = styled.label`
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.fontColor.mainDark};
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 1rem 0;

  &:after {
    content: " ";
    padding: 3rem 0 0 0;
  	width: 80%;
    border-bottom: 2px solid ${props => props.theme.fontColor.mainDark};
    display: block;
		margin: 0 auto;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    align-self: center;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

const ItemContainer = styled.div`
  margin: 2rem 0 0 0;
`;

const RadioTitle = styled.div`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.fontColor.secondary};
  margin: 2.5rem 0 0 0;
`;

const ItemRadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ItemRadio = styled.input`
  margin: 0 1rem 0 0;
`;

const MainRadioContainer = styled.div`
  margin: 2.5rem 0 0 0;
`;

const FormLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.fontColor.mainDark};
  font-size: ${props => props.theme.fontSize.small};
`;

const RadioFormLabel = styled.label`
  display: block;
  color: ${props => props.theme.fontColor.secondary};
  font-size: ${props => props.theme.fontSize.small};
`;

const ItemRequiredFields = styled.div`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.fontColor.secondary};
  margin: 2.5rem 0 0 0;
  align-self: center;
  padding: 0 0 2rem 0;
`;

const ItemErrorMessage = styled.div`
  color: ${props => props.theme.fontColor.warning};
  font-size: ${props => props.theme.fontSize.default};
  padding: 1rem 0 0 0;
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
        requiredMessage: "NAME is required.",
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
        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
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
            pattern: ref?.pattern,
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
        {name === "name" ? errors.name && <ItemErrorMessage>{errors.name.message}</ItemErrorMessage> : null}
        {name === "pokedex" ? errors.pokedex && <ItemErrorMessage>{errors.pokedex.message}</ItemErrorMessage> : null}
        {name === "email" ? errors.email && <ItemErrorMessage>{errors.email.message}</ItemErrorMessage> : null}
        {name === "phone" ? errors.phone && <ItemErrorMessage>{errors.phone.message}</ItemErrorMessage> : null}
      </ItemContainer>
    );
  });

  const renderComponentRadioData = componentRadioData.map(({ type, id, name, value, placeholder, ref }) => {
    return (
      <ItemRadioContainer key={id}>
        <ItemRadio 
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
          {errors.radio && <ItemErrorMessage>{errors.radio.message}</ItemErrorMessage>}
        </MainRadioContainer>
        <MainRadioContainer>
          <ItemRadioContainer>
            <ItemRadio 
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
          {errors.checkbox && <ItemErrorMessage>{errors.checkbox.message}</ItemErrorMessage>}
        </MainRadioContainer>
        <ItemRequiredFields>* Required fields.</ItemRequiredFields>
        <FormSubmitButton type="submit" name="submit" disabled={formState.isSubmitting} />
      </FormContainer>
    </ComponentContainer>
  );
};

export default SignupForm;