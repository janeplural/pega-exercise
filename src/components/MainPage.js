import React from 'react';
import Hero from './Hero';
import EventList from './EventList';
import agenda from '../data/agenda.json';

const MainPage = () => (
  <>
    <Hero main heading="Design Track"/>
    <main>
      <EventList data={agenda[1].events}/>
    </main>
    
  </>
);

export default MainPage;