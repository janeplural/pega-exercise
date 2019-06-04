import React from 'react';
import Hero from './Hero';
import EventList from './EventList';
import PrevNextDayNav from './PrevNextDayNav';
import agenda from '../data/agenda.json';

const MondayPage = () => (
  <>
    <Hero heading="Monday, June 4"/>
    <main>
      <EventList data={agenda[1].events}/>
    </main>
    <PrevNextDayNav prev="/design-track/sunday" next="/design-track/tuesday"/>
  </>
);

export default MondayPage;