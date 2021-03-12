import React from 'react';
import { Container, Flex, H1, H4, H2Yellow } from 'src/styles';
import styled from 'styled-components';

export const ThirdScreen = () => (
  <Wrapper>
    <Container mt={40}>
      <Flex mb={80}>
        <H2Yellow mt={23}>OUR EXPERTISE</H2Yellow>
      </Flex>
      <Grid>
        <GridItem>
          <H4OurExpertise>Interface Design</H4OurExpertise>
          <P>
            Our interface design isn&apost just creative, it&aposs problem
            solving. Our solutions live on desktops, tablets and mobile screens.
          </P>
        </GridItem>
        <GridItem>
          <H4OurExpertise>Identity Design</H4OurExpertise>
          <P>
            Our logos are as thoughtful, compelling and distinct as your brand.
            Etecc gives you ownership over your identity.
          </P>
        </GridItem>
        <GridItem>
          <H4OurExpertise>Web Development</H4OurExpertise>
          <P>
            Built in-house with confidence: responsive websites, inventory
            management systems, web apps and beyond.
          </P>
        </GridItem>
        <GridItem>
          <H4OurExpertise>App Development</H4OurExpertise>
          <P>
            We know mobile from interface to api. Bring value to your customers.
            Let us show you how.
          </P>
        </GridItem>
      </Grid>
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

const Grid = styled.section`
  @media (min-width: 768px) {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GridItem = styled.article`
  margin-bottom: 30px;
  padding: 0 2em;
  @media (min-width: 992px) {
    border-right: 1px solid #fff;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    padding: 0 1.2rem;
    border: none;
    margin-bottom: 0;
  }
  &:last-child {
    border-right: none;
  }
`;

export const H4OurExpertise = styled.h4`
  font-size: 1.62rem;
  line-height: 1.48rem;
  letter-spacing: 0;
  font-family: 'Rozha One', serif;
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
`;

export const P = styled.p`
  color: #e9b370;
  text-align: center;
  font-size: 1.1rem;
  font-family: Georgia, serif;
  font-weight: 300;
`;
