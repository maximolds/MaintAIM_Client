import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from '../contexts/ContextProvider';
import { UserIcon } from '../assets/icons/UserIcon';
import { Header } from '../components';



const Settings = () => {

  const [listUsers, setListOfUsers] = useState([]);
  const { activeMenu, setActiveMenu } = useStateContext();

  useEffect(() => {
    axios.get("http://localhost:3001/auth").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    firstname: "",
    status: false,
    role: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
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


    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className='justify-between flex'>
        <Header
          category="Page"
          title="User Manager"
        />

        {(authState.role === "Admin" || authState.role === "Staff") && (
          <NavLink
            to={`/registration`}
            className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-97 h-4
      pt-5 rounded-xl buttonShadow 
      mt-8 m-4 bg-white flex
       justify-center border-1 border-fade-blue
      items-center text-center`}>
            Add User
          </NavLink>
        )}


      </div>

      <div className='flex-1 md:flex'>
        <div className={`flex flex-wrap  border-black  mt-10
            ${activeMenu ? 'justify-center md:w-[100%]' : ' justify-center md:w[100%] w-full items-center'}`}>

          {listUsers.map((value, key) => {
            return (
              <NavLink className="block w-full rounded-lg flex-wrap m-4 mt-4 pl-10 font-inter text-base text-white bg-main-blue
              border-2 border-b-2 border-black appearnace-none dark:focus:border-blue-500 focus:outline-none 
              focus:ring-0 focus:text-white focus:border-blue-600 peer">
                <div className='absolute top-2 left-2 z-10 flex items-center pointer-events-none'>
                  <UserIcon />
                </div>

                <div className='flex items-center p-0 m-0'>
                  <div>
                    <div>
                      <UserIcon />
                    </div>
                  </div>
                  <div className='pl-3'>
                    <div><span className='font-bold text-black'>Username: </span>{value.username}</div>
                    <div><span className='font-bold text-black'>Email: </span>{value.email}</div>
                    <div><span className='font-bold text-black'>Role: </span>{value.role}</div>
                  </div>

                </div>


              </NavLink>
            )
          })}



        </div>
      </div>
    </div>


  )
}

export default Settings