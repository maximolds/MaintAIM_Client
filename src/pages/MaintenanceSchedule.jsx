import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import * as ReactDOM from "react-dom";
import {
  ScheduleComponent, ViewsDirective, ViewDirective,
  Day, Week, WorkWeek, Month, Agenda, Inject, Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

import {
  KanbanComponent, ColumnsDirective,
  ColumnDirective
} from '@syncfusion/ej2-react-kanban';
import { useStateContext } from '../contexts/ContextProvider';
import {
  scheduleData, kanbanData,
  kanbanGrid
} from '../data/dummy';
import { Header, FullScheduler } from '../components';

const MaintenanceSchedule = () => {

  const { currentColor, activeMenu, setActiveMenu } = useStateContext();

  const [listOfMaintenanceScheduler, setListOfMaintenanceScheduler] = useState([]);

  useEffect(() => {
    axios.get("https://maintaimdb-044f7fcd2d92.herokuapp.com/maintenancescheduler").then((response) => {
      setListOfMaintenanceScheduler(response.data);
    });
  }, []);



  let calendarId = '65f21ad37b7c18bcc4e1c42a8885e1d68f520c5735eff8b7b76ce6ffdb1211d4@group.calendar.google.com';
  let publicKey = 'AIzaSyBGwjr-EI4rbuZvGg1yLab7yhdBXMSBjwo';

  const dataManger = new DataManager({
    url: 'https://www.googleapis.com/calendar/v3/calendars/' + calendarId + '/events?key=' + publicKey,
    adaptor: new WebApiAdaptor(),
    crossDomain: true
  });
  const eventSettings = { dataSource: dataManger };

  const onDataBinding = (e) => {
    let items = e.result.items;
    let scheduleData = [];
    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        let event = items[i];
        let when = event.start.dateTime;
        let start = event.start.dateTime;
        let end = event.end.dateTime;
        if (!when) {
          when = event.start.date;
          start = event.start.date;
          end = event.end.date;
        }
        scheduleData.push({
          Id: event.id,
          Subject: event.summary,
          StartTime: new Date(start),
          EndTime: new Date(end),
          IsAllDay: !event.start.dateTime
        });
      }
    }
    e.result = scheduleData;
  }


  return (


    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 text-slate-950 dark:text-white'>
      <Header
        style={{
          color: 'black'
        }}
        darkStyle={{
          color: 'white'
        }}
       
        title="Maintenance Schedule"
      />
      <div className='m-2 md:m-10 mt-2 p-2 md:p-10 bg-white
    rounded-3xl flex-1 md:flex shadow-xl justify-between flex-col flex-wrap'>
        <div className={`flex flex-wrap  border-black  
            ${activeMenu ? 'justify-center' : ' justify-center md:w[40%] items-center'}`}>
          {/* Erase eventsettings and
          selectedDate when syncing with a database */}
          <iframe
            src="https://calendar.google.com/calendar/embed?height=500&wkst=1&bgcolor=%2386acbb&ctz=Asia%2FManila&showTabs=1&showTitle=1&title=Asia%20Integrated%20Schedule&mode=WEEK&hl=en_GB&src=YXNpYS5pbnRlZ3JhdGVkLm1hY2hpbmUxM0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4ucGhpbGlwcGluZXMjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043"
            style={{ border: 'solid 1px #777' }}
            width="100%"
            height="500"
            frameBorder="0"
            scrolling="no"
            title="Asia Integrated Schedule"
          ></iframe>


        </div>

        <div className='mt-4'>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FManila&showTitle=0&showNav=1&showDate=1&showTabs=0&showCalendars=1&mode=AGENDA&src=YXNpYS5pbnRlZ3JhdGVkLm1hY2hpbmUxM0BnbWFpbC5jb20&src=ZW4ucGhpbGlwcGluZXMjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043"
            style={{ border: 'solid 1px #777' }}
            width="100%"
            height="300"
            frameBorder="0"
            scrolling="no"
            title="Google Calendar"
          ></iframe>
        </div>

    


      </div>
      



    </div>
  )
}

export default MaintenanceSchedule