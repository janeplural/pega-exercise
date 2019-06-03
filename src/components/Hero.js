import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeroContainer = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${props => props.main ? '#F2F3F4' : '#fff'};
`
const HeroContent = styled.section`
  width: 90vw;
  max-width: 99.2rem;
  margin-bottom: 3.5rem;
  border-bottom: ${props => props.main ? 'none' :'.1rem solid #CACDD5'};
  padding-top: ${props => props.main ? '9.8rem' : '5.6rem'};
  padding-bottom: ${props => props.main ? '3.5rem' : '4.9rem'};
`;
const DesignLink = styled(Link)`
  font-size: 2.1rem;
  font-weight: 700;
  text-decoration: none;
  color: #404258;
`;
const Heading = styled.h1`
  margin-top: 1.4rem;
  margin-bottom: ${props => props.main ? '7rem' : '3.5rem'};
  font-size: ${props => props.main ? '5.6rem' : '3.5rem'};
  font-weight: 400;
  line-height: 4.7rem;
`;
const SubHeading = styled.h2`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  .uppercase {
    text-transform: uppercase;
  }
`
const PreviewButton = styled.button`
  margin-right: 7px;
  border: .1rem solid #295ED9;
  border-radius: .3rem;
  padding: 1.1rem 1.4rem;
  background-color: ${props => props.main ? '#295ED9' : '#fff'};
  color: ${props => props.main ? '#fff' : '#295ED9'};
  font-size: 1.6rem;
  font-weight: ${props => props.main ? '700' : '400'}
  line-height: 2.1rem;
`;
const DownloadButton = styled.button`
  color: #295ED9;
  font-size: 1.6rem;
  line-height: 2.1rem;
  padding: 1.1rem 1.4rem;
`;

const Hero = (props) => (
  <HeroContainer main={props.main}>
    <HeroContent main={props.main}>
      {!props.main && <DesignLink to="/">Design Track</DesignLink>}
      {props.main && <SubHeading><strong>Pega<span className="uppercase">World</span></strong> June 3-7, 2019</SubHeading>}
      <Heading main={props.main}>{props.heading}</Heading>
      <PreviewButton main={props.main}>Preview Week</PreviewButton>
      <DownloadButton>Download PDF</DownloadButton>
    </HeroContent>
  </HeroContainer>
);

export default Hero;