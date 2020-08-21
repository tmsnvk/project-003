import React from "react";
import styled from "styled-components";
import { color, fontsize, mediaq } from "../../variables/styling";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import ElementContainer from "../common/ElementContainer";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 95%;
  margin: 0 auto;
  padding: 1rem 1rem 1rem 1rem;
  background-color: ${color.background.mainDark};
  box-shadow: 1px 2px 5px 1px ${color.shadow.main};
  border-radius: 1rem;

  @media only screen and (min-width: ${mediaq.medium}) {
    grid-column-end: 3;
    width: 80%;
  }

  @media only screen and (min-width: ${mediaq.large}) {
    grid-column-start: 2;
    grid-column-end: 4;
    width: 100%;
    padding: 5rem 5rem 5rem 5rem;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: ${fontsize.medium};
  color: ${color.font.mainDark};
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 1rem 0;

  &:after {
    content: " ";
    padding: 3rem 0 0 0;
  	width: 80%;
    border-bottom: 2px solid ${color.font.mainDark};
    display: block;
		margin: 0 auto;
  }

  @media only screen and (min-width: ${mediaq.medium}) {
    align-self: center;
  }

  @media only screen and (min-width: ${mediaq.large}) {
    font-size: ${fontsize.large};
  }
`;

const IndividualInputFieldContainer = styled.div`
  margin: 2rem 0 0 0;
`;

const InputField = styled.input`
  width: 25rem;
  height: 5rem;
  font-size: ${fontsize.small};
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  background-color: ${color.background.mainDark};
  border: 1px solid ${color.font.secondary};
  box-shadow: 0px 2px 2px 0px ${color.shadow.main};
  border-radius: 1rem;

  &:hover {
    background-color: ${color.background.mainLight};
  }

  &:focus {
		outline: none;
		background-color: ${color.background.mainLight};
  }

  &::placeholder {
		letter-spacing: 0.2rem;
		padding: 1rem 1rem 1rem 1rem;
		color: ${color.font.secondary};
	}

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media only screen and (min-width: ${mediaq.medium}) {
    width: 30rem;
  }
`;

const MainRadioButtonContainer = styled.div`

`;

const RadioText = styled.div`
  font-size: ${fontsize.small};
  color: ${color.font.secondary};
  margin: 2.5rem 0 0 0;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RadioSolo = styled.input`
  margin: 0 1rem 0 0;
`;

const RadioDuo = styled.input`
  margin: 0 1rem 0 0;
`;

const MainCheckboxContainer = styled(IndividualInputFieldContainer)`
  margin: 2.5rem 0 0 0;

  &:after {
    content: " ";
    display: block;
    padding: 2.5rem 0 0 0;
    border-bottom: 2px solid ${color.font.secondary};
    width: 50%;
    margin: 0 auto;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Checkbox = styled.input`
  margin: 0 1rem 0 0;
`;

const FormLink = styled(Link)`
  text-decoration: none;
  color: ${color.font.mainDark};
  font-size: ${fontsize.small};
`;

const RadioAndCheckboxFormLabel = styled.label`
  display: block;
  color: ${color.font.secondary};
  font-size: ${fontsize.small};
`;

const RequiredFieldsText = styled.div`
  font-size: ${fontsize.small};
  color: ${color.font.secondary};
  margin: 2.5rem 0 0 0;
  align-self: center;
  padding: 0 0 2rem 0;
`;

const FormInputSubmit = styled.input`
  align-self: center;
  font-size: ${fontsize.medium};
  text-align: center;
  width: 20rem;
  height: 5rem;
  padding: 1rem 1rem 1rem 1rem;
  box-shadow: 0px 2px 2px 0px ${color.shadow.main};
  border: 1px solid ${color.font.secondary};
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${color.background.mainDark};
  }
  
  &:focus {
    outline: none;
  }
`;

const ErrorMessage = styled.div`
  color: ${color.font.warning};
  font-size: ${fontsize.default};
  padding: 1rem 0 0 0;
