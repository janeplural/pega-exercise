import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import uuid from 'uuid';
import Hero from './Hero';
import EventList from './EventList';
import EventListItem, { Card, BlockPlace, Title, Subtitle } from './EventListItem';
import agenda from '../data/agenda.json';

const DateHeading = styled.h3`
  border-bottom: .1rem solid #CACDD5;
  padding: 1.4rem 2.1rem;
  font-size: 2.45rem;
`;

class MainPage extends React.Component {
  getThemeColor = (category) => {
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
  };

  render() {
    return (
      <>
      <Hero main heading="Design Track"/>
      <main>
        <DateHeading>Sunday, June 3</DateHeading>
        <EventList data={agenda[0].events}/>
        <DateHeading>Monday, June 4</DateHeading>
        <EventList data={agenda[1].events}/>
        <DateHeading>Tuesday, June 5</DateHeading>
        <EventList data={agenda[2].events}/>
        <DateHeading>Wednesday, June 6</DateHeading>
        <EventListItem key={uuid()} {...agenda[3].events[0]}/>
        {
          agenda[3].events.slice(1,4).map((event) => {
            return (
              <ThemeProvider theme={this.getThemeColor(event.theme)}>
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
              <ThemeProvider theme={this.getThemeColor(event.theme)}>
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
        <DateHeading>Thursday, June 7</DateHeading>
        <EventList data={agenda[5].events}/>
      </main>
    </>
    )
  }
};

export default MainPage;

