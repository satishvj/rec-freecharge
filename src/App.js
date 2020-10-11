import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src='/svgs/rec.svg' className='svgImg' alt="online" style={{height:'250px', margin:'5%'}} />
        <Typography 
        style={{color:'#de896b', fontSize:'2rem'}}
          className="App-link"
        >FreeCharge</Typography>
        <a
          className="App-link"
          href="/rec"
        >
         Recipes
        </a>
      </header>
    </div>
  );
}

export default App;
