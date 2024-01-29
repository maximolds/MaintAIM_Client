import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import * as ReactDOM from "react-dom";
import { useStateContext } from '../contexts/ContextProvider';
import { Header } from '../components';

const Audits = () => {
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

          <div>
            <iframe
              title="Crane 1"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRVyxbt16Kb9jL8zaD8mu433XUmc05c_akohY_KSUheSih4tGNe4EfES2oqIsrnm0ZZ1poNjBYay0Yb/pubhtml?widget=true&amp;headers=false"
              width="100%"
              height="500px"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>


          <div>
            <iframe
              title="Crane 2"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRYTVsHK-lSOqkBDzmdO0HCrBAcw-V_hRKl3Q4gUVOyhOwx-6AR0P045Zaj-2BVN_aq7k1x081v_ng0/pubhtml?widget=true&amp;headers=false"
              width="100%"
              height="500px"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <div>
            <iframe
              title="Crane 3"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVjuH_vxMmiGOpt7rv12NH0VHGDv2d2oXjxnfZuG9Yt6OyqsmbrjbAlVu78Z3GSSnlFtBSVBydGt73/pubhtml?widget=true&amp;headers=false"
              width="100%"
              height="500px"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Audits