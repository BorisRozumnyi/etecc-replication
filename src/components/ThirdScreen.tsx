import React from 'react';
import { Container, Flex, H1, H4, H2Yellow } from 'src/styles';
import styled from 'styled-components';

export const ThirdScreen = () => (
  <Wrapper>
    <Container mt={40}>
      <Flex>
        <H2Yellow mt={23}>OUR EXPERTISE</H2Yellow>
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
  </Wrapper>
);

const Wrapper = styled(Flex)`
  margin-top: 135px;
  background-color: #1a1718;
  height: 35.625rem;
  position: relative;
  overflow: hidden;
`;
