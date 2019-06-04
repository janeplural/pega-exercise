import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import EventList from './EventList';
import agenda from '../data/agenda.json';

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
      <EventList data={agenda[0].events}/>
    </Main>
  </>
);

export default SundayPage;