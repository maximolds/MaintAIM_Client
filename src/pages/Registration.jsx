
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserIcon } from '../assets/icons/UserIcon';


function Registration() {





    let navigate = useNavigate();

    const [file, setFile] = useState();
    const [values, setValues] = useState({
        picture: null,
        username: '',
        email: '',
        password: '',
        role: '',
        firstname: '',
        lastname: ''
    });

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }


    const handleInputChange = (e) => {
        if (e.target.name === 'picture') {
            setFile(e.target.files[0]);
            setValues({ ...values, [e.target.name]: e.target.value });
        } else {
            setValues({ ...values, [e.target.name]: e.target.value });
        }

    }



    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('picture', file)
        data.append('picture', values.picture);
        data.append('username', values.username);
        data.append('email', values.email);
        data.append('password', values.password);
        data.append('role', values.role);
        data.append('firstname', values.firstname);
        data.append('lastname', values.lastname);
        axios.post("https://maintaim-db-5eb6eb864ba7.herokuapp.com/auth", data).then(() => {
            console.log(data);
            navigate("/");
        });
    };

    return (
        <div className="mt-20 flex items-center justify-center w-full h-screen bg-[url('../src/assets/images/MaintAIM-bg.jpg')] relative bg-cover bg-no-repeat">
            <div className="max-w-md w-auto mx-auto h-auto max-h-md  p-6 bg-white rounded-lg shadow-xl">
                <h1 className="text-2xl text-black text-whitefront-bold mb-10px font-inter font-bold">Register</h1>
                <h2 className="text-xs text-main-blue font-inter font-bold mb-40">Asia Integrated Machine Inc.</h2>

                <form encType="multipart/form-data">
                    
                    <div className="relative my-4">
                        <input
                            type="text"
                            name="username"
                            className="block w-72 h-40 pl-10 font-inter text-base mb-16px text-white bg-main-blue
                        border-2 border-b-2 border-black appearnace-none dark:focus:border-blue-500 focus:outline-none 
                        focus:ring-0 focus:text-white focus:border-blue-600 peer placeholder-white"
                            onChange={handleInputChange}
                            placeholder="Username"
                        />
                        <div className='absolute top-2 left-2 z-10 flex items-center pointer-events-none'>
                            <UserIcon />
                        </div>
                    </div>

                    <div className="relative my-4">
                        <input
                            type="password"
                            name="password"
                            className="block w-72 h-40 pl-10 font-inter text-base mb-16px text-white bg-main-blue
                        border-2 border-b-2 border-black appearnace-none dark:focus:border-blue-500 focus:outline-none 
                        focus:ring-0 focus:text-white focus:border-blue-600 peer placeholder-white"
                            onChange={handleInputChange}
                            placeholder="Password"
                        />
                        <div className='absolute top-2 left-2 z-10 flex items-center pointer-events-none'>
                            <UserIcon />
                        </div>
                    </div>

                    <div className="relative my-4">
                        <input
                            type="email"
                            name="email"
                            className="block w-72 h-40 pl-10 font-inter text-base mb-16px text-white bg-main-blue
                        border-2 border-b-2 border-black appearnace-none dark:focus:border-blue-500 focus:outline-none 
                        focus:ring-0 focus:text-white focus:border-blue-600 peer placeholder-white"
                            onChange={handleInputChange}
                            placeholder="Email"
                        />
                        <div className='absolute top-2 left-2 z-10 flex items-center pointer-events-none'>
                            <UserIcon />
                        </div>
                    </div>

                    <div className="relative my-4">
                        <input
                            type="text"
                            name="firstname"
                            className="block w-72 h-40 pl-10 font-inter text-base mb-16px text-white bg-main-blue
                        border-2 border-b-2 border-black appearnace-none dark:focus:border-blue-500 focus:outline-none 
                        focus:ring-0 focus:text-white focus:border-blue-600 peer placeholder-white"
                            onChange={handleInputChange}
                            placeholder="First Name"
                        />
                        <div className='absolute top-2 left-2 z-10 flex items-center pointer-events-none'>
                            <UserIcon />
                        </div>
                    </div>

                    <div className="relative my-4">
                        <input
                            type="text"
                            name="lastname"
                            className="block w-72 h-40 pl-10 font-inter text-base mb-16px text-white bg-main-blue
                        border-2 border-b-2 border-black appearnace-none dark:focus:border-blue-500 focus:outline-none 
                        focus:ring-0 focus:text-white focus:border-blue-600 peer placeholder-white"
                            onChange={handleInputChange}
                            placeholder="Last Name"
                        />
                        <div className='absolute top-2 left-2 z-10 flex items-center pointer-events-none'>
                            <UserIcon />
                        </div>
                    </div>

                    <div className="relative my-4">
                        <input
                            type="text"
                            name="role"
                            className="block w-72 h-40 pl-10 font-inter text-base mb-16px text-white bg-main-blue
                        border-2 border-b-2 border-black appearnace-none dark:focus:border-blue-500 focus:outline-none 
                        focus:ring-0 focus:text-white focus:border-blue-600 peer placeholder-white"
                            onChange={handleInputChange}
                            placeholder="Role"
                        />
                        <div className='absolute top-2 left-2 z-10 flex items-center pointer-events-none'>
                            <UserIcon />
                        </div>
                    </div>

                    <div className="relative my-4">
                        <input
                            type="file"
                            name="picture"
                            className="block w-72 h-40 pl-10 font-inter text-base mb-16px text-white bg-main-blue
                        border-2 border-b-2 border-black appearnace-none dark:focus:border-blue-500 focus:outline-none 
                        focus:ring-0 focus:text-white focus:border-blue-600 peer placeholder-white"
                            onChange={handleInputChange}
                        />
                        <div className='absolute top-2 left-2 z-10 flex items-center pointer-events-none'>
                            <UserIcon />
                        </div>
                    </div>


                    <button
                        className="my-4 relative w-80 h-30  bg-main-blue 
                     text-sm ml-200 rounded-lg font-inter shadow-lg 
                     mb-40 hover:bg-white hover:text-black transistion-colors duration-300"
                        onClick={onSubmit}>Register
                    </button>
                </form>

            </div>

        </div>
    );
}

export default Registration