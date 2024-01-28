import React from 'react';
import '../Checklist/ChecklistsMenu.css'
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from '../../contexts/ContextProvider';

const ChecklistsMenu = () => {

  const { currentColor, activeMenu, setActiveMenu } = useStateContext();
  
  return (

    <div className=' flex flex-wrap justify-center items-center mt-10'>
      <Link
        to={`/checklists`}
        //onClick={()=>navigate(-1)}
        className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
               rounded-xl buttonShadow mt-4 mr-2  
              bg-white hover:text-black flex justify-center border-1 border-fade-blue
              items-center text-center`}
        style={{ color: currentColor }}
      >
        Back
      </Link>
      <div className="section">
        <h3 className='font-bold text-xl mt-12'>DAILY CIL</h3>
        <h5>FOR ALL CRANES</h5>
        <NavLink
          to={`/dailycil`}
          className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-97 h-4
              pt-5 rounded-xl buttonShadow 
              mt-28 m-4  bg-white flex
               justify-center border-1 border-fade-blue
              items-center text-center`}>
          Add Record
        </NavLink>
      </div>

      <div className="section">
        <h3 className='font-bold text-xl mt-12'>Monthly PM</h3>
        <h5>FOR UH CRANE 1 & 2</h5>
        <NavLink
          to={`/monthlypmuh`}
          className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-97 h-4
              pt-5 rounded-xl buttonShadow 
              mt-28 m-4  bg-white flex
               justify-center border-1 border-fade-blue
              items-center text-center`}>
          Add Record
        </NavLink>
      </div>

      <div className="section">
        <h3 className='font-bold text-xl mt-12'>Monthly PM</h3>
        <h5>FOR UL CRANE 3 - 12</h5>
        <NavLink
          to={`/monthlypmul`}
          className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-97 h-4
              pt-5 rounded-xl buttonShadow 
              mt-28 m-4  bg-white flex
               justify-center border-1 border-fade-blue
              items-center text-center`}>
          Add Record
        </NavLink>
      </div>

      <div className="section">
        <h3 className='font-bold text-xl mt-12'>Monthly PM</h3>
        <h5>FOR CRANE 13</h5>
        <NavLink
          to={`/monthlypm13`}
          className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-97 h-4
              pt-5 rounded-xl buttonShadow 
              mt-28 m-4  bg-white flex
               justify-center border-1 border-fade-blue
              items-center text-center`}>
          Add Record
        </NavLink>
      </div>

      <div className="section">
        <h3 className='font-bold text-xl mt-12'>Monthly PM</h3>
        <h5>FOR CRANE 14</h5>
        <NavLink
          to={`/monthlypm14`}
          className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-97 h-4
              pt-5 rounded-xl buttonShadow 
              mt-28 m-4  bg-white flex
               justify-center border-1 border-fade-blue
              items-center text-center`}>
          Add Record
        </NavLink>
      </div>
    </div>
  );
};

export default ChecklistsMenu;
