import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ComponentContainer = styled.div`
  grid-area: grid-signup;
  margin: 20rem 0 0 0;
`;

const SignUpContainer = styled.div`
  font-size: 3rem;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: 2.5rem;
  text-transform: uppercase;
  color: var(--font-color-primary);
  text-align: center;
`;

const FormInputContainer = styled.div`
  font-size: 3rem;
  margin: 2rem 0 0 0;

  &:first-of-type {
    margin: 5rem 0 0 0;
  }
`;

const FormInputText = styled.input`
  width: 35rem;
  height: 5rem;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  background-color: var(--body-color-primary);
  border: 1px solid var(--font-color-tertiary);
  box-shadow: 0px 2px 2px 0px var(--body-shadow);
  border-radius: 1rem;

  &:hover {
    background-color: var(--body-color-tertiary);
  }

  &:focus {
		outline: none;
		background-color: var(--body-color-tertiary);
  }

  &::placeholder {
		letter-spacing: 0.2rem;
		padding: 1rem 1rem 1rem 1rem;
		color: var(--font-color-tertiary);
	}
`;

const DropdownContainer = styled.div`
`;

const DropdownText = styled.div`
  margin: 5rem 0 0 0;
  font-size: 1.5rem;
  color: var(--font-color-tertiary);
`;

const Select = styled.select`
  font-size: 1.5rem;
  width: 15rem;
  margin: 1rem 0 0 0;
  background-color: var(--body-color-primary);
  color: var(--font-color-tertiary);
  box-shadow: 0px 2px 2px 0px var(--body-shadow);
  border: 1px solid var(--font-color-tertiary);
  border-radius: 1rem;
  padding: 1rem 1rem 1rem 1rem;
  cursor: pointer;

  &:hover,
	&:focus {
    background-color: var(--body-color-tertiary);
    outline: none;
	}
`;

const Option = styled.option`
  font-size: 1.5rem;
`;

const FormInputCheckboxContainer = styled(FormInputContainer)`
  &:after {
    content: " ";
    display: block;
    padding: 5rem 0 0 0;
    border-bottom: 2px solid var(--font-color-tertiary);
    width: 50%;
    margin: 0 auto;
  }
`;

const FormInputCheckbox = styled.input`
  margin: 0 1rem 0 0;
  width: 1.5rem;
  height: 1.5rem;
  color: var(--font-color-tertiary);

  &:checked {
    color: var(--font-color-tertiary);
  }
`;

const FormLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color-primary);
  font-size: 1.5rem;
`;

const FormLabelCheckBox = styled.label`
  color: var(--font-color-tertiary);
  font-size: 1.5rem;
`;

const RequiredFields = styled.div`
  margin: 5rem 0 0 0;
`;

const RequiredFieldsText = styled.div`
  font-size: 1.5rem;
  padding: 0 0 2rem 0;
  color: var(--font-color-tertiary);
`;

const FormInputSubmit = styled.input`
  width: 20rem;
  height: 5rem;
  box-shadow: 0px 2px 2px 0px var(--body-shadow);
  border-radius: 1rem;
  padding: 1rem 1rem 1rem 1rem;
  cursor: pointer;
  border: 1px solid var(--font-color-tertiary);

  &:hover {
    background-color: var(--body-color-tertiary);
  }
  
  &:focus {
    outline; none;
  }
`;

class GridSignUpForm extends React.Component {

  render() {
    return (
      <ComponentContainer>
        <SignUpContainer>
          <Form method="POST" action="/signups" id="signupform">
            <FormLabel htmlFor="signupform">Want to plunge into action? - Sign up here!</FormLabel>
            <FormInputContainer>
              <FormInputText type="text" id="name" name="name" placeholder="* Your Name" maxLength={30} autoComplete="off" />
            </FormInputContainer>
            <FormInputContainer>
              <FormInputText type="text" id="pokedex" name="pokedex" placeholder="* Your PokedexID" maxLength={15} autoComplete="off" />
            </FormInputContainer>
            <FormInputContainer>
              <FormInputText type="email" id="email" name="email" placeholder="* Your Email" maxLength={30} autoComplete="off" />
            </FormInputContainer>
            <FormInputContainer>
              <FormInputText type="text" id="phone" name="phone" placeholder="* Your Phone Number" maxLength={20} autoComplete="off" />
            </FormInputContainer>
            <DropdownContainer>
              <DropdownText>* Which plan would you like to subscribe to?</DropdownText>
              <Select>
                <Option value="" hidden>Select a plan:</Option>
                <Option value="solo">Solo</Option>
                <Option value="duo">Duo</Option>
              </Select>
            </DropdownContainer>
            <FormInputCheckboxContainer>
              <FormInputCheckbox type="checkbox" id="checkbox" name="checkbox" />
              <FormLabelCheckBox htmlFor="checkbox">* By submitting data to us you give your consent that data you submit may be processed for the purposes described in the <FormLink to="/">Terms & Conditions</FormLink> & <FormLink to="/">Privacy Policy</FormLink>.</FormLabelCheckBox>
            </FormInputCheckboxContainer>
            <RequiredFields>
              <RequiredFieldsText>* Required fields.</RequiredFieldsText>
            </RequiredFields>
            <FormInputSubmit type="submit" />
          </Form>
        </SignUpContainer>
      </ComponentContainer>
    );
  }
};

export default GridSignUpForm;