import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import * as ReactDOM from "react-dom";
import { useStateContext } from '../contexts/ContextProvider';
import { Header } from '../components';

const Documentation = () => {

  const { currentColor, activeMenu, setActiveMenu } = useStateContext();

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 text-slate-950 dark:text-white'>
    <Header
      style={{
        color: 'black'
      }}
      darkStyle={{
        color: 'white'
      }}
      category='App'
      title="Documentation"
    />
    <div className='m-2 md:m-10 mt-2 p-2 md:p-10 bg-white
  rounded-3xl flex-1 md:flex shadow-xl justify-between flex-col flex-wrap'>
      <div className={`flex flex-wrap  border-black  
          ${activeMenu ? 'justify-center' : ' justify-center md:w[40%] items-center'}`}>
        {/* Erase eventsettings and
        selectedDate when syncing with a database */}
        <iframe 
        width="100%" 
        height="500" 
        title="2024 Maintenance Report"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQnI6D84AprTbFoCjmOvWCupS0qD2xIRYTQgVroIFGAiidGLZOCQLHgS-sfVm2xkD3WRf_V7-q8vbLX/pubhtml?widget=true&amp;headers=false">
        </iframe>

      </div>
    </div>
  </div>
  )
}

export default Documentation