import React, { useState, useEffect } from 'react'
import { useStateContext } from "../contexts/ContextProvider";
import { Alarm } from "../assets/icons/Alarm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LogoutConfirm({ visble, onClose }) {

    let navigate = useNavigate();

    const { activeMenu, setActiveMenu,
        isClicked, setIsClicked, handleClick,
        screenSize, setScreenSize, currentColor,
        showEmailModal, setShowEmailModal, handleOnClose,
        showUserProfileModal, setShowUserProfileModal,
        showLogoutModal, setShowLogoutModal } = useStateContext();

    const handleOnCloseConfirm = (e) => {
        if (e.target.id === 'container')
            onClose()
    }

    const [authState, setAuthState] = useState({
        username: "",
        id: 0,
        firstname: "",
        role:"",
        status: false,
      });


      useEffect(() => {
        setShowUserProfileModal(false);
        setShowLogoutModal(false);
    }, []);
      
    
      useEffect(() => {
        axios
          .get("https://maintaimdb-044f7fcd2d92.herokuapp.com/auth/auth", {
            headers: {
              accessToken: sessionStorage.getItem("accessToken"),
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

    const logout = () => {
        sessionStorage.removeItem("accessToken");
        setAuthState({ username: "", id: 0, firstname:"", role:"", status: false });
        navigate("/login");
      };

    if (!visble) return null;

    return (
        <div
            id='container'
            onClick={handleOnCloseConfirm}
            className="justify-center items-center flex overflow-x-hidden 
            overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none
            bg-black bg-opacity-25 backdrop-blur-sm"
        >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold flex items-center">
                            <div className='mr-2'>
                                <Alarm currentColor="red" />
                            </div>
                            Sign Out
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"

                        >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                            Are you sure you would like to sign out of your account?
                        </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            id='container'
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handleOnCloseConfirm}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={logout}
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoutConfirm