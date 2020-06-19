import React, { Component } from 'react';
//import api from "./service/api";
import "./styles.css";
import Routes from './routes';
import Header from './components/Header';
//import Main from './pages/main';




const App = () =>(
  <div className="App">
    <Header />
    <Routes />
  </div>

)

export default App;
