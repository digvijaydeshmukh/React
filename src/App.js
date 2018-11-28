import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import HeaderComp from './components/header'
import Routes from './routes/routes'
import HelloWorld from './components/helloworld'
import ReactForms from './components/reactForm'
import DataTable from './components/dataTable'
import loginComponent from './public/login'
import WelcomeComp from './components/welcome'

class App extends Component {
  render() {



    return (

      <div>
        <Routes />
      </div>



      // <div className="container">
      //   <div className="row">
      //     <div className="col-md-2">
      //       <HelloWorld />
      //     </div>
      //   </div>

      //   <div className="row">
      //     <div className="col-md-8">
      //       <ReactForms />
      //     </div>
      //   </div>

      //   <div className="row">
      //     <div className="col-md-8">
      //       <DataTable />
      //     </div>
      //   </div>
      // </div>

    );
  }
}

export default App;
