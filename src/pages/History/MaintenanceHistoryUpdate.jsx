import React, { useEffect, useState } from 'react'
import { Header } from '../../components';
import { useParams, useNavigate, Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
import axios from 'axios';


const MaintenanceHistoryUpdate = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    const { currentColor, activeMenu, setActiveMenu } = useStateContext();
    const [initialValues, setInitialValues] = useState({
        personnel_incharge: "",
        crane_number: "",
        part_replaced: "",
        date_replaced: "",
        previous_date_replaced: "",
        status: ""
    });



    const [listOfMaintenanceHistory, setListOfMaintenanceHistory] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:3001/maintenancehistory/byId/${id}`).then((response) => {
            setListOfMaintenanceHistory(response.data)
            setInitialValues(response.data)
            console.log(response.data)
        });
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        axios.put(
            `http://localhost:3001/maintenancehistory/update/byId/${id}`, initialValues).then(res => {
                console.log(res);
                navigate('/maintenance-history')
            }).catch(err => console.log(err));
    }

    return (
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10 text-slate-950'>
            <div>
                <Header
                    title='Maintenance History'
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

                    <div className='flex-1 md:flex'>
                        <div className='border-t-2 w-full flex flex-wrap'>
                            <div className={`flex flex-wrap  
            ${activeMenu ? 'justify-start md:w-[50%]' : ' justify-start md:w[50%] items-center'}`} >
                                <div className='mt-5 '>
                                    <p className='text-sm text-black dark:text-white mb-3 font-bold'>
                                        Personnel In-charge
                                    </p>

                                    <input
                                        onChange={(e) => setInitialValues({ ...initialValues, personnel_incharge: e.target.value })}
                                        value={initialValues.personnel_incharge}
                                        name="personnel_incharge"
                                        type="text"
                                        placeholder='Juan Dela Cruz'
                                        className='rounded-3xl w-318 h-42 border-2 border-fade-blue  pl-4'
                                    />
                                </div>
                                <div className='mb-0 mt-5 md:mt-0 md:mb-10'>
                                    <p className='text-sm text-black dark:text-white mb-3 font-bold'>
                                        Crane Number
                                    </p>

                                    <input
                                        onChange={(e) => setInitialValues({ ...initialValues, crane_number: e.target.value })}
                                        value={initialValues.crane_number}
                                        name="crane_number"
                                        type="number"
                                        placeholder='Crane 1'
                                        className='rounded-3xl w-318 h-42 border-2 border-fade-blue pl-4'
                                    />
                                </div>
                            </div>
                            <div className={`flex flex-wrap   
            ${activeMenu ? 'justify-start md:w-[50%]' : ' justify-start md:w[50%] items-center'}`}>
                                <div className='mt-5'>
                                    <p className='text-sm text-black dark:text-white mb-3 font-bold'>
                                        Part Replaced
                                    </p>

                                    <input
                                        onChange={(e) => setInitialValues({ ...initialValues, part_replaced: e.target.value })}
                                        value={initialValues.part_replaced}
                                        name="part_replaced"
                                        type="text"
                                        placeholder=''
                                        className='rounded-3xl w-318 h-42 border-2 border-fade-blue  pl-4'
                                    />
                                </div>
                                <div className='mt-5'>
                                    <p className='text-sm text-black dark:text-white mb-3 font-bold'>
                                        Date Replaced
                                    </p>

                                    <input
                                        onChange={(e) => setInitialValues({ ...initialValues, date_replaced: e.target.value })}
                                        value={initialValues.date_replaced}
                                        name="date_replaced"
                                        type="date"
                                        placeholder='Insert Date Here'
                                        className='rounded-3xl w-318 h-42 border-2 border-fade-blue  pl-4'
                                    />
                                </div>
                                <div className='mt-5'>
                                    <p className='text-sm text-black dark:text-white mb-3 font-bold'>
                                        Previous Date Replaced
                                    </p>

                                    <input
                                        onChange={(e) => setInitialValues({ ...initialValues, previous_date_replaced: e.target.value })}
                                        value={initialValues.previous_date_replaced}
                                        name="previous_date_replaced"
                                        type="date"
                                        placeholder='Insert Date Here'
                                        className='rounded-3xl w-318 h-42 border-2 border-fade-blue  pl-4'
                                    />
                                </div>
                                <div className='mt-5'>
                                    <p className='text-sm text-black dark:text-white mb-3 font-bold'>
                                        Status
                                    </p>

                                    <input
                                        onChange={(e) => setInitialValues({ ...initialValues, status: e.target.value })}
                                        value={initialValues.status}
                                        name="status"
                                        type="string"
                                        placeholder='Insert Current Status'
                                        className='rounded-3xl w-318 h-42 border-2 border-fade-blue  pl-4'
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

export default MaintenanceHistoryUpdate