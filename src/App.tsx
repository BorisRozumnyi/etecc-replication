import React from 'react';
import styled from 'styled-components';
import { FirstScreen } from './components/FirstScreen';
import { Footer } from './components/Footer';
import { SecondScreen } from './components/SecondScreen';
import { ThirdScreen } from './components/ThirdScreen';

export const App = () => {
  return (
    <>
      <Main>
        <FirstScreen />
        <SecondScreen />
        <ThirdScreen />
      </Main>
      <Footer />
    </>
  );
};

export const Main = styled.main`
  background: #efd;
  z-index: 3;
  margin-bottom: 420px;
  position: relative;
`;
