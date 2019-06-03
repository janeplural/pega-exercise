import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import Event from './Event';

const Main = styled.main`
  margin: 0 auto;
  width: 90vw;
  max-width: 99.2rem;
  display: flex;
  flex-direction: column;
`

const SundayPage = () => (
  <>
    <Hero heading="Sunday, June 3"/>
    <Main>
      <Event category="strategy"/>
    </Main>
  </>
);

export default SundayPage;