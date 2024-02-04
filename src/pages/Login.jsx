import React, { useState } from "react";
import { UserIcon } from '../assets/icons/UserIcon';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        const data = { username: username, password: password };
        axios.post("https://maintaimdb-044f7fcd2d92.herokuapp.com/auth/login", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                localStorage.setItem("accessToken", response.data);
                navigate("/");
            }

        });
    };

    let navigate = useNavigate();

    return (
        <div className="w-full h-screen bg-[url('../src/assets/images/MaintAIM-bg.jpg')] relative flex justify-center items-center bg-cover bg-no-repeat">
            <div className='flex items-center  justify-center'>
                <div className="max-w-md w-auto mx-auto p-6 bg-white rounded-lg shadow-xl">
                    <h1 className="text-2xl text-black text-whitefront-bold mb-10px font-inter font-bold">Login</h1>
                    <h2 className="text-xs text-main-blue font-inter font-bold mb-40">Asia Integrated Machine Inc.</h2>


                    {/* Email or Username*/}
                    <div className="relative my-4">
                        <input
                            type="email"
                            className="block w-72 h-40 pl-10 font-inter text-base mb-16px text-white bg-main-blue
        border-2 border-b-2 border-black appearnace-none dark:focus:border-blue-500 focus:outline-none 
        focus:ring-0 focus:text-white focus:border-blue-600 peer placeholder-white"
                            placeholder="Username"
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }}
                        />
                        <div className='absolute top-2 left-2 z-10 flex items-center pointer-events-none'>
                            <UserIcon />
                        </div>
                    </div>





                    {/* Password */}
                    <div className="relative my-4">
                        <input
                            type="password"
                            className="block w-72 h-40 pl-10 font-inter text-base text-white bg-main-blue
        border-2 border-b-2 border-black appearnace-none dark:focus:border-blue-500 focus:outline-none 
        focus:ring-0 focus:text-white focus:border-blue-600 peer placeholder-white"
                            placeholder="Password"
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                        <div className='absolute top-2 left-2 z-10 flex items-center pointer-events-none'>
                            <FaLock />
                        </div>
                    </div>

                    {/* Login Button */}

                    <button

                        className="my-4 relative w-80 h-30  bg-main-blue 
      text-sm ml-200 rounded-lg font-inter shadow-lg 
      mb-40 hover:bg-white hover:text-black transistion-colors duration-300"
                        onClick={login}
                    >Login</button>

                    {/* Forgot Password */}

                    <div>
                        <h3 className="text-base text-black mb-3 font-inter">Forgot Password?</h3>
                        <p className="text-xs text-black font-inter w-250px">no worries, please
                            <a href="" className="text-main-blue"> click here</a> to reset your password.
                        </p>
                    </div>



                </div>
            </div>
        </div>

    )
}

export default Login