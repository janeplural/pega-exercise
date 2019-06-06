import React from 'react';
import Hero from './Hero';
import EventList from './EventList';
import PrevNextDayNav from './PrevNextDayNav';
import agenda from '../data/agenda.json';

class ThursdayPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Hero heading="Thursday, June 7"/>
        <main>
          <EventList data={agenda[5].events}/>
        </main>
        <PrevNextDayNav prev="/design-track/wednesday"/>
      </>
    );
  }
}

export default ThursdayPage;