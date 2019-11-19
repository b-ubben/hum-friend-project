import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.main`
  display: flex;
    align-items: center;
    justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0;
`;

const App = () => (
  <AppContainer>
    <h1>Hello World!</h1>
  </AppContainer>
);

export default App;
