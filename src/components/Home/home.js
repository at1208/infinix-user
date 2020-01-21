import React, { Component } from 'react';
import './home.css';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import User from './user';
import Hospital from './hospital'


class Home extends Component {

  state ={
    userStatus: false,
    hospitalStatus: false,

  }

  render(){
    console.log(this.state.userStatus)
        console.log(this.state.hospitalStatus)
    return <div>
    <h1 className='container text-center  heading'>Welcome to naughtySharma.com</h1>





    <div className='container  '>
  <div className='row col justify-content-center'>

      <div className='shadow col-md-5 left-container'>
      <h1 className='user text-center' onClick={() => this.setState({ userStatus: true, hospitalStatus: false })}>Register as a User</h1>
    {this.state.userStatus && <User /> }
       </div>

    <div className='shadow col-md-5 right-container'>
    <h1 className='user text-center'  onClick={() => this.setState({ hospitalStatus: true, userStatus:false })}>Register as a Hospital</h1>
    {this.state.hospitalStatus && <Hospital /> }
    </div>

    </div>
    </div>


          </div>
  }
}

export default Home;
