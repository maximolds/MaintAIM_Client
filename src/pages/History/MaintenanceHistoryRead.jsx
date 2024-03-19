import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
import { useReactToPrint } from 'react-to-print'
import axios from 'axios';
import { Header } from '../../components';


const MaintenanceHistoryRead = () => {
    let { id } = useParams();
    let navigate = useNavigate();
    const componentPdf = useRef();

    const { currentColor, activeMenu, setActiveMenu } = useStateContext();
    const [listOfMaintenanceHistory, setListOfMaintenanceHistory] = useState([]);



    useEffect(() => {
        axios.get(`https://maintaimdb-044f7fcd2d92.herokuapp.com/maintenancehistory/byId/${id}`).then((response) => {
            setListOfMaintenanceHistory(response.data)
            console.log(response.data)
        });
    }, []);

    const generatePDF = useReactToPrint({
        content: () => componentPdf.current,
        documentTitle: `Maintenance History`,
        onAfterPrint: () => alert("Data saved in PDF")
    });

    const onSubmit = (e) => {
        e.preventDefault();
        axios.put(
            `https://maintaimdb-044f7fcd2d92.herokuapp.com/maintenancehistory/update/byId/${id}`, listOfMaintenanceHistory).then(res => {
                console.log(res);
                navigate('/maintenance-history')
            }).catch(err => console.log(err));
    }

    return (
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10 text-slate-950'>
            <div className='flex justify-end mt-2 mr-4'>
                <Link
                    to={`/maintenance-history/update/${id}`}
                    //onClick={()=>navigate(-1)}
                    className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
               rounded-xl buttonShadow mt-4 mr-2  
              bg-white hover:text-black flex justify-center border-1 border-fade-blue
              items-center text-center`}
                    style={{ color: currentColor }}
                >
                    Edit
                </Link>

                <button
                    onClick={() => navigate('/maintenance-history')}
                    className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
               rounded-xl buttonShadow mt-4  
              text-white hover:text-black flex justify-center border-1 border-fade-blue
              items-center text-center`}
                    style={{ backgroundColor: currentColor }}
                >
                    Back
                </button>
                <button
                    onClick={generatePDF}
                    className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
               rounded-xl buttonShadow mt-4  ml-2
              text-white hover:text-black flex justify-center border-1 border-fade-blue
              items-center text-center bg-red-700`}

                >
                    Export as PDF
                </button>
            </div>
            <div ref={componentPdf} style={{ width: '100%' }}>
                <Header
                    
                    title="Maintenance History"
                />

                <form onSubmit={onSubmit}>
                    <div className='flex mt-2'>
                        <button
                            type='submit'
                            //onClick={()=>navigate(-1)}
                            className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
               rounded-xl buttonShadow mt-4 mr-2  
              bg-white hover:text-black flex justify-center border-1 border-fade-blue
              items-center text-center`}
                            style={{ color: currentColor }}
                        >
                            Update
                        </button>

                        <button
                            onClick={() => navigate('/maintenance-history')}
                            className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
               rounded-xl buttonShadow mt-4  
              text-white hover:text-black flex justify-center border-1 border-fade-blue
              items-center text-center`}
                            style={{ backgroundColor: currentColor }}
                        >
                            Back
                        </button>
                    </div>
                    <h2 className='text-20 mt-10 font-bold'
                        style={{ color: currentColor }}
                    >
                        Crane Information
                    </h2>

                    <div className='flex flex-wrap'>
                        <div className='border-t-2 w-full'>
                            <div className={`flex flex-col 
            ${activeMenu ? 'justify-start md:w-[50%]' : ' flex flex-col justify-start md:w[50%] items-start'}`} >
                                <div className='mt-5 '>
                                    <p className='text-sm text-black dark:text-white mb-3 font-bold'>
                                        Personnel In-charge
                                    </p>

                                    <input

                                        value={listOfMaintenanceHistory.personnel_incharge}
                                        name="personnel_incharge"
                                        type="text"
                                        placeholder='Juan Dela Cruz'
                                        className='rounded-3xl w-full h-42 border-2 border-fade-blue  pl-4'
                                    />
                                </div>
                                <div className='mt-5'>
                                    <p className='text-sm text-black dark:text-white mb-3 font-bold'>
                                        Crane Number
                                    </p>

                                    <input

                                        value={listOfMaintenanceHistory.crane_number}
                                        name="crane_number"
                                        type="number"
                                        placeholder='Crane 1'
                                        className='rounded-3xl w-full h-42 border-2 border-fade-blue pl-4'
                                    />
                                </div>
                                <div className='mt-5'>
                                    <p className='text-sm text-black dark:text-white mb-3 font-bold'>
                                        Part Replaced
                                    </p>

                                    <input

                                        value={listOfMaintenanceHistory.part_replaced}
                                        name="part_replaced"
                                        type="text"
                                        placeholder=''
                                        className='rounded-3xl w-full h-42 border-2 border-fade-blue  pl-4'
                                    />
                                </div>
                                <div className='mt-5'>
                                    <p className='text-sm text-black dark:text-white mb-3 font-bold'>
                                        Date Replaced
                                    </p>

                                    <input

                                        value={listOfMaintenanceHistory.date_replaced}
                                        name="date_replaced"
                                        type="date"
                                        placeholder='Insert Date Here'
                                        className='rounded-3xl w-full h-42 border-2 border-fade-blue  pl-4'
                                    />
                                </div>
                                <div className='mt-5'>
                                    <p className='text-sm text-black dark:text-white mb-3 font-bold'>
                                        Previous Date Replaced
                                    </p>

                                    <input

                                        value={listOfMaintenanceHistory.previous_date_replaced}
                                        name="previous_date_replaced"
                                        type="date"
                                        placeholder='Insert Date Here'
                                        className='rounded-3xl w-full h-42 border-2 border-fade-blue  pl-4'
                                    />
                                </div>
                                <div className='mt-5'>
                                    <p className='text-sm text-black dark:text-white mb-3 font-bold'>
                                        Status
                                    </p>

                                    <input

                                        value={listOfMaintenanceHistory.status}
                                        name="status"
                                        type="string"
                                        placeholder='Insert Current Status'
                                        className='rounded-3xl w-full h-42 border-2 border-fade-blue  pl-4'
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default MaintenanceHistoryRead