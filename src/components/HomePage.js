import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = styled.section`
  width: 100vw;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 992px) {
    height: 100vh;
    flex-wrap: nowrap;
  }
`
const HeadingContainer = styled.div`
  width: 100vw;
  padding-top: 14rem;
  padding-bottom: 7rem;
  padding-right: 2.1rem;
  padding-left: 2.1rem;
  background-color: #F2F3F4;
  @media (min-width: 992px) {
    padding-bottom: 0;
    padding-right: 0;
    padding-left: 5%;
    width: 40vw;
  }
`
const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 2.8rem;
  font-size: 5.6rem;
  font-weight: 400;
`
const HeadingSm = styled.small`
  display: block;
  margin-top: 0;
  font-size: 3.5rem;
  font-weight: 400;
`
const Intro = styled.p`
  margin-top: 0;
  font-size: 2.1rem;
  font-weight: 700;
  color: #F3F6FC;
`
const DetailsContainer = styled.div`
  width: 100vw;
  padding-top: 5.6rem;
  padding-bottom: 7rem;
  padding-right: 2.1rem;
  padding-left: 2.1rem;
  background-color: #00647D;
  color: #fff;
  @media (min-width: 992px) {
    width: 60vw;
    padding-top: 14rem;
    padding-bottom: 0;
    padding-left: 5%;
    padding-right: 5%;
  }
`
const Highlights = styled.ul`
  list-style-type: none;
  padding-left: 0;

  li {
    font-size: 2.8rem;
    margin-bottom: 2.8rem;
    color: #EEF2DA;
    @media (min-width: 992px) {
      font-size: 4.2rem;
    }
  }
`
const LearnLink = styled(Link)`
  display: block;
  margin-top: 6.3rem;
  font-size: 1.8rem;
  text-decoration: none;
  color: #fff;
  :visited {
    color: #fff;
  }
  :hover,
  :focus {
    color: #EEF2DA;
  }
`

const HomePage = () => (
  <Home>
    <HeadingContainer>
      <Heading>Pega<span className="uppercase">World</span></Heading>
      <HeadingSm>June 3-7, 2019</HeadingSm>  
    </HeadingContainer>
    <DetailsContainer>
      <Intro>This Year's Design Highlights:</Intro>
      <Highlights>
        <li>Customer Centricity</li>
        <li>Customer Experience</li>
        <li>User Centered Design</li>
        <li>Mobile Development</li>
        <li>Strategic Applications</li>
      </Highlights>
      <LearnLink to="/design-track">View Details</LearnLink>
    </DetailsContainer>
  </Home>
);

export default HomePage;