import React, { Component } from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';

class User extends Component {
  render(){
    return <>
    <h1 className='user text-center'>Register as a User</h1>
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
<Button>Submit</Button>
</div>
    </>
  }
}

export default User;
