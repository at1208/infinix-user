import React from 'react';
import './home.css';

const Home =  () => {
  return <div>
  <h1 className='container text-center  heading'>Welcome to fastAmbulance.com</h1>

  <div className='container '>
<div className='row col justify-content-center'>

    <div className=' shadow col-md-5 left-container'>
     <h1 className='user text-center'>Register as a User</h1>
     </div>

  <div className=' shadow col-md-5 right-container'>
     <h1 className='user text-center'>Register as a Hospital</h1>
  </div>

  </div>
  </div>


        </div>
}

export default Home;
