import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Typography } from '@material-ui/core';

function Success() {
  return (
    <div className="App">
      <img src='/svgs/success.svg' className='svgImg' alt="online" style={{height:'250px', margin:'5%'}} />
       <Typography>Payment Success</Typography>

       <a href='/'>Shop More..</a>
    </div>
  );
}

export default Success;
