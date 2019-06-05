import React from 'react';
import { Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import uuid from 'uuid';
import { Element } from 'react-scroll';
import Hero from './Hero';
import HotLinks from './HotLinks';
import EventList from './EventList';
import EventListItem, { Card, BlockPlace, Title, Subtitle } from './EventListItem';
import agenda from '../data/agenda.json';

const DateHeading = styled(Element)`
  border-bottom: .1rem solid #CACDD5;
  padding: 1.4rem 2.1rem;
  font-size: 2.45rem;
`;
const HeadingLink = styled(Link)`
  text-decoration: none;
  color: #10132E;
  :visited {
    color: #10132E;
  }
`

class MainPage extends React.Component {
  getThemeColor(category) {
    const colors = {
      break: 'solid #fff',
      centricity: 'solid #E00A81',
      cx: 'solid #2B38A1',
      main: 'solid #585C73',
      event: 'solid #FFCA5F',
      info: 'solid #A9D400',
      mobile: 'solid #FD6000',
      pegaworld: 'solid #295ED9',
      strategy: 'solid #20A950',
      travel: 'dashed #CACDD5',
      ucd: 'solid #E10B81'
    };
    return {category: colors[category]}
  }

  render() {
    return (
      <>
      <Hero main heading="Design Track"/>
      <HotLinks/>
      <main>
        <DateHeading name="sunday">
          <HeadingLink to='/design-track/sunday'>Sunday, June 3</HeadingLink>
        </DateHeading>
        <EventList data={agenda[0].events}/>
        <DateHeading name="monday">
          <HeadingLink to='/design-track/monday'>Monday, June 4</HeadingLink>
        </DateHeading>
        <EventList data={agenda[1].events}/>
        <DateHeading name="tuesday">
          <HeadingLink to='/design-track/tuesday'>Tuesday, June 5</HeadingLink>
        </DateHeading>
        <EventList data={agenda[2].events}/>
        <DateHeading name="wednesday">
          <HeadingLink to='/design-track/wednesday'>Wednesday, June 6</HeadingLink>
        </DateHeading>
        <EventListItem key={uuid()} {...agenda[3].events[0]}/>
        {
          agenda[3].events.slice(1,4).map((event) => {
            return (
              <ThemeProvider key={uuid()} theme={this.getThemeColor(event.theme)}>
                <Card aria-label={event.theme} category={event.theme}>
                  <BlockPlace>Track One {event.block}, {event.place}</BlockPlace>
                  <BlockPlace>Track Two {agenda[4].events.find(el => el.title === event.title).block}, {agenda[4].events.find(el => el.title === event.title).place}</BlockPlace>
                  <Title>{event.title}</Title>
                  {event.subtitle && <Subtitle>{event.subtitle}</Subtitle>}
                </Card> 
              </ThemeProvider>
            )
          })
        }
        <EventListItem key={uuid()} {...agenda[3].events[4]}/>
        <ThemeProvider theme={this.getThemeColor(agenda[3].events[5].theme)}>
          <Card aria-label={agenda[3].events[5].theme} category={agenda[3].events[5].theme}>
            <BlockPlace>Track One {agenda[3].events[5].block}, {agenda[3].events[5].place}</BlockPlace>
            <BlockPlace>Track Two {agenda[4].events.find(el => el.title === agenda[3].events[5].title).block}, {agenda[4].events.find(el => el.title === agenda[3].events[5].title).place}</BlockPlace>
            <Title>{agenda[3].events[5].title}</Title>
            {agenda[3].events[5].subtitle && <Subtitle>{agenda[3].events[5].subtitle}</Subtitle>}
          </Card> 
        </ThemeProvider>
        <EventListItem key={uuid()} {...agenda[3].events[6]}/>
        {
          agenda[3].events.slice(7,9).map((event) => {
            return (
              <ThemeProvider key={uuid()} theme={this.getThemeColor(event.theme)}>
                <Card aria-label={event.theme} category={event.theme}>
                  <BlockPlace>Track One {event.block}, {event.place}</BlockPlace>
                  <BlockPlace>Track Two {agenda[4].events.find(el => el.title === event.title).block}, {agenda[4].events.find(el => el.title === event.title).place}</BlockPlace>
                  <Title>{event.title}</Title>
                  {event.subtitle && <Subtitle>{event.subtitle}</Subtitle>}
                </Card> 
              </ThemeProvider>
            )
          })
        }
        {
          agenda[3].events.slice(9,13).map((event) => {
            return <EventListItem key={uuid()} {...event} />
          })
        }
        <DateHeading name="thursday">
          <HeadingLink to='/design-track/Thursday'>Thursday, June 7</HeadingLink>
        </DateHeading>
        <EventList data={agenda[5].events}/>
      </main>
    </>
    )
  }
};

export default MainPage;

