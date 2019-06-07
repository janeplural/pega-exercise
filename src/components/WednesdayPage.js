import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import EventList from './EventList';
import PrevNextDayNav from './PrevNextDayNav';
import agenda from '../data/agenda.json';

const ButtonGroup = styled.div`
  margin-bottom: 3.5rem;
  border-bottom: .1rem solid #CACDD5;
  &::after {
    content: '';
    display: block;
    width: 13.8rem;
    height: .3rem;
    background-color: #C44500;
    ${props => !props.trackOne && 'transform: translateX(13.8rem)'}
  }
`;
const Button = styled.button`
  padding: 1.4rem 2.8rem;
  width: 13.8rem;
  color: #C44500;
  font-size: 1.6rem;
`
const ButtonOne = styled(Button)`
  font-weight: ${props => props.active ? '800' : '400'}
`
const ButtonTwo = styled(Button)`
  font-weight: ${props => props.active ? '400' : '800'}
`

function WednesdayPage() {
  const [trackOne, setTrack] = useState(true);

  useEffect(() => {window.scrollTo(0, 0);}, []);
  
  return(
    <>
    <Hero wed heading="Wednesday, June 6"/>
    <main>
      <ButtonGroup id="ButtonGroup" trackOne={trackOne}>
        <ButtonOne onClick={() => setTrack(true)} active={trackOne}>Track One</ButtonOne>
        <ButtonTwo onClick={() => setTrack(false)} active={trackOne}>Track Two</ButtonTwo>
      </ButtonGroup>
      {trackOne && <EventList data={agenda[3].events}/>}
      {!trackOne && <EventList data={agenda[4].events}/>}
    </main>
    <PrevNextDayNav prev="/design-track/tuesday" next="/design-track/thursday"/>
  </>
  );

}

export default WednesdayPage;