import React from 'react';
import Hero from './Hero';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SundayPage = () => (
  <Main>
    <Hero heading="Sunday, June 3"/>
    <h1>Sunday</h1>    
  </Main>
);

export default SundayPage;