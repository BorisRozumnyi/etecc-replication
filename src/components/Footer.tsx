import React from 'react';
import { Container } from 'src/styles';
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
    <Container mt={40}>
      <div>
        <H4>Main Office</H4>
        <P>50 South Main St. Ste 200</P>
        <P>
          Naperville, IL 60540 | <Span>630.584.2120</Span>
        </P>
      </div>
      <SocialList>
        <li>
          <FontAwesomeIcon icon={faTwitter} />
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </li>
        <li>
          <FontAwesomeIcon icon={faDribbble} />
        </li>
      </SocialList>
    </Container>
  </Wrapper>
);

const Wrapper = styled.footer`
  position: fixed;
  backface-visibility: hidden;
  bottom: 0;
  left: 0;
  right: 0;
  height: 440px;
  transform: translate3d(0, 0, 0);
  background-color: #f5e2e5;
  /* background-color: #120e0f; */
  text-align: left;
  border-top: 1px solid #120e0f;
  z-index: 2;
  padding: 60px 0 80px;
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

export const SocialList = styled.ul`
  background: #efd;
  & li {
    border: 1px solid red;
    list-style: none;
  }
`;
