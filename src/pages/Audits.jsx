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
      .get("https://maintaimdb-044f7fcd2d92.herokuapp.com/auth/auth", {
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
        <div className='flex items-end justify-end mb-10'>
          {(authState.role === "Admin" || authState.role === "Staff") && (
            <Link className='w-[100px] h-10 justify-center items-center rounded-xl pt-2 text-center bg-[#86ACBB] text-white hover:bg-red-500 focus:bg-red-500'
              to="/qrscan">QR Scan</Link>
          )}
        </div>


        <div className='flex flex-col'>



          {(authState.role === "Admin" || authState.role === "Manager") && (
            <div>
              <div className='mt-2'>
                <h1 className='font-bold text-[20px]'>Crane 1</h1>
                <iframe
                  title="Crane 1"
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRVyxbt16Kb9jL8zaD8mu433XUmc05c_akohY_KSUheSih4tGNe4EfES2oqIsrnm0ZZ1poNjBYay0Yb/pubhtml?widget=true&amp;headers=false"
                  width="100%"
                  height="400px"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>


              <div className='mt-10'>
                <h1 className='font-bold text-[20px]'>Crane 2</h1>
                <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRYTVsHK-lSOqkBDzmdO0HCrBAcw-V_hRKl3Q4gUVOyhOwx-6AR0P045Zaj-2BVN_aq7k1x081v_ng0/pubhtml?widget=true&amp;headers=false"
                  width="100%"
                  height="400px"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <div className='mt-10'>
                <h1 className='font-bold text-[20px]'>Crane 3</h1>
                <iframe
                  title="Crane 3"
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVjuH_vxMmiGOpt7rv12NH0VHGDv2d2oXjxnfZuG9Yt6OyqsmbrjbAlVu78Z3GSSnlFtBSVBydGt73/pubhtml?widget=true&amp;headers=false"
                  width="100%"
                  height="400px"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <div className='mt-10'>
                <h1 className='font-bold text-[20px]'>Crane 4</h1>
                <iframe
                  title="Crane 4"
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRdvJI7J3pOd3axLkXX1XTwFAz06lXneGfu7uaR2d7SGwwQXO5CETji_F7C7XUZK3MPYhdvZ2gZFGOk/pubhtml?widget=true&amp;headers=false"
                  width="100%"
                  height="400px"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <div className='mt-10'>
                <h1 className='font-bold text-[20px]'>Crane 5</h1>
                <iframe
                  title="Crane 5"
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRdvJI7J3pOd3axLkXX1XTwFAz06lXneGfu7uaR2d7SGwwQXO5CETji_F7C7XUZK3MPYhdvZ2gZFGOk/pubhtml?widget=true&amp;headers=false"
                  width="100%"
                  height="400px"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <div className='mt-10'>
                <h1 className='font-bold text-[20px]'>Crane 6</h1>
                <iframe
                  title="Crane 6"
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQaGsmUH0BpV1xQEmb5Phgi0IiANLmATZNPty7H5C8ny8qLaQdOh2X7XNMBh83kzAMCFq2sj4oMMesq/pubhtml?widget=true&amp;headers=false"
                  width="100%"
                  height="400px"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <div className='mt-10'>
                <h1 className='font-bold text-[20px]'>Crane 7</h1>
                <iframe
                  title="Crane 7"
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vReMdoa7P9hl6iAEegdD2dk4sxw1ghkuCGFnwmaXcdaLd3HVrQDWRvVbkPYEcCLl3PMKgDako2ibFuM/pubhtml?widget=true&amp;headers=false"
                  width="100%"
                  height="400px"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <div className='mt-10'>
                <h1 className='font-bold text-[20px]'>Crane 8</h1>
                <iframe
                  title="Crane 8"
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSYvjW7-xR3uNZjmb5812iNSmWEoHqUdWrSODrJEp-266P8xHj09zO0RAnPKoPsgCAZ3_utKfx58Jvz/pubhtml?widget=true&amp;headers=false"
                  width="100%"
                  height="400px"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <div className='mt-10'>
                <h1 className='font-bold text-[20px]'>Crane 9</h1>
                <iframe
                  title="Crane 9"
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSEL6zFbBqY3XsddPIl_sLHlp1fTq6Zwg1C18vLurh6vgy1z0sCSJv80V0OlwFmbM6Bfjt_ZtzKmV3m/pubhtml?widget=true&amp;headers=false"
                  width="100%"
                  height="400px"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <div className='mt-10'>
                <h1 className='font-bold text-[20px]'>Crane 10</h1>
                <iframe
                  title="Crane 10"
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6geD0E8h0A68hr3qmQZ4HxKnCzqQYJW3XRrFDQwdN465PI5DQcnfksqHbEDFS6jV6y8G9iu2oF4Vm/pubhtml?widget=true&amp;headers=false"
                  width="100%"
                  height="400px"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <div className='mt-10'>
                <h1 className='font-bold text-[20px]'>Crane 11</h1>
                <iframe
                  title="Crane 11"
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQViBts4jGe-eGeZwkhhhxDAeKFq6AoUcCiv1Exq8FB4WFKJynJEJE3d6aO_2bLv6ekrHHJCrLOjRY0/pubhtml?widget=true&amp;headers=false"
                  width="100%"
                  height="400px"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <div className='mt-10'>
                <h1 className='font-bold text-[20px]'>Crane 12</h1>
                <iframe
                  title="Crane 12"
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSsGF8E3tiDTB3e0uTG6WqgRHb2KtXC0T5H5JZ3cV4vdtiVfdE_hqx3sVoxjGCJRe945hDrbXX1OhJL/pubhtml?widget=true&amp;headers=false"
                  width="100%"
                  height="400px"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <div className='mt-10'>
                <h1 className='font-bold text-[20px]'>Crane 13</h1>
                <iframe
                  title="Crane 13"
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTVlDxwmiGx4LDqbWtHIK2Pa-mTtSv_C_SYlmPTCvcghCiOxC3f4lH8xW-crAdE7AkKDKigNXlhn446/pubhtml?widget=true&amp;headers=false"
                  width="100%"
                  height="400px"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <div className='mt-10'>
                <h1 className='font-bold text-[20px]'>Crane 14</h1>
                <iframe
                  title="Crane 14"
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQPDb2F6XprGJ8g32YL8kOAJkjqjcnpuswRIYhZUPTTj3IsynSFDWH1lBUJf8SMwNwqZA8MFlMFE6Yv/pubhtml?widget=true&amp;headers=false"
                  width="100%"
                  height="400px"
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