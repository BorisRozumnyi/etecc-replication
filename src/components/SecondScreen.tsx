import React from 'react';
import { Container, Flex, H2, H1 } from 'src/styles';

export const SecondScreen = () => (
  <Container mt={40}>
    <Flex>
      <H2 mt={23}>HELLO</H2>
    </Flex>
    <Flex>
      <H1>
        Nice to meet you<span>.</span>
      </H1>
    </Flex>
  </Container>
);
