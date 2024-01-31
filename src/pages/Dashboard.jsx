import React from 'react'
import './Dashboard.css'
import { EmailIcon } from '../assets/icons/EmailIcon';

import { Link, NavLink } from "react-router-dom";
import { links } from '../data/dummy';
import { BsCurrencyDollar } from 'react-icons/bs';
import { LineChart, Button, SparkLine, Stacked } from '../components';
import { SparklineAreaData, cardsData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import {
  scheduleData, kanbanData,
  kanbanGrid
} from '../data/dummy';
import { MaintenanceScheduleIcon } from '../assets/icons/MaintenanceScheduleIcon';

import { CalendarComponent } from '@syncfusion/ej2-react-calendars';



const Dashboard = () => {


  const { currentColor, activeMenu, setActiveMenu } = useStateContext();
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md m-2';
  const normalLink = 'w-100 h-100 flex flex-wrap items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 bg-white dark:text-gray-200 dark:hover:text-black hover:bg-gray-300 m-2'


  return (
    <div className='flex'>
      <div className=''>
        <div className='mt-5'>
          <div className='flex flex-wrap lg:flex-nowrap 
      justify-center '>
            <div className="bg-white dark:text-gray-200
        dark:bg-secondary-dark-bg h-44 rounded-xl
         md:w-[100%] p-8 pt-9 m-3 bg- bg-[url('../src/assets/images/headerMaintAIM.jpg')]
        bg-no-repeat bg-cover bg-center">
              <div className='flex justify-between 
          items-center'>
                <div>
                  <p className='font-bold text-5xl
              text-green-200'>Maint
                    <span style={{color: currentColor}}> AIM</span>
                  </p>
                  <p className='text-sm text-gray-200'>A Computerized Management System of Asia
                    Integrated Machine Inc.
                  </p>
                </div>
              </div>
              <div className='mt-6 text-center'>
                <NavLink
                  to={`/user-guide`}
                  style={{ backgroundColor: currentColor }}
                  className={`text-[12px] font-extrabold opacity-0.9 p-4 hover:bg-white w-130 h-50
              pt-5 rounded-xl customShadow2 m-4  bg-white flex justify-items-center  text-center
              ${activeMenu ? 'mr-0' : 'mr-0 '}`}
                >
                  <p className='text-center justify-center items-center pl-2'>
                    Learn More
                  </p>
                </NavLink>
              </div>
            </div>

          </div>

          {/* Cards*/}

          <div className='flex-1 md:flex'>
            <div className={`flex flex-wrap  border-black  
            ${activeMenu ? 'justify-center md:w-[60%]' : ' justify-center md:w[40%] items-center'}`}>

              {cardsData.map((link) => (

                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  bgColor={currentColor}
                  style={
                    ({ isActive }) => ({
                      backgroundColor: isActive ? 'white' : ''
                    })}
                  className={`text-[18px] font-extrabold opacity-0.9 p-4 hover:drop-customShadow w-256 h-119
              pt-5 rounded-3xl customShadow m-4  bg-white flex flex-row justify-items-center  
              ${activeMenu ? 'mr-0' : 'mr-0 '}`}>

                  <span
                    className='mr-3 mb-4'
                    style={{ color: currentColor }}>
                    {link.icon}
                  </span>
                  <span className=' capitalize items-center justify-center mt-4'

                  >
                    {link.name}
                  </span>
                </NavLink>


              ))}

            </div>



            <div className={` flex flex-col justify-center  mr-3 mb-4 mt-5 ml-4 
            ${activeMenu ? 'justify-center items-center md:w-[40%]' : 'md:w[60%] justify-center items-center '}`}>
              {/* <div className={`customShadow  mt-4 mb-4 justify-center items-center w-full`}>*/}


              <div className='customShadow'>
                <iframe
                  src="https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FManila&showNav=1&title=Asia%20Integrated%20Machine&showPrint=0&showTitle=0&showTz=0&showCalendars=1&showTabs=0&src=YXNpYS5pbnRlZ3JhdGVkLm1hY2hpbmUxM0BnbWFpbC5jb20&src=ZW4ucGhpbGlwcGluZXMjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043"
                  style={{ border: 'solid 1px #777' }}
                  width="400"
                  height="300"
                  frameBorder="0"
                  scrolling="no"
                  title="Asia Integrated Schedule"
                ></iframe>
              </div>

              {/* <div className='customShadow'>
                <ScheduleComponent
                  width='400px'
                  height='300px'
                  currentView='Month'
                  eventSettings={{ dataSource: scheduleData }}
                  selectedDate={new Date(2021, 0, 10)}

                >
                  <Inject services={[Day, Week, WorkWeek,
                    Month, Agenda, Resize, DragAndDrop]} />
                </ScheduleComponent>
              </div>*/}


              <div className='mt-3 customShadow'>
                <iframe
                  src="https://calendar.google.com/calendar/embed?height=200&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FManila&showNav=1&title=MaintAIM%20Agenda&showPrint=0&showTitle=1&showTz=0&showCalendars=1&showTabs=0&mode=AGENDA&src=YXNpYS5pbnRlZ3JhdGVkLm1hY2hpbmUxM0BnbWFpbC5jb20&src=ZW4ucGhpbGlwcGluZXMjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043"
                  style={{ border: 'solid 1px #777' }}
                  width="400"
                  height="200"
                  frameBorder="0"
                  scrolling="no"
                  title="Asia Integrated Schedule"
                ></iframe>

              </div>



              {/*</div> */}
              {/*<div className='shadow-xl w-full'>
                <KanbanComponent
                  id="kanban"
                  dataSource={kanbanData}
                  width='300px'
                  height='00px'
                  cardSettings={{
                    contentField: 'Summary',
                    headerField: 'Id'
                  }}
                  keyField="Status"
                >
                  <ColumnsDirective>
                    {kanbanGrid.map((item, index) =>
                      <ColumnDirective key={index} {...item} />)}
                  </ColumnsDirective>
                </KanbanComponent>
              </div> */}
            </div>

            {/*dididiasa */}

          </div>

          {/* Lower Cards 

          <div className='flex gap-10 flex-wrap 
      justify-center'>
            <div className='bg-white dark:text-gray-200
        dark:bg-secondary-dark-bg m-3 p-4
        rounded-2xl md:w-780 shadow-2xl'>
              <div className='flex justify-between'>
                <p className='font-semibold text-xl'>
                  Revenue Updates
                </p>
                <div className='flex items-center gap-4'>
                  <p className='flex items-center gap-2
              text-gray-600 hover:drop-shadow-xl'>
                    <span>
                      Expense
                    </span>
                  </p>
                  <p className='flex items-center gap-2
              text-green-400 hover:drop-shadow-xl'>
                    <span>
                      Budget
                    </span>
                  </p>
                </div>
              </div>
              <div className='mt-10 flex gap-10 flex-wrap
          justify-center'>
                <div className='border-r-1 border-color 
            m-4 pr-10'>
                  <div>
                    <p>
                      <span className='text-3xl font-semibold'>
                        $93,000
                      </span>
                      <span className='p-1.5 hover:drop-shadow-xl
                  cursor-pointer rounded-full text-white
                  bg-green-400 ml-3 text-xs'>
                        23%
                      </span>
                    </p>
                    <p className='text-gray-500 mt-1'>
                      Budget
                    </p>
                  </div>
                  <div className='mt-8'>
                    <p>
                      <span className='text-3xl font-semibold'>
                        $48,000
                      </span>
                    </p>
                    <p className='text-gray-500 mt-1'>
                      Expense
                    </p>
                  </div>

                  {/* SparkLine Chart 

                  <div className='mt-5'>
                    <SparkLine
                      currentColor={currentColor}
                      id="line-sparkline"
                      type="Line"
                      height="80px"
                      width="250px"
                      data={SparklineAreaData}
                      color={currentColor} />
                  </div>
                  <div className='mt-10'>
                    <Button
                      color="white"
                      bgColor={currentColor}
                      text="Download Report"
                      borderRadius="10px"
                    />
                  </div>
                </div>

                {/*Stacked Chart 
                <div>
                  <Stacked
                    width="320px"
                    height="360px" />
                </div>
              </div>
            </div>
          </div> */}

        </div>


      </div>
    </div>
  )
}

export default Dashboard