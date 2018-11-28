import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AuthGuard from '../services/auth';


class HeaderComp extends Component {
    state = {}
    authGuard=new AuthGuard();
    constructor(props){
        super(props);
       
    }
    backToLogin=(e)=>{
        // /this.authGuard.isAuthenticated
        this.authGuard.SignOut();
        // this.props.history.push("/")
       // console.log("pp",this.authGuard.isAuthenticated())
       
    }

    render() {
        return (
            <div className="container">
                <nav className="navbarClass">
                    <ul>
              
                                <li><Link to='/home'><button className="btn btn-success">Home</button></Link></li>
                                <li><Link to='/reactForm'><button className="btn btn-success">ReactForm</button></Link></li>
                                <li><Link to='/datatable'><button className="btn btn-success">DataTable</button></Link></li>
                                <li><Link to='/append'><button className="btn btn-success">AppendExample</button></Link></li>
                                <li><Link to='/login'><button className="btn btn-danger" onClick={this.backToLogin}>SignOut</button></Link></li>
                    </ul>
                </nav>
            </div>

        )
    }
}

export default HeaderComp;
