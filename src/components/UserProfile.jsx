import React, { useState, useEffect } from 'react'
import { useStateContext } from "../contexts/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { LogoutConfirm } from "."

function UserProfile({ visble, onClose }) {

 const { showLogoutModal, setShowLogoutModal } = useStateContext();

 const handleOnClose = (e) => {
    if (e.target.id === 'container') {
      onClose()
      setShowLogoutModal(false)
    }
 }

 const handleLogoutClick = () => {
    setShowLogoutModal(true)
 }

 if (!visble) return null;

  



 return (
    <div id='container' onClick={handleOnClose}
      className="fixed inset-0 z-10000 
    pt-[125px] pl-[1100px]">
      <div className="bg-white border-black shadow-sm rounded-b-lg w-[138px] 
      h-[50px] transition-all duration-500 ease-in-out max-h-full">
        <div className='flex justify-center'>
          <button onClick={handleLogoutClick} className=' w-[80%] mt-2 bg-[#86acbb] text-white 
transisition-color duration-300 hover:bg-white hover:text-black '>
            <h1 className='flex items-center justify-center '>Logout</h1>
            {showLogoutModal && <LogoutConfirm onClose={handleOnClose} visble={showLogoutModal} />}
          </button>


        </div>
      </div>
    </div>
 )
}


export default UserProfile