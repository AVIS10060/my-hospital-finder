
// import React, { useState ,useEffect} from 'react'
// import MyComponent from './MyComponent'

// const UserLocation = () => {
//     const [latitude,setlatitude] = useState(0)
//     const [longitude,setlongitude] = useState(0)
//     useEffect(()=>{
//         navigator.geolocation.getCurrentPosition((position) => {
//             setlatitude(position.coords.latitude)
//             setlongitude(position.coords.longitude)
//         })
//     },[])
//   return (
//     <MyComponent longitude={longitude} latitude = {latitude}></MyComponent>
//   )
// }

// export default UserLocation



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyComponent from './MyComponent'

const UserLocation = () => {
  const [location, setLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchHospitals(latitude, longitude);
        },
        (error) => {
          console.error('Error fetching location:', error);
        }
      );
    }
  }, []);

  const fetchHospitals = async (latitude, longitude) => {
    try {
      const response = await axios.get(`https://in1.locationiq.com/v1/nearby.php?key=AIzaSyBLnJtAk8iG_q-0SR24_2RlalcxTQyvVaI&lat=${latitude}&lon=${longitude}&tag=hospital&radius=10000&format=json`);
      setHospitals(response.data);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    }
  };

  return (
    <>
    {location ? (
      <>
       
        <MyComponent location={location} hospitals={hospitals} />
      </>
    ) : (
      <p>Fetching location...</p>
    )}
    </>
    
   
  );
};

export default UserLocation;

