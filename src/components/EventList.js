import React from 'react';
import EventListItem from './EventListItem';

const EventList = (props) => (
  <>
    {
      props.data.map((event) => {
        return <EventListItem key={event.block} {...event} />
      })
    }
  </>
);

export default EventList;