import React from 'react';
import Hero from './Hero';
import EventList from './EventList';
import PrevNextDayNav from './PrevNextDayNav';
import agenda from '../data/agenda.json';

class TuesdayPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <>
        <Hero heading="Tuesday, June 5"/>
        <main>
          <ul>
            <EventList data={agenda[2].events}/>
          </ul>
        </main>
        <PrevNextDayNav prev="/design-track/monday" next="/design-track/wednesday"/>
      </>
    );
  }
}


export default TuesdayPage;