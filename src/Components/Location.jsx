import React from 'react'

import UserLocation from './userLocation'
// import MyComponent from './Map'

const Location = ({center}) => {
  return (


    <div className='max-w-screen-2xl  h-full w-full flex justify-center'>
    
    <div className='w-[70%] h-[85%] bg-white'>
        <UserLocation></UserLocation>
        

    </div>
   </div>
  )
}

export default Location
