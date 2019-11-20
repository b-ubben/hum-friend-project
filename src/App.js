import React from 'react';
import styled from 'styled-components';
import PrimaryForm from './components/PrimaryForm';

const AppContainer = styled.main`
  display: flex;
    align-items: center;
    justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, 'Droid Sans', Arial, sanserif;
  margin: 0 auto;
  font-weight: 300;
  min-height: 100vh;
  padding: 0;

  --pink: rgb(225, 43, 152);
  --light-pink: #fed7d9;

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
