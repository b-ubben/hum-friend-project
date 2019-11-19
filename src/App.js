import React from 'react';
import styled from 'styled-components';
import PrimaryForm from './components/PrimaryForm';

const AppContainer = styled.main`
  display: flex;
    align-items: center;
    justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0;

  --pink: rgb(225, 43, 152);

  * {
    box-sizing: border-box;
  }
`;

const App = () => (
  <AppContainer>
    <PrimaryForm />
  </AppContainer>
);

export default App;
