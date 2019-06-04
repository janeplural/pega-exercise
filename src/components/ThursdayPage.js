import React from 'react';
import Hero from './Hero';
import EventList from './EventList';
import PrevNextDayNav from './PrevNextDayNav';
import agenda from '../data/agenda.json';

const ThursdayPage = () => (
  <>
    <Hero heading="Thursday, June 7"/>
    <main>
      <EventList data={agenda[5].events}/>
    </main>
    <PrevNextDayNav prev="/design-track/wednesday"/>
  </>
);

export default ThursdayPage;