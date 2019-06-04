import React from 'react';
import Hero from './Hero';
import EventList from './EventList';
import PrevNextDayNav from './PrevNextDayNav';
import agenda from '../data/agenda.json';

const TuesdayPage = () => (
  <>
    <Hero heading="Tuesday, June 5"/>
    <main>
      <EventList data={agenda[2].events}/>
    </main>
    <PrevNextDayNav prev="/design-track/monday" next="/design-track/wednesday"/>
  </>
);

export default TuesdayPage;