import React, { useEffect, useState } from 'react'

import { Header } from '../../components';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from '../../contexts/ContextProvider';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const HistoryAddRecord = () => {
    let navigate = useNavigate();

    const { currentColor, activeMenu, setActiveMenu } = useStateContext();
    const initialValues = {
        personnel_incharge: "",
        crane_number: "",
        part_replaced: "",
        date_replaced: "",
        previous_date_replaced: "",
        status: ""
    };

    const validationSchema = Yup.object().shape({
        personnel_incharge: Yup.string().required(),
        crane_number: Yup.string().required("Crane number is required"),
        part_replaced: Yup.string().required('Part replaced is required'),
        date_replaced: Yup.date().required().nullable(true).default(() => new Date()),
        previous_date_replaced: Yup.date().required()
    });



    const onSubmit = (data) => {
        axios.post("https://maintaimdb-044f7fcd2d92.herokuapp.com/maintenancehistory", data,
            {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                }
            }).then((response) => {
                if (response.data.error) {
                    console.log(response.data.error);
                } else {
                    username: response.data.username
                    navigate(-1);
                }

            });
    };

    const [authState, setAuthState] = useState({
        username: "",
        id: 0,
        firstname: "",
        status: false,
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
                        status: true,
                    });
                }
            });
    }, []);






    return (
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10 text-slate-950'>
            <div>
                <Header
                    title='Maintenance History'
                />
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}>
                    <Form >
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
                                Save
                            </button>
                            <button
                                onClick={() => navigate(-1)}
                                className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
               rounded-xl buttonShadow mt-4  
              text-white hover:text-black flex justify-center border-1 border-fade-blue
              items-center text-center`}
                                style={{ backgroundColor: currentColor }}
                            >
                                Discard
                            </button>

                        </div>
                        <h2 className='text-20 mt-10 font-bold'
                            style={{ color: currentColor }}
                        >
                            Crane Information
                        </h2>

                        <div className='flex flex-wrap'>
                            <div className='border-t-2 w-full '>
                                <div className={`flex flex-col 
            ${activeMenu ? 'justify-start md:w-[50%]' : ' justify-start md:w[50%] items-start'}`} >
                                    <div className='mt-5 '>
                                        <p className='text-sm text-black dark:text-white mb-3 font-bold'>
                                            Personnel In-charge
                                        </p>
                                        <ErrorMessage className='text-red-500' name="personnel_incharge" component="span" />
                                        <Field
                                            name="personnel_incharge"
                                            type="text"
                                            placeholder='Juan Dela Cruz'
                                            className='rounded-3xl w-318 h-42 border-2 border-fade-blue  pl-4'
                                            value={authState.firstname}
                                       />
                                    </div>
                                    <div className='mt-5'>
                                        <p className='text-sm text-black dark:text-white mb-3 font-bold'>
                                            Crane Number
                                        </p>
                                        <ErrorMessage className='text-red-500' name="crane_number" component="span" />
                                        <Field
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
                                        <ErrorMessage className='text-red-500' name="part_replaced" component="span" />
                                        <Field
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
                                        <ErrorMessage className='text-red-500' name="date_replaced" component="span" />
                                        <Field
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
                                        <ErrorMessage className='text-red-500' name="previous_date_replaced" component="span" />
                                        <Field
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
                                        <ErrorMessage className='text-red-500' name="status" component="span" />
                                        <Field
                                            name="status"
                                            type="string"
                                            placeholder='Insert Current Status'
                                            className='rounded-3xl w-full h-42 border-2 border-fade-blue  pl-4'
                                        />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </Form>

                </Formik>
                {/*Form */}




            </div>

            {/*Form */}

        </div>
    )
}

export default HistoryAddRecord