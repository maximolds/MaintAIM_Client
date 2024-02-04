import React, { useEffect, useState, useRef } from 'react';
import { Header } from '../../components';
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import DataTable from 'react-data-table-component';
import { useReactToPrint } from 'react-to-print'

const MaintenanceHistory = () => {

  let navigate = useNavigate();

  const [isClicked, setIsClicked] = useState(false);

  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    firstname: "",
    status: false,
    role: "",
  });

  const historycolumns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Crane Number',
      selector: row => row.crane_number,
      sortable: true,
    },
    {
      name: 'Personnel Incharge',
      selector: row => row.personnel_incharge,
      sortable: true,
    },
    {
      name: 'Part Replaced',
      selector: row => row.part_replaced,
      sortable: true,
    },
    {
      name: 'Date Replaced',
      selector: row => row.date_replaced,
      sortable: true,
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
    },
    {
      name: 'Action',
      cell: row => (
        <div className="flex justify-center items-center">
          {(authState.role === "Admin" || authState.role === "Manager") && (
            <Link
              className={`w-10 h-5 justify-center items-center rounded-md bg-[#d0e272] text-white hover:bg-red-500 focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
              to={`/maintenance-history/update/${row.id}`}
            >
              Edit
            </Link>
          )}

          <Link
            className={`m-2 w-10 justify-center items-center rounded-md bg-[#1ecbe1] text-white hover:bg-red-500 focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
            to={`/maintenance-history/read/${row.id}`}
          >
            Read
          </Link>

          <button
            className={`w-11 h-5 justify-center items-center rounded-md bg-red-500 text-white hover:bg-red-500 focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
            onClick={() =>{
              deleteMaintenanceHistory(row.id)
            }}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const [search, setSearch] = useState("")
  const [listOfMaintenanceHistory, setListOfMaintenanceHistory] = useState([]);
  const [filteredPersonnel, setFilteredPersonnel] = useState([]);
  const historyPdf = useRef();

  useEffect(() => {
    axios.get("https://maintaim-db-5eb6eb864ba7.herokuapp.com/maintenancehistory").then((response) => {
      setListOfMaintenanceHistory(response.data);
      setFilteredPersonnel(response.data);
    });
  }, []);

  useEffect(() => {
    const result = listOfMaintenanceHistory.filter(person => {
      return person.personnel_incharge.toLowerCase().match(search.toLowerCase())||
      String(person.crane_number).toLowerCase().match(search.toLowerCase()) ||
      String(person.part_replaced).toLowerCase().match(search.toLowerCase()) ||
      String(person.id).toLowerCase().match(search.toLowerCase()) ||
      String(person.date_replaced).toLowerCase().match(search.toLowerCase()) ||
      String(person.status).toLowerCase().match(search.toLowerCase());
    })

    setFilteredPersonnel(result)
  }, [search])

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

  const generateHistoryPDF = useReactToPrint({
    content: () => historyPdf.current,
    documentTitle: `Maintenance History`,
    onAfterPrint: () => alert("Data saved in PDF")
  });

  const deleteMaintenanceHistory = (id) => {
    axios
      .delete(`https://maintaim-db-5eb6eb864ba7.herokuapp.com/maintenancehistory/${id}`, {
      })
      .then(() => {
        alert("delete success")
      });
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className='justify-between flex'>
        <Header
          category="Page"
          title="Maintenance History"
        />
        <NavLink
          to={`/history-add-record`}
          className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-97 h-4
              pt-5 rounded-xl buttonShadow 
              mt-8 m-4  bg-white flex
               justify-center border-1 border-fade-blue
              items-center text-center`}>
          Add Record
        </NavLink>

      </div>


      <div ref={historyPdf} style={{ width: '100%' }}>
        <DataTable
          columns={historycolumns}
          data={filteredPersonnel}
         
          fixedHeader
          fixedHeaderScrollHeight='400px'
          pagination
          title="Maintenance History"
          actions={<button
            onClick={generateHistoryPDF}
            className={`w-20 h-5 text-12 bg-[#330034] text-white hover:bg-red-500 focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}>
            Export</button>}
          subHeader
          subHeaderComponent={
            <input
              className='w-5'
              type='text'
              placeholder='Search Here'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          }
        />
      </div>
    </div>
  );
};
export default MaintenanceHistory;