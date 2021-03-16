import React from 'react';
import { Button, Container, LinkElement } from 'src/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDribbble,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

export const Footer = () => (
  <Wrapper>
    <ContainerComponent>
      <div>
        <H4>Main Office</H4>
        <P>50 South Main St. Ste 200</P>
        <P>
          Naperville, IL 60540 | <Span>630.584.2120</Span>
        </P>
      </div>
      <SocialList>
        <li>
          <FontAwesomeIcon icon={faTwitter} color="#e9b370" size="2x" />
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} color="#e9b370" size="2x" />
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedinIn} color="#e9b370" size="2x" />
        </li>
        <li>
          <FontAwesomeIcon icon={faDribbble} color="#e9b370" size="2x" />
        </li>
      </SocialList>
      <Button as="button" p="5px">
        <i className="lnr lnr-arrow-right" />
        &nbsp;Learn what we do
      </Button>
    </ContainerComponent>
    <BottomBlock>
      <div>eTecc© 2021 eTecc / Interactive</div>
      <LinkElement href="/">Customer Login</LinkElement>
    </BottomBlock>
  </Wrapper>
);

const Wrapper = styled.footer`
  position: fixed;
  backface-visibility: hidden;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #120e0f;
  border-top: 1px solid #120e0f;
  z-index: 2;
  display: grid;
  grid-template: 1fr / 1fr;
`;

const ContainerComponent = styled.div`
  padding: 60px 0 80px;
  display: grid;
  justify-content: center;
`;

export const H4 = styled.h4`
  font-size: 1.62rem;
  line-height: 1.48rem;
  letter-spacing: 0;
  font-family: 'Rozha One', serif;
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
`;

const P = styled.p`
  text-align: center;
  color: #fff;
  line-height: 1.45rem;
`;

const Span = styled.span`
  color: #e9b370;
  font-size: 0.9rem;
`;

const SocialList = styled.ul`
  grid-gap: 14px;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 149px;
  justify-content: center;
  align-items: center;
  & li {
    list-style: none;
  }
`;

const BottomBlock = styled.section`
  background-color: #000;
  color: #fff;
  display: grid;
  grid-template:
    100px /
    minmax(15px, 25px) 1fr 1fr minmax(15px, 25px);
  @media (min-width: 768px) {
    grid-template-columns:
      minmax(15px, 1fr)
      minmax(40%, 1fr)
      minmax(40%, 1fr)
      minmax(15px, 1fr);
  }
  align-items: center;
  *:nth-child(1) {
    grid-column: 2/3;
  }
  *:nth-child(2) {
    grid-column: 3/4;
    justify-self: end;
  }
`;
