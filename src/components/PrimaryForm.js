import React from 'react';
import styled from 'styled-components';
import {
  Formik,
  Form,
  Field,
  FieldArray,
} from 'formik';

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

const SubmitButton = styled.button`
  background: var(--pink);
  border: 1px solid transparent;
  color: white;
  display: block;
  font-weight: bold;
  max-width: 250px;
  width: 100%;
`;

const PrimaryForm = () => {
  const initState = {
    nameAndAgeIsVisible: true,
    friendsIsVisible: false,
    summaryIsVisible: false,
  };
  const [formState, setFormState] = React.useState(initState);
  const { nameAndAgeIsVisible, friendsIsVisible } = formState;

  function handleNameAndAge(e) {
    e.preventDefault();

    setFormState({
      ...formState,
      nameAndAgeIsVisible: false,
      friendsIsVisible: true,
    });
  }

  return (
    <Formik
      initialValues={{
        name: '',
        age: '',
        friend: '',
        friends: [],
      }}
      onSubmit={(values) => {
        console.log(values);
        setFormState({
          ...formState,
          friendsIsVisible: false,
          summaryIsVisible: true,
        });
      }}
    >
      {({ values }) => (
        <Form>
          <FormSection isVisible={nameAndAgeIsVisible}>
            <div>
              <div>
                <label htmlFor="name">Name:</label>
                <Field type="input" name="name" />
              </div>

              <div>
                <label htmlFor="name">Age:</label>
                <Field type="number" name="age" />
              </div>
            </div>
            <NextButton onClick={handleNameAndAge}>NEXT</NextButton>
          </FormSection>

          <FormSection isVisible={friendsIsVisible}>
            <FieldArray
              name="friends"
              render={(arrayHelpers) => (
                <>
                  <label htmlFor="friend">Friend Name:</label>
                  <div>
                    <Field name="friend" placeholder="friend" />
                    <button type="button" onClick={() => arrayHelpers.push(values.friend)}>+</button>
                  </div>
                </>
              )}
            />
            <SubmitButton type="submit">SUBMIT</SubmitButton>
          </FormSection>
        </Form>
      )}
    </Formik>
  );
};

export default PrimaryForm;
