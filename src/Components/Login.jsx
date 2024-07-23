import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc"
import { useGoogleLogin } from '@react-oauth/google'

const Login = ({screen}) => {
  return (
    <div className='max-w-screen-lg mx-auto flex justify-center  h-full w-full py-10'>
            <div className='w-[45%] bg-white h-[85%] shadow-slate-900 shadow-md rounded-lg flex flex-col  items-center px-auto px-8'>
                <div className='my-3 mx-auto flex justify-center items-cente  w-1/2 p-3'><h3 className='text-4xl font-bold'>Login</h3></div>
                <div className='my-2 w-full flex flex-col px-4'>
                <p className='my-4 text-xl font-medium'>Username:</p>
                <input type="m-2 text-md py-2"  placeholder='enter your username' className='border border-gray-400 rounded-sm outline-none'/>
                <p className='my-4 text-xl font-medium'>Password:</p>
                <input type="m-2 text-md py-2" placeholder='enter your password ' className='border border-gray-400 rounded-sm outline-none'/>
                <button className='my-8 py-3 px-9 text-2xl bg-gradient-to-b from-blue-950  via-blue-950 to-blue-900 rounded-full text-white hover:scale-105 duration-300'>Login</button>
                </div>
                <button >Sign in with Google 🚀</button>;
               
                {/* <h3 className='my-1 font-medium text-2xl'>or sign up with</h3> */}
                <button onClick={screen} className='my-5 py-3 px-9 text-5xl  rounded-full text-white hover:scale-105 duration-400'><FcGoogle></FcGoogle></button>
            </div>
        </div>
  )
}

export default Login
