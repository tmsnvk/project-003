import React, { useState } from "react";
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
  font-size: 3rem;
  margin: 2rem 0 0 0;
`;

const FormInputText = styled.input`
  width: 35rem;
  height: 5rem;
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
`;

const RadioContainer = styled.div`

`;

const RadioText = styled.div`
  font-size: 1.5rem;
  color: var(--font-color-three);
  margin: 5rem 0 0 0;
`;

const RadioOne = styled.div`

`;

const RadioSolo = styled.input`
  margin: 0 1rem 0 0;
  width: 1.5rem;
  height: 1.5rem;
  color: var(--font-color-three);

  &:checked {
    color: var(--font-color-three);
  }
`;

const RadioTwo = styled.div`

`;

const RadioDuo = styled.input`
  margin: 0 1rem 0 0;
  width: 1.5rem;
  height: 1.5rem;
  color: var(--font-color-three);

  &:checked {
    color: var(--font-color-three);
  }
`;

const RequiredCheckboxContainer = styled(FormInputContainer)`
  &:after {
    content: " ";
    display: block;
    padding: 5rem 0 0 0;
    border-bottom: 2px solid var(--font-color-three);
    width: 50%;
    margin: 0 auto;
  }
`;

const RequiredCheckbox = styled.input`
  margin: 0 1rem 0 0;
  width: 1.5rem;
  height: 1.5rem;
  color: var(--font-color-three);

  &:checked {
    color: var(--font-color-three);
  }
`;

const FormLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color-one);
  font-size: 1.5rem;
`;

const FormLabelCheckbox = styled.label`
  color: var(--font-color-three);
  font-size: 1.5rem;
`;

const RequiredFields = styled.div`
  margin: 5rem 0 0 0;
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

const GridSignUpForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (data) => {
    alert("you have submmitted it!!");

    const response = await axios.post("/formsignup", data);
    console.log(data);
  };

  return (
    <ComponentContainer>
      <SignUpContainer>
        <Form method="POST" action="/formsignup" id="signupform" onSubmit={handleSubmit(onSubmit)}>
          <FormLabel htmlFor="signupform">Ready to take action? - Subscribe up here!</FormLabel>
          <FormInputContainer>
            <FormInputText type="text" id="name" name="name" placeholder="* Your Name" autoComplete="off" ref={register({ required: true, pattern: /^[A-Za-z]+$/i, maxLength: 30 })} />
            {errors.name && <span>This field is required</span>}
          </FormInputContainer>
          <FormInputContainer>
            <FormInputText type="text" id="pokedex" name="pokedex" placeholder="* Your PokedexID" autoComplete="off" ref={register({ required: true, maxLength: 12 })} />
            {errors.pokedex && <span>This field is required</span>}
          </FormInputContainer>
          <FormInputContainer>
            <FormInputText type="email" id="email" name="email" placeholder="* Your Email" autoComplete="off" ref={register({ required: true, pattern: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/, maxLength: 40 })} />
            {errors.email && <span>This field is required</span>}
          </FormInputContainer>
          <FormInputContainer>
            <FormInputText type="text" id="phone" name="phone" placeholder="* Your Phone Number" autoComplete="off" ref={register({ required: true, pattern: /^[0-9]*$/i, maxLength: 20 })} />
            {errors.phone && <span>This field is required</span>}
          </FormInputContainer>
          <RadioContainer>
            <RadioText>* Which plan would you like to subscribe to?</RadioText>
              <RadioOne>
                <RadioSolo type="radio" id="radiosolo" name="radio" />
                <FormLabelCheckbox htmlFor="radiosolo">Solo.</FormLabelCheckbox>
              </RadioOne>
              <RadioTwo>
                <RadioDuo type="radio" id="radioduo" name="radio" />
                <FormLabelCheckbox htmlFor="radioduo">Duo.</FormLabelCheckbox>
              </RadioTwo>
          </RadioContainer>
          <RequiredCheckboxContainer>
            <RequiredCheckbox type="checkbox" id="checkbox" name="checkbox" ref={register({ required: true })} />
            <FormLabelCheckbox htmlFor="checkbox">* By submitting data to us you give your consent that data you submit may be processed for the purposes described in the <FormLink to="/pricing">Terms & Conditions</FormLink> & <FormLink to="/pricing">Privacy Policy</FormLink>.</FormLabelCheckbox>
            {errors.checkbox && <span>This field is required</span>}
          </RequiredCheckboxContainer>
          <RequiredFields>
            <RequiredFieldsText>* Required fields.</RequiredFieldsText>
          </RequiredFields>
          <FormInputSubmit type="submit" name="submit" />
        </Form>
      </SignUpContainer>
    </ComponentContainer>
  );
};

export default GridSignUpForm;