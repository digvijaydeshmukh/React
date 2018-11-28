import React, { Component } from 'react';
import TypeHeadComponent from './typehead'
import {  Link } from "react-router-dom";
import HeaderComp from './header'
class HelloWorld extends Component {
    state = {};
    constructor(props){
        super(props)
        this.props.history.push('/home')
    }
    render() {
        return (
            <div className="container">
                <h1>HelloWorld</h1>
                <TypeHeadComponent />
            </div>
        )
    }
}

export default HelloWorld;