import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Typography } from '@material-ui/core';

function Failed() {
  return (
    <div className="App">
      <img src='/svgs/fail.svg' className='svgImg' alt="online" style={{height:'250px', margin:'4%'}} />
       <Typography>Payment Failed!!!</Typography>
       <a href='/otp'>Go Back</a>

    </div>
  );
}

export default Failed;
