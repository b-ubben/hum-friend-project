import React from 'react';
import styled from 'styled-components';
import {
  Formik,
  Form,
} from 'formik';
import TextInput from './TextInput';

const FormSection = styled.section`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
    flex-direction: column;
  
  div > * {
    width: 50%;
  }
`;

const NextButton = styled.button`
  background: var(--pink);
  border: 1px solid transparent;
  color: white;
  display: block;
  font-weight: bold;
  width: 100%;
`;

const PrimaryForm = () => {
  const initState = {
    nameAndAgeIsVisible: true,
    friendsIsVisible: false,
  };
  const [formState, setFormState] = React.useState(initState);
  const { nameAndAgeIsVisible } = formState;

  return (
    <Formik initialValues={{ name: '', age: '', friends: [] }}>
      <Form>
        <FormSection isVisible={nameAndAgeIsVisible}>
          <div>
            <TextInput name="name" label="Name: " />
          </div>
          <NextButton>NEXT</NextButton>
        </FormSection>
      </Form>
    </Formik>
  );
};

export default PrimaryForm;
