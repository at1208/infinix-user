import React , { Component } from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';

class Hospital extends Component {
  render(){
    return <>
    <h1 className='user text-center'>Register as a Hospital</h1>
      <div className='input-element'>
       <Input placeholder="Enter hospital Name" />
    </div>
    <div className='input-element'>
     <Input placeholder="Enter hospital email" />
  </div>
  <div className='input-element'>
   <Input placeholder="Enter hospital helpline number" />
</div>

<div className='input-element'>
 <Input placeholder="Enter password" type='password'/>
</div>

<div className='text-center submit-button'>
<Button className='btn btn-info'>Submit</Button>
</div>
    </>
  }
}


export default Hospital;
