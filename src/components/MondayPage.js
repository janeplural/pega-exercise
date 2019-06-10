import React from 'react';
import Hero from './Hero';
import EventList from './EventList';
import PrevNextDayNav from './PrevNextDayNav';
import agenda from '../data/agenda.json';

class MondayPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Hero heading="Monday, June 4"/>
        <main>
          <ul>
            <EventList data={agenda[1].events}/>
          </ul>
        </main>
        <PrevNextDayNav prev="/design-track/sunday" next="/design-track/tuesday"/>
      </>
    )
  }
}

export default MondayPage;