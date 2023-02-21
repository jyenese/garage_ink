import React from 'react';
import { useState } from 'react';
import { critTattoos, formIcons } from '../assets';
import styles from '../styles';

import axios from 'axios';

const Login = () => {
const [showPassword, setShowPassword] = useState(false);
const togglePassword = () => {setShowPassword(!showPassword)};

return (
    <section className='min-h-screen flex items-center justify-center relative'>

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute -z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />

        {/* set up left side of container */}
        <div className='bg-[#2b79ee] flex rounded-2xl shadow-lg max-w-3xl p-5 relative'>
            <div className='sm:w-1/2 px-8'>
                <h2 className={`${styles.heading2}`}>Login</h2> 
                <p className={`${styles.paragraph} mt-3`}>Already joined The Garage Ink Community? Log in</p>

                {/* form fields */}
                <form className='flex flex-col'>
                    <div className='items-center'>
                    <input className='p-2 mt-8 rounded-xl border w-full' type='text' name='email' placeholder='Email' />


                    {/* set up div to add icon to show/hide password */}
                    <div className='relative'>
                    <input className='p-2 mt-3 rounded-xl border w-full' type={showPassword ? 'text' : 'password'} placeholder='Password' />
                    <img src={formIcons[0]} className='absolute top-1/2 right-3 -translate-y-1/2 h-[25px] w-[25px] mt-1 cursor-pointer' onClick={togglePassword}/>
                    </div>


                    <button className='bg-[#84bffe] rounded-xl text-white mt-3 py-2 w-full hover:scale-105 duration-300'>Login</button>
                    </div>
                </form>



                {/* set up horizontal grey line and Garage Ink text*/}
                <div className='mt-10 grid grid-cols-3 items-center text-gray-800'>
                    <hr className='outline-gray-800'/>
                    <p className='text-center text-sm w-full text-dimWhite'>GARAGE INK</p>
                    <hr className='outline-gray-800'/>
                </div>
                {/* set up forgot password container/link */}
                <div className='mt-3 text-sm border-b py-4'>
                <a className='font-poppins text-white'>Forgot your password?</a>
                {/* create register button and text for account creation */}
                <div className='text-sm flex justify-between'>
                    <p className='py-2 text-white font-poppins'>Create an account</p>
                    <button className='bg-[#84bffe] rounded-xl py-1 px-8 text-white font-poppins hover:scale-110 duration-300 '>Register</button>
                </div>
                </div>
            </div>
        


        {/* set up right side of container */}
            <div className='w-1/2 sm:block hidden'>
                <img src={critTattoos[5]} alt='Artist:Critter' className='rounded-2xl sm:block hidden'></img>
            </div>
        </div>

        



    </section>
)
}

export default Login