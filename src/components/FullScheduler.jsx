import React, { useState, useEffect, useRef } from 'react'
import ReactModal from 'react-modal';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import AddEventModal from './AddEventModal';
import axios from 'axios';
import moment from 'moment';
function FullScheduler() {

  const [eventList, setEventList] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [event, setEvent] = useState()
  const calendarRef = useRef(null)


  const onEventAdded = event => {
    let calendarApi = calendarRef.current.getApi()
    calendarApi.addEvent({
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title
    });
  }

  const handleEventAdd = (data) => {
    axios.post("https://maintaimdb-044f7fcd2d92.herokuapp.com/fullcalendar", data,
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        }
      }).then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          username: response.data.username
          navigate(-1);
        }

      });
  };



  return (
    <section>
      <button onClick={() => setModalOpen(true)}>Add Event</button>
      <div className='z-0'>
        <FullCalendar
          ref={calendarRef}
          events={event}
          plugins={[dayGridPlugin]}
          initialView='dayGridMonth'
          eventAdd={event => handleEventAdd(event)}
        />
      </div>


      <AddEventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onEventAdded={event => onEventAdded(event)}
      />
    </section>
  )
}

export default FullScheduler