import React, { useState } from 'react'
import Login from './Login'
import Location from './Location'
import { useGoogleLogin } from '@react-oauth/google'

const Home = () => {

  const [state,update] = useState(false)
  const login = useGoogleLogin({
    onSuccess: (()=>{
      update(!state)
    }),
  });
  return <>
  <div className='w-full h-screen  bg-gradient-to-b from-slate-950 via-slate-950 to-gray-700 flex justify-center items-center fixed'>
  
  {state  ? <Location></Location> : <Login screen = {login}></Login>}
  
    </div>
  </>
    
    
}

export default Home
