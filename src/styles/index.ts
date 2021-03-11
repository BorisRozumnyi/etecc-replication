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
  font-size: 1.5rem;
  line-height: 1.55;
  letter-spacing: 2px;
  font-family: 'PantReg', Helvetica, sans-serif;
  width: 100%;
  display: flex;
  flex-direction: row;

  &:before,
  &:after {
    content: '';
    flex: 1 1;
    border-bottom: 1px solid #e9e9e9;
    margin: auto;
  }

  &:before {
    margin-right: 10px;
  }

  &:after {
    margin-left: 10px;
  }
`;
