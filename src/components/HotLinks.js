import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Container = styled.div`
  margin-bottom: 3.5rem;
  padding-right: 2.1rem;
  padding-left: 2.1rem;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 992px) {
    flex-direction: column;
    position: sticky;
    top: 100px;
    align-self: flex-start;
  }
`
const HelperText = styled.p`
  width: 100%;
  font-size: 1.4rem;
  color: #5C5E70;
`
const HotLink = styled(Link)`
  margin-right: 1.4rem;
  margin-bottom: 1.4rem;
  border: 1px solid #295ED9;
  border-radius: .3rem;
  padding: 1.1rem 1.4rem;
  color: #295ED9;
  font-size: 1.6rem;
  line-height: 2.1rem;
  :hover {
    cursor: pointer;
    box-shadow: .3rem .1rem .9rem .2rem rgba(16,19,46,.2);
  }
  :focus {
    color: #10132E;
    border-color: #10132E;
    background-color: #EAEFFA;
    outline: none;
    box-shadow: .3rem .1rem .9rem .2rem rgba(16,19,46,.2);
  }
`

const HotLinks = () => (
  <Container>
    <HelperText>Jump to day:</HelperText>
    <HotLink activeClass="active" to="sunday" smooth={true} offset={-95} duration={1000} delay={100}>Sun, June 3</HotLink>
    <HotLink activeClass="active" to="monday" smooth={true} offset={-95} duration={1000} delay={100}>Mon, June 4</HotLink>
    <HotLink activeClass="active" to="tuesday" smooth={true} offset={-95} duration={1000} delay={100}>Tue, June 5</HotLink>
    <HotLink activeClass="active" to="wednesday" smooth={true} offset={-95} duration={1000} delay={100}>Wed, June 6</HotLink>
    <HotLink activeClass="active" to="thursday" smooth={true} offset={-95} duration={1000} delay={100}>Thu, June 7</HotLink>
  </Container>
);

export default HotLinks;