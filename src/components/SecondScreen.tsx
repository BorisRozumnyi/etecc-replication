import React from 'react';
import { Container, Flex, H2, H1, H4 } from 'src/styles';

export const SecondScreen = () => (
  <Container mt={40}>
    <Flex>
      <H2 mt={23}>HELLO</H2>
    </Flex>
    <Flex>
      <H1 mt={25}>
        Nice to meet you<span>.</span>
      </H1>
    </Flex>
    <Flex mt={45}>
      <H4>
        We’re a digital creative studio that builds identities, websites, and
        mobile apps. We thrive on crafting thoughtful designs that carefully
        represent your product. Inspired design happens when we work with
        clients who value their product as much as we value our craft.
      </H4>
    </Flex>
    <Flex mt={45}>
      <H4 bold>How can we help?</H4>
    </Flex>
  </Container>
);
