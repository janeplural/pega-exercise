import React from 'react';
import uuid from 'uuid';
import EventListItem from './EventListItem';


const EventList = (props) => (
  <>
    {
      props.data.map((event) => {
        return <EventListItem key={uuid()} {...event} />
      })
    }
  </>
);

export default EventList;