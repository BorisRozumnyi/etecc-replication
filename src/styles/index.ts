import styled, { createGlobalStyle } from 'styled-components';

type TagProps = {
  mt?: number;
  p?: string;
  border?: string;
  bold?: boolean;
  bg?: string;
};

export const BaseTag = styled.div`
  ${({ mt }: TagProps) => mt && `margin-top: ${mt}px`};
  ${({ p }: TagProps) => p && `padding: ${p}`};
  ${({ border }: TagProps) => border && `border: ${border}`};
  ${({ bg }: TagProps) => bg && `background: ${bg}`};
  ${({ bold }: TagProps) => bold && 'font-weight: 700 !important'};
`;

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins-Regular, sans-serif;
  }
`;

export const Container = styled.section`
  margin: 0 auto;
  margin-top: ${({ mt }: TagProps) => `${mt}px`};
  @media (min-width: 768px) {
    width: 730px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const Flex = styled(BaseTag)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

export const H1 = styled.h1`
  margin-top: ${({ mt }: TagProps) => `${mt}px`};
  font-size: 2.75rem;
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
  line-height: 2.95rem;
  letter-spacing: 0;
  font-family: 'Rozha One', serif;
  text-align: center;
  color: #444444;
`;

export const H1WithLines = styled(H1)`
  color: #fff;
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

export const H2 = styled.h2`
  margin-top: ${({ mt }: TagProps) => `${mt}px`};
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

export const H4 = styled.h4`
  margin-top: ${({ mt }: TagProps) => `${mt}px`};
  ${({ bold }: TagProps) => bold && 'font-weight: 700 !important'};
  font-size: 1.4rem;
  line-height: 1.25;
  letter-spacing: 0;
  font-family: Georgia, serif;
  font-weight: 400;
  text-align: center;
`;

export const Button = styled(Flex)`
  font-size: 1.75rem;
  font-family: 'Rozha One', serif;
  height: 80px;
  max-width: 300px;
  color: #e9b370;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #e9b370;
  cursor: pointer;
  transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    background-color: #e9b370;
    color: #fff;
  }
`;
