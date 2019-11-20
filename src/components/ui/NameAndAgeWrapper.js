import styled from 'styled-components';

const NameAndAgeWrapper = styled.div`
  display: flex;
  margin: 0.6rem 0;

  & > div {
    width: 50%;
  }

  & > div:first-of-type {
    margin-right: 0.5rem;
  }
`;

export default NameAndAgeWrapper;
