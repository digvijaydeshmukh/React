import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HelloWorld from '../components/helloworld'
import ReactForms from '../components/reactForm'
import DataTable from '../components/dataTable'
import loginComponent from '../public/login'
import WelcomeComp from '../components/welcome'
import PrivateRoute from '../routes/privateRoute';
import AppendComponent from '../components/appendElement';
import forComponent from '../components/forComponent';

class Routes extends Component {
    state = {};

    render() {
        return (
            <div>

                <Router>
                    
                        <Switch>
                          
                                <Route path="/login"  component={loginComponent} />
                                <PrivateRoute path="/home" exact component={HelloWorld} />
                                <PrivateRoute path="/reactForm" component={ReactForms} />
                                <PrivateRoute path="/datatable" component={DataTable} />
                                <PrivateRoute path="/welcome" component={WelcomeComp} />
                                <PrivateRoute path="/append" component={AppendComponent}/>
                                <PrivateRoute path="/for" component={forComponent}/>
                                {/* <Route path="/"  render=()=>component={loginComponent} /> */}
                                {/* <Route component={pageNotFound} />  */}

                           
                        </Switch>

                   



                </Router>
            </div>
        )

    }
}

export default Routes;