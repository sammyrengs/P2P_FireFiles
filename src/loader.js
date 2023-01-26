import React from 'react'
import logo from './logo.svg';
import './App.css';

function loader(){
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 align = 'center'>Loading ...</h1>
            </header>
        </div>
    )
}

export default loader