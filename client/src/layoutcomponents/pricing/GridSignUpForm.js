import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  grid-area: grid-signup;
  margin: 20rem 3rem 3rem 3rem;
  padding: 1rem 1rem 1rem 1rem;
`;

const SignUpContainer = styled.div`
  font-size: 3rem;
  width: 80%;
  margin: 0 auto;
`;

const FormLabel = styled.label`

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInputContainer = styled.div`

`;

const FormInput = styled.input`

`;

class GridSignUpForm extends React.Component {
  
  render() {
    return (
      <ComponentContainer>
        <SignUpContainer>
        <FormLabel htmlFor="signupform"></FormLabel>
          <Form id="signupform">
            <FormInputContainer><FormInput type="text" id="name" name="name" placeholder="* Your Name" maxlength="35" autocomplete="off"></FormInput></FormInputContainer>
            <FormInputContainer><FormInput type="text" id="pokedex" name="pokedex" placeholder="* Your PokedexID" maxlength="35" autocomplete="off"></FormInput></FormInputContainer>
            <FormInputContainer><FormInput type="email" id="email" name="email" placeholder="* Your Email" maxlength="35" autocomplete="off"></FormInput></FormInputContainer>
            <FormInputContainer><FormInput type="text" id="phone" name="phone" placeholder="* Your Phone Number" maxlength="35" autocomplete="off"></FormInput></FormInputContainer>

          </Form>
        </SignUpContainer>
      </ComponentContainer>
    );
  }
};

export default GridSignUpForm;
