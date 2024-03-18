import React, { useEffect, useState, useRef } from 'react';
import { Header } from '../components';
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import DataTable from 'react-data-table-component';
import { useReactToPrint } from 'react-to-print'
import log from '../assets/images/log.png';
import one from '../assets/images/1.jpg';
import two from '../assets/images/2.jpg';
import three from '../assets/images/3.jpg';
import four from '../assets/images/4.jpg';
import five from '../assets/images/5.jpg';
import six from '../assets/images/6.jpg';
import seven from '../assets/images/7.jpg';
import sched from '../assets/images/sched.png';
import history from '../assets/images/history.png';
import historyadd from '../assets/images/historyadd.png';
import checklistmenu from '../assets/images/checkmenu.png';
import daily from '../assets/images/daily.png';
import checklistt from '../assets/images/checklistt.png';
import document from '../assets/images/documen.png';
import setting from '../assets/images/settings.png';
import email from '../assets/images/email.png';
import themeset from '../assets/images/themesett.png';
import audit from '../assets/images/audit.png';

const UserGuide = () => {


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className='justify-between flex'>
        <Header

          title="About Us"
        />

      </div>

      <div>
        <h3 className='text-gray-500'>
          Last updated <span className='bg-[#86acbb] rounded-xl text-white'>Mar 11, 2024 </span>
        </h3>

        <p className='text-black m-10 text-justify'>
          <span className='font-bold'>MAINTAIM</span> is a website specifically tailored for Maintenance Service Engineers (MSEs) of Asia Integrated Machine Inc. - Monde Nissin. It is developed by students from the Mechatronics Engineering Department as part of their partial fulfillment in Project Study II. This software application is designed to streamline maintenance-related tasks and document management. It empowers MSEs to complete crane checklists, maintain a comprehensive maintenance history, submit evidence for management audits, and stay updated on maintenance schedules and crane error logs.
          The system serves as a centralized hub, offering easy access to various modules that are seamlessly integrated with Google Forms and Google Sheets for enhanced efficiency and convenience.

        </p>

        <Header
          title="HOW TO USE MAINTAIM"
        />

        <h3 className='text-black mb-10 mt-10 ml-5 font-bold'>
          Registration and Login
        </h3>

        <p className='text-black pl-10 mb-5 ml-14 mr-10 text-justify'>
          If you're a new user, start by registering your account through the admin. For existing users, simply log in with your username and password.
        </p>


        <img src={log} className='w-[800px] h-100 pl-10 ml-10 mt-10 mb-10' alt="Login Guide" />

        <h3 className='text-black mb-5 mt-10 ml-5 font-bold'>
          Dashboard Overview
        </h3>

        <p className='text-black pl-10 ml-14 mr-10 text-justify'>
          Once logged in, you'll land on the dashboard. Here, you'll find an overview of all modules available on the website. Easily navigate to other modules from the dashboard
          for quick access to maintenance-related information.
        </p>

        <h3 className='text-[#86acbb] text-20 font-bold'>
          Dashboard
        </h3>

        <h3 className='text-black mb-5 mt-1 ml-5 font-bold'>
          Navigation Guide
        </h3>

        <p className='text-black pl-10 ml-14 mr-10 text-justify'>

          Use the navigation menu on the
          dashboard to access
          different modules seamlessly.
          Click on the respective module to
          explore its features and functionalities.

        </p>

        <img src={one} className='w-[800px] h-100 pl-10 ml-10' alt="Navigation Guide" />

        <h3 className='text-[#86acbb] text-20 font-bold'>
          Maintenance Schedule
        </h3>

        <p className='text-black pl-10 mt-10 mb-10 ml-14 mr-10 text-justify'>
          The dashboard provides a glimpse of the
          maintenance schedule, ensuring MSEs
          stay informed about upcoming maintenance tasks.
          Click on the schedule to view more details.
          Only the manager can make necessary edits.
        </p>

        <img src={sched} className='w-[800px] h-100 pl-10 ml-10' alt="Maintenance Schedule" />

        <h3 className='text-[#86acbb] text-20 mt-5 font-bold'>
          Maintenance History
        </h3>

        <h3 className='text-black ml-5 font-bold'>
          Recording Maintenance
        </h3>

        <p className='text-black pl-10 mt-5  ml-14 mr-10 text-justify'>
          Use this module to record maintenance history.
          Input relevant details about completed
          maintenance tasks for future reference.
        </p>

        <img src={two} className='w-[800px] h-100 pl-10 ml-10' alt="Maintenance History" />
        <img src={historyadd} className='w-[800px] h-100 pl-10 ml-10' alt="Maintenance History" />

        <h3 className='text-black mb-5 mt-5 ml-5 font-bold'>
          Accessing Past Records
        </h3>

        <p className='text-black pl-10 ml-10 mr-10 mt-5 text-justify'>
          Retrieve past maintenance records to track the history of maintenance activities.
          Easily review completed tasks and associated details.
        </p>

        <img src={three} className='w-[800px] h-100 pl-10 ml-10' alt="Maintenance History" />

        <h3 className='text-[#86acbb] text-20 font-bold'>
          Maintenance Checklists
        </h3>

        <h3 className='text-black ml-5 font-bold'>
          Recording Maintenance
        </h3>

        <p className='text-black pl-10 ml-10 mb-5 mr-10 mt-5 text-justify'>
          Choose from different types of checklists, including daily, monthly PM for various cranes, and more.
          Each checklist is designed to ensure thorough maintenance inspections.
        </p>

        <img src={checklistmenu} className='w-[800px] h-100 pl-10 mb-5 ml-10' alt="Maintenance History" />
        <img src={daily} className='w-[800px] h-100 pl-10 mb-5 ml-10' alt="Maintenance History" />
        <img src={checklistt} className='w-[800px] h-100 pl-10 mb-5 ml-10' alt="Maintenance History" />

        <h3 className='text-black ml-5 font-bold'>
          Accessing Past Records
        </h3>

        <p className='text-black pl-10 ml-10 mb-5 mr-10 mt-5 text-justify'>
          Retrieve past maintenance records to track the history of maintenance activities.
          Easily review completed tasks and associated details.
        </p>

        <img src={three} className='w-[800px] h-100 pl-10 mb-5 ml-10' alt="Maintenance History" />

        <h3 className='text-[#86acbb] text-20 font-bold'>
          Audits
        </h3>

        <h3 className='text-black ml-5 font-bold'>
          Overview
        </h3>

        <p className='text-black pl-10 ml-10 mb-5 mr-10 mt-5 text-justify'>
          The audits module facilitates management audits through a QR scanner feature.
          Use this module to conduct audits efficiently.
        </p>

        <img src={audit} className='w-[800px] h-100 pl-10 mb-5 ml-10' alt="Maintenance History" />

        <h3 className='text-[#86acbb] text-20 font-bold'>
          Documentation
        </h3>

        <h3 className='text-black ml-5 font-bold'>
          Real-Time Updates
        </h3>

        <p className='text-black pl-10 ml-10 mb-5 mr-10 mt-5 text-justify'>
          The documentation module reflects data inputted in Excel sheets in real-time.
          Any changes made to the documents are immediately updated on the website.
        </p>

        <img src={document} className='w-[800px] h-100 pl-10 mb-5 ml-10' alt="Documentation" />

        <h3 className='text-[#86acbb] text-20 font-bold'>
          Settings
        </h3>

        <h3 className='text-black ml-5 font-bold'>
          FOR MANAGER: Account Management
        </h3>

        <p className='text-black pl-10 ml-10 mb-5 mr-10 mt-5 text-justify'>
          Manage your account settings here.
          Update personal information and change passwords.
        </p>

        <img src={setting} className='w-[800px] h-100 pl-10 mb-5 ml-10' alt="Settings" />

        <h3 className='text-[#86acbb] text-20 font-bold'>
          Email
        </h3>

        <p className='text-black pl-10 ml-10 mb-5 mr-10 mt-5 text-justify'>
          To send an email,
          click the icon beside the user account and image.
        </p>

        <img src={six} className='w-[800px] h-100 pl-10 mb-5 ml-10' alt="Six" />
        <img src={email} className='w-[800px] h-100 pl-10 mb-5 ml-10' alt="Email" />

        <h3 className='text-[#86acbb] text-20 font-bold'>
          Change Website Theme
        </h3>

        <img src={five} className='w-[800px] h-100 pl-10 mb-5 ml-10' alt="Maintenance History" />
        <img src={themeset} className='w-[800px] h-100 pl-10 mb-5 ml-10' alt="Maintenance History" />

      </div>


    </div>
  );
};
export default UserGuide;