`;

const SignupForm = () => {
  const { register, handleSubmit, errors, formState } = useForm();
  
  const history = useHistory();

  const onSubmit = async (data) => {
    await axios.post("/signupform", data);

    history.push("/success");
  };

  return (
    <ComponentContainer>
      <FormContainer method="POST" action="/signupform" id="signupform" onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor="signupform">Ready to take action? - Subscribe here!</FormLabel>
        <IndividualInputFieldContainer>
          <InputField 
            type="text"
            id="name"
            name="name"
            placeholder="* Your Name"
            autoComplete="off"
            ref={register({
              required: {
                value: true,
                message: "NAME is required."
              }, 
              pattern: /^[A-Za-z ]+$/i, 
              maxLength: {
                value: 30,
                message: "Enter maximum 30 characters."
              } 
            })} 
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </IndividualInputFieldContainer>
        <IndividualInputFieldContainer>
          <InputField 
            type="number"
            id="pokedex"
            name="pokedex"
            placeholder="* Your PokedexID number"
            autoComplete="off"
            ref={register({ 
              required: {
                value: true,
                message: "POKEDEX ID is required."
              },
              minLength: {
                value: 14,
                message: "Your POKEDEX ID must be 14 characters long."
              },
              maxLength: {
                value: 14,
                message: "Your POKEDEX ID must be 14 characters long."
              }
            })} 
          />
          {errors.pokedex && <ErrorMessage>{errors.pokedex.message}</ErrorMessage>}
        </IndividualInputFieldContainer>
        <IndividualInputFieldContainer>
          <InputField 
            type="email"
            id="email"
            name="email"
            placeholder="* Your Email"
            autoComplete="off"
            ref={register({
              required: {
                value: true,
                message: "EMAIL is required. Enter a valid email address."
              }, 
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 
              maxLength: {
                value: 40,
                message: "Enter maximum 30 characters."
              } 
            })} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </IndividualInputFieldContainer>
        <IndividualInputFieldContainer>
          <InputField 
            type="text"
            id="phone"
            name="phone"
            placeholder="* Your Phone Number"
            autoComplete="off"
            ref={register({
              required: {
                value: true,
                message: "PHONE NUMBER is required. Use only numbers."
              }, 
              pattern: /^[0-9]*$/i,
              maxLength: {
                value: 20,
                message: "Enter maximum 20 characters. Use only numbers."
              }
            })} 
          />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        </IndividualInputFieldContainer>
        <MainRadioButtonContainer>
          <RadioText>* Which plan would you like to subscribe to?</RadioText>
          <RadioContainer>
            <RadioSolo 
              type="radio"
              id="radiosolo"
              name="radio"
              value={"solo"}
              ref={register({
                required: {
                  value: true,
                  message: "PLAN is required."
                }
              })} 
            />
            <RadioAndCheckboxFormLabel htmlFor="radio">Solo.</RadioAndCheckboxFormLabel>
          </RadioContainer>
          <RadioContainer>
            <RadioDuo 
              type="radio"
              id="radioduo"
              name="radio"
              value={"duo"}
              ref={register({
                required: {
                  value: true,
                  message: "PLAN is required."
                }
              })} 
            />
            <RadioAndCheckboxFormLabel htmlFor="radio">Duo.</RadioAndCheckboxFormLabel>
          </RadioContainer>
          {errors.radio && <ErrorMessage>{errors.radio.message}</ErrorMessage>}
        </MainRadioButtonContainer>
        <MainCheckboxContainer>
          <CheckboxContainer>
            <Checkbox 
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
            <RadioAndCheckboxFormLabel htmlFor="checkbox">* By submitting data to us you give your consent that data you submit may be processed for the purposes described in the <FormLink to="/pricing">Terms & Conditions</FormLink> & <FormLink to="/pricing">Privacy Policy</FormLink>.</RadioAndCheckboxFormLabel>
          </CheckboxContainer>
          {errors.checkbox && <ErrorMessage>{errors.checkbox.message}</ErrorMessage>}
        </MainCheckboxContainer>
        <RequiredFieldsText>* Required fields.</RequiredFieldsText>
        <FormInputSubmit type="submit" name="submit" disabled={formState.isSubmitting} />
      </FormContainer>
    </ComponentContainer>
  );
};

export default SignupForm;