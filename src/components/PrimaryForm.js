import React from 'react';
import {
  Formik,
  Form,
  Field,
  FieldArray,
} from 'formik';
import FormSection from './ui/FormSection';
import NextButton from './ui/NextButton';
import SubmitButton from './ui/SubmitButton';
import NameAndAgeWrapper from './ui/NameAndAgeWrapper';
import FriendWrapper from './ui/FriendWrapper';
import StartOverButton from './ui/StartOverButton';
import NameAndAgeSummary from './ui/NameAndAgeSummary';
import FriendsSummary from './ui/FriendsSummary';

const PrimaryForm = () => {
  const initState = {
    nameAndAgeIsVisible: true,
    friendsIsVisible: false,
    summaryIsVisible: false,
  };
  const [formState, setFormState] = React.useState(initState);
  const { nameAndAgeIsVisible, friendsIsVisible, summaryIsVisible } = formState;

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
      onSubmit={() => {
        setFormState({
          ...formState,
          friendsIsVisible: false,
          summaryIsVisible: true,
        });
      }}
    >
      {({ values, setFieldValue, resetForm }) => (
        <Form>
          <FormSection isVisible={nameAndAgeIsVisible}>
            <NameAndAgeWrapper>
              <div>
                <label htmlFor="name">Name:</label>
                <Field type="input" name="name" placeholder="Name" />
              </div>

              <div>
                <label htmlFor="name">Age:</label>
                <Field type="number" name="age" placeholder="Age" />
              </div>
            </NameAndAgeWrapper>
            <NextButton onClick={handleNameAndAge}>NEXT</NextButton>
          </FormSection>

          <FormSection isVisible={friendsIsVisible}>
            <FieldArray
              name="friends"
              render={(arrayHelpers) => (
                <>
                  <FriendWrapper>
                    <label htmlFor="friend">Friend Name:</label>
                    <div>
                      <Field type="text" name="friend" placeholder="friend" />
                      <button
                        type="button"
                        onClick={() => {
                          arrayHelpers.push(values.friend);
                          setFieldValue('friend', '');
                        }}
                      >
                        +
                      </button>
                    </div>
                  </FriendWrapper>
                  {values.friends.length > 0 && (
                    <ul>
                      {values.friends.map((friend, index) => (
                        <li key={friend}>
                          <p>{friend}</p>
                          <button type="button" onClick={() => arrayHelpers.remove(index)}>-</button>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            />
            <SubmitButton type="submit">SUBMIT</SubmitButton>
          </FormSection>

          <FormSection isVisible={summaryIsVisible}>
            <NameAndAgeSummary>
              <p>
                name:
                {` ${values.name}`}
              </p>
              <p>
                age:
                {` ${values.age}`}
              </p>
            </NameAndAgeSummary>

            <FriendsSummary>
              <strong>Friends:</strong>
              {values.friends.map((friend, index) => (
                <p key={friend}>{`Friend #${index}.${friend}`}</p>
              ))}

              <StartOverButton
                type="button"
                onClick={() => {
                  resetForm({});
                  setFormState(initState);
                }}
              >
                Start Over
              </StartOverButton>
            </FriendsSummary>
          </FormSection>
        </Form>
      )}
    </Formik>
  );
};

export default PrimaryForm;
