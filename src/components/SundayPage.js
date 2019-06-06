import React from 'react';
import Hero from './Hero';
import EventList from './EventList';
import PrevNextDayNav from './PrevNextDayNav';
import agenda from '../data/agenda.json';

class SundayPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Hero heading="Sunday, June 3"/>
        <main>
          <EventList data={agenda[0].events}/>
        </main>
        <PrevNextDayNav next="/design-track/monday"/>
      </>
    )
  }
}

export default SundayPage;