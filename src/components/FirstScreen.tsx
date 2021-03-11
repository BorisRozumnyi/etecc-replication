import React from 'react';
import { Container, Flex, H1 } from 'src/styles';
import styled from 'styled-components';

export const FirstScreen = () => (
  <Wrapper>
    <Container>
      <Flex>
        <H3>etecc interactive</H3>
      </Flex>
      <Flex>
        <H1>We build websites, software and mobile applications</H1>
      </Flex>
    </Container>
  </Wrapper>
);

const Wrapper = styled(Flex)`
  background-color: #181818;
  height: 35.625rem;
  position: relative;
  overflow: hidden;
`;

const H3 = styled.h3`
  text-transform: uppercase;
  color: #e9b370;
  font-weight: 600;
  margin-bottom: 25px;
`;
