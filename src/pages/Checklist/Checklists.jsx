import React, { useEffect, useState, useRef } from 'react';
import { Header } from '../../components';
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import DataTable from 'react-data-table-component';
import { useReactToPrint } from 'react-to-print'

const Checklists = () => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

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

  const dailycolumns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Crane Number',
      selector: row => row.Daily_CIL_Crane_Number,
      sortable: true,
    },
    {
      name: 'Inspected by',
      selector: row => row.Daily_CIL_inspected_by,
      sortable: true,
    },
    {
      name: 'Approved by',
      selector: row => row.Daily_CIL_approved_by,
      sortable: true,
    },
    {
      name: 'Date',
      selector: row => row.Daily_CIL_date,
      sortable: true,
    },
    {
      name: 'Action',
      cell: row => (
        <div className="flex justify-center items-center">
          <Link
            className={`w-10 h-5 justify-center items-center rounded-md bg-[#d0e272] text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
            to={`/daily/update/${row.id}`}
          >
            Edit
          </Link>
          <Link
            className={`m-2 w-10 justify-center items-center rounded-md bg-[#1ecbe1] text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
            to={`/daily/read/${row.id}`}
          >
            Read
          </Link>
          {(authState.role === "Admin" || authState.role === "Manager") && (
            <button
              className={`w-11 h-5 justify-center items-center rounded-md bg-red-500 text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
              onClick={() => {
                deleteDaily(row.id)
              }}
            >
              Delete
            </button>
          )}
        </div>
      ),
    },
  ];

  const ulcolumns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'UL Crane Number',
      selector: row => row.ul_crane_no,
      sortable: true,
    },
    {
      name: 'Inspected by',
      selector: row => row.ul_crane_inspected_by,
      sortable: true,
    },
    {
      name: 'Approved by',
      selector: row => row.ul_crane_approved_by,
      sortable: true,
    },
    {
      name: 'Date',
      selector: row => row.ul_crane_date,
      sortable: true,
    },
    {
      name: 'Action',
      cell: row => (
        <div className="flex justify-center items-center">
          <Link
            className={`w-10 h-5 justify-center items-center rounded-md bg-[#d0e272] text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
            to={`/pmul/update/${row.id}`}
          >
            Edit
          </Link>
          <Link
            className={`m-2 w-10 justify-center items-center rounded-md bg-[#1ecbe1] text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
            to={`/pmul/read/${row.id}`}
          >
            Read
          </Link>
          {(authState.role === "Admin" || authState.role === "Manager") && (
            <button
              className={`m-2 w-11 h-5 justify-center items-center rounded-md bg-red-500 text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
              onClick={() => {
                deleteUL(row.id)
              }}
            >
              Delete
            </button>
          )}
        </div>
      ),
    },
  ];

  const uhcolumns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'UH Crane Number',
      selector: row => row.UH_crane_no,
      sortable: true,
    },
    {
      name: 'Inspected by',
      selector: row => row.UH_crane_inspected_by,
      sortable: true,
    },
    {
      name: 'Approved by',
      selector: row => row.UH_crane_approved_by,
      sortable: true,
    },
    {
      name: 'Date',
      selector: row => row.UH_crane_date,
      sortable: true,
    },
    {
      name: 'Action',
      cell: row => (
        <div className="flex justify-center items-center">
          <Link
            className={`w-10 h-5 justify-center items-center rounded-md bg-[#d0e272] text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
            to={`/pmuh/update/${row.id}`}
          >
            Edit
          </Link>
          <Link
            className={`m-2 w-10 justify-center items-center rounded-md bg-[#1ecbe1] text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
            to={`/pmuh/read/${row.id}`}
          >
            Read
          </Link>
          {(authState.role === "Admin" || authState.role === "Manager") && (
            <button
              className={`m-2 w-11 h-5 justify-center items-center rounded-md bg-red-500 text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
              onClick={() => {
                deleteUH(row.id)
              }}
            >
              Delete
            </button>
          )}
        </div>
      ),
    },
  ];

  const crane13columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Crane Number',
      selector: row => row.crane13_no,
      sortable: true,
    },
    {
      name: 'Inspected by',
      selector: row => row.crane13_inspected_by,
      sortable: true,
    },
    {
      name: 'Approved by',
      selector: row => row.crane13_approved_by,
      sortable: true,
    },
    {
      name: 'Date',
      selector: row => row.crane13_date,
      sortable: true,
    },
    {
      name: 'Action',
      cell: row => (
        <div className="flex justify-center items-center">
          <Link
            className={`w-10 h-5 justify-center items-center rounded-md bg-[#d0e272] text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
            to={`/crane13/update/${row.id}`}
          >
            Edit
          </Link>
          <Link
            className={`m-2 w-10 justify-center items-center rounded-md bg-[#1ecbe1] text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
            to={`/crane13/read/${row.id}`}
          >
            Read
          </Link>
          {(authState.role === "Admin" || authState.role === "Manager") && (
            <button
              className={`m-2 w-11 h-5 justify-center items-center rounded-md bg-red-500 text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
              onClick={() => {
                deleteCrane13(row.id)
              }}
            >
              Delete
            </button>
          )}
        </div>
      ),
    },
  ];

  const crane14columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Crane Number',
      selector: row => row.crane14_no,
      sortable: true,
    },
    {
      name: 'Inspected by',
      selector: row => row.crane14_inspected_by,
      sortable: true,
    },
    {
      name: 'Approved by',
      selector: row => row.crane14_approved_by,
      sortable: true,
    },
    {
      name: 'Date',
      selector: row => row.crane14_date,
      sortable: true,
    },
    {
      name: 'Action',
      cell: row => (
        <div className="flex justify-center items-center">
          {(authState.role === "Admin" || authState.role === "Manager") && (
          <Link
            className={`w-10 h-5 justify-center items-center rounded-md bg-[#d0e272] text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
            to={`/crane14/update/${row.id}`}
          >
            Edit
          </Link>
          )}
          <Link
            className={`m-2 w-10 justify-center items-center rounded-md bg-[#1ecbe1] text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
            to={`/crane14/read/${row.id}`}
          >
            Read
          </Link>
          {(authState.role === "Admin" || authState.role === "Manager") && (
            <button
              className={`m-2 w-11 h-5 justify-center items-center rounded-md bg-red-500 text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}
              onClick={() => {
                deleteCrane14(row.id)
              }}
            >
              Delete
            </button>
          )}
        </div>
      ),
    },
  ];



  const [search, setSearch] = useState("")
  const [ulsearch, setulSearch] = useState("")
  const [uhsearch, setuhSearch] = useState("")
  const [crane13Search, setcrane13Search] = useState("")
  const [crane14Search, setcrane14Search] = useState("")

  const [listOfDailyCheckList, setListOfDailyCheckList] = useState([]);
  const [filteredPersonnel, setFilteredPersonnel] = useState([]);

  const [listOfCraneULCheckList, setListOfCraneULCheckList] = useState([]);
  const [ulfilteredPersonnel, setulFilteredPersonnel] = useState([]);

  const [listOfCraneUHCheckList, setListOfCraneUHheckList] = useState([]);
  const [uhfilteredPersonnel, setuhFilteredPersonnel] = useState([]);

  const [listOfCrane13CheckList, setListOfCrane13CheckList] = useState([]);
  const [crane13filteredPersonnel, setcrane13FilteredPersonnel] = useState([]);

  const [listOfCrane14CheckList, setListOfCrane14CheckList] = useState([]);
  const [crane14filteredPersonnel, setcrane14FilteredPersonnel] = useState([]);

  const dailyPdf = useRef();
  const ulPdf = useRef();
  const uhPdf = useRef();
  const crane13Pdf = useRef();
  const crane14Pdf = useRef();

  useEffect(() => {
    axios.get("https://maintaimdb-044f7fcd2d92.herokuapp.com/dailychecklist").then((response) => {
      setListOfDailyCheckList(response.data);
      setFilteredPersonnel(response.data)
    });
  }, []);

  useEffect(() => {
    axios.get('https://maintaimdb-044f7fcd2d92.herokuapp.com/ulchecklist').then((response) => {
      setListOfCraneULCheckList(response.data);
      setulFilteredPersonnel(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get('https://maintaimdb-044f7fcd2d92.herokuapp.com/uhchecklist').then((response) => {
      setListOfCraneUHheckList(response.data);
      setuhFilteredPersonnel(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get('https://maintaimdb-044f7fcd2d92.herokuapp.com/crane13checklist').then((response) => {
      setListOfCrane13CheckList(response.data);
      setcrane13FilteredPersonnel(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get('https://maintaimdb-044f7fcd2d92.herokuapp.com/crane14checklist').then((response) => {
      setListOfCrane14CheckList(response.data);
      setcrane14FilteredPersonnel(response.data);
    });
  }, []);

  useEffect(() => {
    const result = listOfDailyCheckList.filter(person => {
      return String(person.Daily_CIL_Crane_Number).toLowerCase().match(search.toLowerCase()) ||
      String(person.Daily_CIL_inspected_by).toLowerCase().match(search.toLowerCase()) ||
      String(person.Daily_CIL_date).toLowerCase().match(search.toLowerCase()) ||
      String(person.id).toLowerCase().match(search.toLowerCase()) ||
      String(person.Daily_CIL_approved_by).toLowerCase().match(search.toLowerCase());
    })

    setFilteredPersonnel(result)
  }, [search])

  useEffect(() => {
    const ulresult = listOfCraneULCheckList.filter(ulperson => {
      return String(ulperson.ul_crane_no).toLowerCase().match(ulsearch.toLowerCase()) ||
      String(ulperson.ul_crane_inspected_by).toLowerCase().match(ulsearch.toLowerCase()) ||
      String(ulperson.ul_crane_date).toLowerCase().match(ulsearch.toLowerCase()) ||
      String(ulperson.id).toLowerCase().match(ulsearch.toLowerCase()) ||
      String(ulperson.ul_crane_approved_by).toLowerCase().match(ulsearch.toLowerCase());
    })

    setulFilteredPersonnel(ulresult)
  }, [ulsearch])

  useEffect(() => {
    const uhresult = listOfCraneUHCheckList.filter(uhperson => {
      return String(uhperson.UH_crane_no).toLowerCase().match(uhsearch.toLowerCase()) ||
      String(uhperson.UH_crane_inspected_by).toLowerCase().match(uhsearch.toLowerCase()) ||
      String(uhperson.UH_crane_approved_by).toLowerCase().match(uhsearch.toLowerCase()) ||
      String(uhperson.id).toLowerCase().match(uhsearch.toLowerCase()) ||
      String(uhperson.UH_crane_date).toLowerCase().match(uhsearch.toLowerCase());
    })

    setuhFilteredPersonnel(uhresult)
  }, [uhsearch])

  useEffect(() => {
    const crane13result = listOfCrane13CheckList.filter(crane13person => {
      return String(crane13person.crane13_no).toLowerCase().match(crane13Search.toLowerCase()) ||
      String(crane13person.crane13_inspected_by).toLowerCase().match(crane13Search.toLowerCase()) ||
      String(crane13person.crane13_approved_by).toLowerCase().match(crane13Search.toLowerCase()) ||
      String(crane13person.id).toLowerCase().match(crane13Search.toLowerCase()) ||
      String(crane13person.crane13_date).toLowerCase().match(crane13Search.toLowerCase());
    })

    setcrane13FilteredPersonnel(crane13result)
  }, [crane13Search])

  useEffect(() => {
    const crane14result = listOfCrane14CheckList.filter(crane14person => {
      return String(crane14person.crane14_no).toLowerCase().match(crane14Search.toLowerCase()) ||
      String(crane14person.crane14_inspected_by).toLowerCase().match(crane14Search.toLowerCase()) ||
      String(crane14person.crane14_approved_by).toLowerCase().match(crane14Search.toLowerCase()) ||
      String(crane14person.id).toLowerCase().match(crane14Search.toLowerCase()) ||
      String(crane14person.crane14_date).toLowerCase().match(crane14Search.toLowerCase());
    })

    setcrane14FilteredPersonnel(crane14result)
  }, [crane14Search])

  const generateDailyPDF = useReactToPrint({
    content: () => dailyPdf.current,
    documentTitle: `Daily CIL`,
    onAfterPrint: () => alert("Data saved in PDF")
  });

  const generateULPDF = useReactToPrint({
    content: () => ulPdf.current,
    documentTitle: `UL Checklist`,
    onAfterPrint: () => alert("Data saved in PDF")
  });

  const generateUHPDF = useReactToPrint({
    content: () => uhPdf.current,
    documentTitle: `UH Checklist`,
    onAfterPrint: () => alert("Data saved in PDF")
  });

  const generateCrane13PDF = useReactToPrint({
    content: () => crane13Pdf.current,
    documentTitle: `Crane 13 Checklist`,
    onAfterPrint: () => alert("Data saved in PDF")
  });

  const generateCrane14PDF = useReactToPrint({
    content: () => crane14Pdf.current,
    documentTitle: `Crane 14 Checklist`,
    onAfterPrint: () => alert("Data saved in PDF")
  });

  const deleteDaily = (id) => {
    axios
      .delete(`https://maintaimdb-044f7fcd2d92.herokuapp.com/dailychecklist/${id}`, {
      })
      .then(() => {
        alert("delete row daily")
      });
  }

  const deleteUL = (id) => {
    axios
      .delete(`https://maintaimdb-044f7fcd2d92.herokuapp.com/ulchecklist/${id}`, {
      })
      .then(() => {
        alert("delete row ULCheckList")
      });
  }

  const deleteUH = (id) => {
    axios
      .delete(`https://maintaimdb-044f7fcd2d92.herokuapp.com/uhchecklist/${id}`, {
      })
      .then(() => {
        alert("delete row UHCheckList")
      });
  }

  const deleteCrane13 = (id) => {
    axios
      .delete(`https://maintaimdb-044f7fcd2d92.herokuapp.com/crane13checklist/${id}`, {
      })
      .then(() => {
        alert("delete row crane13checklist")
      });
  }

  const deleteCrane14 = (id) => {
    axios
      .delete(`https://maintaimdb-044f7fcd2d92.herokuapp.com/crane14checklist/${id}`, {
      })
      .then(() => {
        alert("delete row crane14checklist")
      });
  }



  return (



    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

      <div className='justify-between flex'>
        <Header
          category="Page"
          title="Checklists"
        />
        
        <NavLink
          to={`/checklistsmenu`}
          className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-97 h-4
              pt-5 rounded-xl buttonShadow 
              mt-8 m-4  bg-white flex
               justify-center border-1 border-fade-blue
              items-center text-center`}>
          Add Record
        </NavLink>

      </div>
      <div ref={dailyPdf} style={{ width: '100%' }}>
        <DataTable
          columns={dailycolumns}
          data={filteredPersonnel}

          fixedHeader
          fixedHeaderScrollHeight='400px'
          pagination
          title="Daily Checklist"
          actions={<button
            onClick={generateDailyPDF}
            className={`w-20 h-5 text-12 bg-[#330034] text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}>
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

      <div className='mt-4' ref={uhPdf} style={{ width: '100%' }}>
        <DataTable
          columns={uhcolumns}
          data={uhfilteredPersonnel}

          fixedHeader
          fixedHeaderScrollHeight='400px'
          pagination
          title="UH Crane 1 & 2"
          actions={<button
            onClick={generateUHPDF}
            className={`w-20 h-5 text-12 bg-[#330034] text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}>
            Export</button>}
          subHeader
          subHeaderComponent={
            <input
              className='w-5'
              type='text'
              placeholder='Search Here'
              value={uhsearch}
              onChange={(e) => setuhSearch(e.target.value)}
            ></input>
          }
        />
      </div>

      <div className='mt-4' ref={ulPdf} style={{ width: '100%' }}>
        <DataTable
          columns={ulcolumns}
          data={ulfilteredPersonnel}

          fixedHeader
          fixedHeaderScrollHeight='400px'
          pagination
          title="UL Crane 3 & 4"
          actions={<button
            onClick={generateULPDF}
            className={`w-20 h-5 text-12 bg-[#330034] text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}>
            Export</button>}
          subHeader
          subHeaderComponent={
            <input
              className='w-5'
              type='text'
              placeholder='Search Here'
              value={ulsearch}
              onChange={(e) => setulSearch(e.target.value)}
            ></input>
          }
        />
      </div>

      <div className='mt-4' ref={crane13Pdf} style={{ width: '100%' }}>
        <DataTable
          columns={crane13columns}
          data={crane13filteredPersonnel}
          selectableRows
          fixedHeader
          fixedHeaderScrollHeight='400px'
          pagination
          title="Crane 13"
          actions={<button
            onClick={generateCrane13PDF}
            className={`w-20 h-5 text-12 bg-[#330034] text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}>
            Export</button>}
          subHeader
          subHeaderComponent={
            <input
              className='w-5'
              type='text'
              placeholder='Search Here'
              value={crane13Search}
              onChange={(e) => setcrane13Search(e.target.value)}
            ></input>
          }
        />
      </div>

      <div className='mt-4' ref={crane14Pdf} style={{ width: '100%' }}>
        <DataTable
          columns={crane14columns}
          data={crane14filteredPersonnel}

          fixedHeader
          fixedHeaderScrollHeight='400px'
          pagination
          title="Crane 14"
          actions={<button
            onClick={generateCrane14PDF}
            className={`w-20 h-5 text-12 bg-[#330034] text-white hover:bg-[#86acbb] focus:bg-red-500 ${isClicked ? 'bg-red-500' : ''}`}>
            Export</button>}
          subHeader
          subHeaderComponent={
            <input
              className='w-5'
              type='text'
              placeholder='Search Here'
              value={crane14Search}
              onChange={(e) => setcrane14Search(e.target.value)}
            ></input>
          }
        />
      </div>




    </div>


  );
};
export default Checklists;