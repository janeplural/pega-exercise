import React from 'react';
import Hero from './Hero';
import EventList from './EventList';
import PrevNextDayNav from './PrevNextDayNav';
import agenda from '../data/agenda.json';

const WednesdayPage = () => (
  <>
    <Hero heading="Wednesday, June 6"/>
    <main>
      <EventList data={agenda[1].events}/>
    </main>
    <PrevNextDayNav prev="/design-track/tuesday" next="/design-track/thursday"/>
  </>
);

export default WednesdayPage;