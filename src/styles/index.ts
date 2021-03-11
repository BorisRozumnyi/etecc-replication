import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins-Regular, sans-serif;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

export const H2 = styled.h2`
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.55;
  letter-spacing: 2px;
  font-family: 'PantReg', Helvetica, sans-serif;
  overflow: hidden;

  &:before,
  &:after {
    background-color: #e9e9e9;
    content: '';
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }

  &:before {
    right: 0.5em;
    margin-left: -50%;
  }

  &:after {
    left: 0.5em;
    margin-right: -50%;
  }
`;
