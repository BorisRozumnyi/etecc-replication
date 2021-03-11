import React from 'react';
import { Flex } from 'src/styles';
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

const Container = styled.section`
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

const H1 = styled.h1`
  font-size: 2.75rem;
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
  line-height: 2.95rem;
  letter-spacing: 0;
  font-family: 'Rozha One', serif;
  color: #fff;
  text-align: center;
  &:before,
  &:after {
    transform: rotateZ(-45deg);
    width: 100%;
    position: absolute;
    content: '';
    background-color: rgba(255, 255, 255, 0.7);
    height: 1px;
    z-index: 0;
  }
  :before {
    right: -60%;
    top: -40px;
    @media (min-width: 768px) {
      right: -40%;
      top: -170px;
    }
    @media (min-width: 992px) {
      top: -260px;
    }
    @media (min-width: 1024px) {
      top: -330px;
    }
    @media (min-width: 1440px) {
      right: 40px;
    }
  }
  :after {
    left: -60%;
    bottom: -40px;
    @media (min-width: 768px) {
      left: -40%;
      bottom: -170px;
    }
    @media (min-width: 992px) {
      bottom: -260px;
    }
    @media (min-width: 1024px) {
      bottom: -330px;
    }
    @media (min-width: 1440px) {
      left: 40px;
    }
  }
`;

const H3 = styled.h3`
  text-transform: uppercase;
  color: #e9b370;
  font-weight: 600;
  margin-bottom: 25px;
`;
