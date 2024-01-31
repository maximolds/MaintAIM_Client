import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import * as ReactDOM from "react-dom";
import { useStateContext } from '../contexts/ContextProvider';
import { Header } from '../components';
import QRScanner from './QRScanner';
import { Link } from 'react-router-dom'

const Audits = () => {

  const { currentColor, activeMenu, setActiveMenu } = useStateContext();

  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    firstname: "",
    status: false,
    role: "",
  });

  useEffect(() => {
    axios
      .get("https://maintaim-db-5eb6eb864ba7.herokuapp.com/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            firstname: response.data.firstname,
            role: response.data.role,
            status: true,
          });
        }
      });
  }, []);

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
        title="Audits"
      />
      <div className='m-2 md:m-10 mt-2 p-2 md:p-10 bg-white
  rounded-3xl flex-1 md:flex shadow-xl justify-between flex-col flex-wrap'>

        {/* Erase eventsettings and
        selectedDate when syncing with a database */}
        <div className='flex items-end justify-end'>
          {(authState.role === "Admin" || authState.role === "Staff") && (
            <Link className='w-[100px] h-10 justify-center items-center rounded-xl pt-2 text-center bg-[#86ACBB] text-white hover:bg-red-500 focus:bg-red-500'
              to="/qrscan">QR Scan</Link>
          )}
        </div>


        <div className='flex flex-col'>



          {(authState.role === "Admin" || authState.role === "Manager") && (
            <div>
              <div className='mt-5'>
                <iframe
                  title="Crane 1"
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRVyxbt16Kb9jL8zaD8mu433XUmc05c_akohY_KSUheSih4tGNe4EfES2oqIsrnm0ZZ1poNjBYay0Yb/pubhtml?widget=true&amp;headers=false"
                  width="100%"
                  height="500px"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>


              <div className='mt-5'>
                <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRYTVsHK-lSOqkBDzmdO0HCrBAcw-V_hRKl3Q4gUVOyhOwx-6AR0P045Zaj-2BVN_aq7k1x081v_ng0/pubhtml?widget=true&amp;headers=false"
                  width="100%"
                  height="500px"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <div className='mt-5'>
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
          )}

        </div>



      </div>
    </div>
  )
}

export default Audits