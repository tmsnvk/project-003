import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const ComponentContainer = styled.div`
  grid-area: grid-signup;
  margin: 5rem 0 5rem 0;
  padding: 5rem 5rem 5rem 5rem;
  background-color: var(--body-color-three);
  box-shadow: 1px 2px 5px 1px var(--body-shadow);
  border-radius: 1rem;
`;

const SignUpContainer = styled.div`
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--font-color-one);
  text-align: center;
  margin: 0 0 3rem 0;

  &:after {
    content: " ";
    padding: 3rem 0 0 0;
  	width: 100%;
    border-bottom: 2px solid var(--font-color-one);
    display: block;
		margin: 0 auto;
  }
`;

const FormInputContainer = styled.div`
  margin: 2rem 0 0 0;
`;

const FormInputText = styled.input`
  width: 30rem;
  height: 5rem;
  font-size: 1.5rem;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  background-color: var(--body-color-one);
  border: 1px solid var(--font-color-three);
  box-shadow: 0px 2px 2px 0px var(--body-shadow);
  border-radius: 1rem;

  &:hover {
    background-color: var(--body-color-three);
  }

  &:focus {
		outline: none;
		background-color: var(--body-color-three);
  }

  &::placeholder {
		letter-spacing: 0.2rem;
		padding: 1rem 1rem 1rem 1rem;
		color: var(--font-color-three);
	}

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const RadioContainer = styled.div`

`;

const RadioText = styled.div`
  font-size: 1.5rem;
  color: var(--font-color-three);
  margin: 2.5rem 0 0 0;
`;

const RadioOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RadioSolo = styled.input`
  margin: 0 1rem 0 0;
`;

const RadioTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RadioDuo = styled.input`
  margin: 0 1rem 0 0;
`;

const RequiredCheckboxMainContainer = styled(FormInputContainer)`
  margin: 2.5rem 0 0 0;

  &:after {
    content: " ";
    display: block;
    padding: 2.5rem 0 0 0;
    border-bottom: 2px solid var(--font-color-three);
    width: 50%;
    margin: 0 auto;
  }
`;

const RequiredCheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RequiredCheckbox = styled.input`
  margin: 0 1rem 0 0;
`;

const FormLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color-one);
  font-size: 1.5rem;
`;

const FormLabelCheckbox = styled.label`
  display: block;
  color: var(--font-color-three);
  font-size: 1.5rem;
`;

const RequiredFields = styled.div`
  margin: 2.5rem 0 0 0;
  align-self: center;
`;

const RequiredFieldsText = styled.div`
  font-size: 1.5rem;
  padding: 0 0 2rem 0;
  color: var(--font-color-three);
`;

const FormInputSubmit = styled.input`
  align-self: center;
  font-size: 2rem;
  text-align: center;
  width: 20rem;
  height: 5rem;
  padding: 1rem 1rem 1rem 1rem;
  box-shadow: 0px 2px 2px 0px var(--body-shadow);
  border: 1px solid var(--font-color-three);
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--body-color-three);
  }
  
  &:focus {
    outline: none;
  }
`;

const ErrorMessage = styled.div`
  color: var(--font-color-five);
  font-size: 1.2rem;
  padding: 1rem 0 0 0;
`;

const GridSignUpForm = () => {
  const { register, handleSubmit, errors, formState } = useForm();

  const onSubmit = async (data) => {
    alert("you have submmitted it!!");

    await axios.post("/formsignup", data);
  };

  return (
    <ComponentContainer>
      <SignUpContainer>
        <Form method="POST" action="/formsignup" id="signupform" onSubmit={handleSubmit(onSubmit)}>
          <FormLabel htmlFor="signupform">Ready to take action? - Subscribe here!</FormLabel>
          <FormInputContainer>
            <FormInputText 
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
              })} />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </FormInputContainer>
          <FormInputContainer>
            <FormInputText 
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
              })} />
            {errors.pokedex && <ErrorMessage>{errors.pokedex.message}</ErrorMessage>}
          </FormInputContainer>
          <FormInputContainer>
            <FormInputText 
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
          </FormInputContainer>
          <FormInputContainer>
            <FormInputText 
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
              })} />
            {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
          </FormInputContainer>
          <RadioContainer>
            <RadioText>* Which plan would you like to subscribe to?</RadioText>
              <RadioOne>
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
                <FormLabelCheckbox htmlFor="radio">Solo.</FormLabelCheckbox>
              </RadioOne>
              <RadioTwo>
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
                  })} />
                <FormLabelCheckbox htmlFor="radio">Duo.</FormLabelCheckbox>
              </RadioTwo>
              {errors.radio && <ErrorMessage>{errors.radio.message}</ErrorMessage>}
          </RadioContainer>
          <RequiredCheckboxMainContainer>
            <RequiredCheckboxContainer>
              <RequiredCheckbox 
                type="checkbox"
                id="checkbox"
                name="checkbox"
                ref={register({
                  required: {
                    value: true,
                    message: "CONSENT is required."
                  }
                })} />
              <FormLabelCheckbox htmlFor="checkbox">* By submitting data to us you give your consent that data you submit may be processed for the purposes described in the <FormLink to="/pricing">Terms & Conditions</FormLink> & <FormLink to="/pricing">Privacy Policy</FormLink>.</FormLabelCheckbox>
            </RequiredCheckboxContainer>
            {errors.checkbox && <ErrorMessage>{errors.checkbox.message}</ErrorMessage>}
          </RequiredCheckboxMainContainer>
          <RequiredFields>
            <RequiredFieldsText>* Required fields.</RequiredFieldsText>
          </RequiredFields>
          <FormInputSubmit type="submit" name="submit" disabled={formState.isSubmitting} />
        </Form>
      </SignUpContainer>
    </ComponentContainer>
  );
};

export default GridSignUpForm;