import React from 'react';
import Hero from './Hero';
import EventList from './EventList';
import agenda from '../data/agenda.json';

const SundayPage = () => (
  <>
    <Hero heading="Sunday, June 3"/>
    <main>
      <EventList data={agenda[0].events}/>
    </main>
  </>
);

export default SundayPage;