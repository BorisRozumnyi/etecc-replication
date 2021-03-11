import React from 'react';
import { Flex } from 'src/styles';
import styled from 'styled-components';

export const SecondScreen = () => (
  <Flex>
    <H2>
      <Span>HELLO</Span>
    </H2>
  </Flex>
);

const H2 = styled.h2`
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.55;
  letter-spacing: 2px;
  font-family: 'PantReg', Helvetica, sans-serif;
  overflow: hidden;
`;

const Span = styled.span`
  position: relative;
  display: inline-block;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    border-bottom: 1px solid #802121;
    width: 591px;
    margin: 0 20px;
  }
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    border-bottom: 1px solid #e9e9e9;
    width: 591px;
    margin: 0 20px;
  }
`;
