import React from 'react';
import './home.css';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import User from './user';
import Hospital from './hospital'


const Home =  () => {
  return <div>
  <h1 className='container text-center  heading'>Welcome to naughtySharma.com</h1>

  <div className='container  '>
<div className='row col justify-content-center'>

    <div className=' shadow col-md-5 left-container'>
  <User />
     </div>

  <div className=' shadow col-md-5 right-container'>
   <Hospital />
  </div>

  </div>
  </div>


        </div>
}

export default Home;
