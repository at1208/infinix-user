import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';

class User extends Component {
  render(){
    return <>
       <div className='input-element'>
       <Input placeholder="Enter Name" />
    </div>
    <div className='input-element'>
     <Input placeholder="Enter email" />
  </div>
  <div className='input-element'>
   <Input placeholder="Enter Mobile Number" />
</div>

<div className='input-element'>
 <Input placeholder="Enter password" type='password'/>
</div>

<div className='text-center submit-button'>
<Link to='/auth'><Button>Submit</Button></Link>
</div>
    </>
  }
}

export default User;
