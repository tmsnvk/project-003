import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
// import ElementContainer from "../../commoncomponents/ElementContainer";
// import InputField from "../../commoncomponents/InputField";
// import FormSubmitButton from "../../commoncomponents/FormSubmitButton";
// import RequiredFields from "../../commoncomponents/RequiredFields";
// import InputFormLabel from "../../commoncomponents/InputFormLabel";
// import ItemContainer from "../../commoncomponents/ItemContainer";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 90%;
  margin: 0 auto;
  padding: 1rem 1rem 1rem 1rem;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  box-shadow: 1px 2px 5px 1px ${props => props.theme.shadowColor.main};
  border-radius: 1rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-end: 4;
    width: 60%;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
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

const IndividualInputFieldContainer = styled.div`
  margin: 2rem 0 0 0;
`;

const InputField = styled.input`
  width: 25rem;
  height: 5rem;
  font-size: ${props => props.theme.fontSize.small};
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  border: 1px solid ${props => props.theme.fontColor.secondary};
  box-shadow: 0px 2px 2px 0px ${props => props.theme.shadowColor.main};
  border-radius: 1rem;

  &:hover {
    background-color: ${props => props.theme.backgroundColor.mainLight};
  }

  &:focus {
		outline: none;
		background-color: ${props => props.theme.backgroundColor.mainLight};
  }
`;

const TextareaInputField = styled.textarea`
  width: 25rem;
  height: 5rem;
  font-family: ${props => props.theme.fontFamily.main};
  font-size: ${props => props.theme.fontSize.small};
  padding: 1.5rem 0.5rem 0.5rem 2rem;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  border: 1px solid ${props => props.theme.fontColor.secondary};
  box-shadow: 0px 2px 2px 0px ${props => props.theme.shadowColor.main};
  border-radius: 1rem;

  &:hover {
    background-color: ${props => props.theme.backgroundColor.mainLight};
  }

  &:focus {
		outline: none;
		background-color: ${props => props.theme.backgroundColor.mainLight};
  }
`;

const MainCheckboxContainer = styled(IndividualInputFieldContainer)`
  margin: 2.5rem 0 0 0;

  &:after {
    content: " ";
    display: block;
    padding: 2.5rem 0 0 0;
    border-bottom: 2px solid ${props => props.theme.fontColor.secondary};
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
  color: ${props => props.theme.fontColor.mainDark};
  font-size: ${props => props.theme.fontSize.small};
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.fontColor.warning};
  font-size: ${props => props.theme.fontSize.default};
  padding: 1rem 0 0 0;
`;

const CheckboxFormLabel = styled.label`
  display: block;
  color: ${props => props.theme.fontColor.secondary};
  font-size: ${props => props.theme.fontSize.small};
`;

const RequiredFieldsText = styled.div`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.fontColor.secondary};
  margin: 2.5rem 0 0 0;
  align-self: center;
  padding: 0 0 2rem 0;
`;

const FormInputSubmit = styled.input`
  align-self: center;
  font-size: ${props => props.theme.fontSize.medium};
  text-align: center;
  width: 20rem;
  height: 5rem;
  padding: 1rem 1rem 1rem 1rem;
  box-shadow: 0px 2px 2px 0px ${props => props.theme.shadowColor.main};
  border: 1px solid ${props => props.theme.fontColor.secondary};
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.backgroundColor.mainDark};
  }
  
  &:focus {
    outline: none;
  }
`;

const ContactForm = () => {
  const { register, handleSubmit, errors, formState } = useForm();
  
  const history = useHistory();

  const onSubmit = async (data) => {
    await axios.post("/contactform", data);

    history.push("/success");
  };

  return (
    <ComponentContainer>
      <FormContainer method="POST" action="/contactform" id="contactform" onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor="contactform">Have a question you didn't find in the FAQ? - Write us!</FormLabel>
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
            })} />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </IndividualInputFieldContainer>
        <IndividualInputFieldContainer>
          <InputField 
            type="number"
            id="pokedex"
            name="pokedex"
            placeholder="Your PokedexID number"
            autoComplete="off"
            ref={register({ 
              required: {
                value: false
              },
              minLength: {
                value: 0
              },
              maxLength: {
                value: 14
              }
            })} />
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
          <TextareaInputField
            id="textarea"
            name="textarea"
            placeholder="* Your Message"
            autoComplete="off"
            ref={register({
              required: {
                value: true,
                message: "MESSAGE is required."
              },
              maxLength: {
                value: 1000,
                message: "Enter maximum 1000 characters."
              } 
            })} />
          {errors.textarea && <ErrorMessage>{errors.textarea.message}</ErrorMessage>}
        </IndividualInputFieldContainer>
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
              })} />
            <CheckboxFormLabel htmlFor="checkbox">* By submitting data to us you give your consent that data you submit may be processed for the purposes described in the <FormLink to="/pricing">Terms & Conditions</FormLink> & <FormLink to="/pricing">Privacy Policy</FormLink>.</CheckboxFormLabel>
          </CheckboxContainer>
          {errors.checkbox && <ErrorMessage>{errors.checkbox.message}</ErrorMessage>}
        </MainCheckboxContainer>
        <RequiredFieldsText>* Required fields.</RequiredFieldsText>
        <FormInputSubmit type="submit" name="submit" disabled={formState.isSubmitting} />
      </FormContainer>
    </ComponentContainer>
  );
};

export default ContactForm;