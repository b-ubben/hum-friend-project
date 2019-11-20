import styled from 'styled-components';

const FormSection = styled.section`
  animation: .2s slideIn linear;
  background: var(--light-pink);
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
    flex-direction: column;
  padding: 2rem 1rem;

  label {
    display: block;
  }

  input {
    border: 1px solid transparent;
    display: block;
    margin-top: 0.4rem;
    padding: 0.6rem;
    width: 100%;
  }

  button {
    background: var(--pink);
    border: 1px solid transparent;
    color: white;
    display: block;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 0.666rem;
    transition: .1s ease-in;

    &:focus,
    &:hover {
      background: white;
      color: var(--pink);
    }
  }

  ul {
    margin: 1rem auto 0 auto;
  }

  ul > li {
    & > * {
      display: inline-block;
    }

    p {
      margin-right: 1rem;
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
  }
`;

export default FormSection;
