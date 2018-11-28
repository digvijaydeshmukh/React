import React, { Component } from 'react';
import { Textbox } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import { Textarea } from 'react-inputs-validation';
import { Link } from "react-router-dom";

class ReactForms extends Component {
    state = {
        name: '',
        email: '',
        onMsgChange: '',
        hasNameError: true,
        hasMsgError: true,
        hasEmailError: true,
        validate: false

    }
    constructor(props) {
        super(props);
        this.savedata = this.savedata.bind(this);

    }
    toggelValidate(validate) {
        this.setState({ validate })
    }
    savedata = (e) => {

        e.preventDefault();
        this.toggelValidate(true)
        const {
            hasNameError,
            hasMsgError,
            hasEmailError,
        } = this.state;
        console.log(this.state)
        if (!hasNameError && !hasMsgError && !hasEmailError) {
            fetch('https://test15.spheregen.net/api/marketing/mail/sendmail', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Name: this.state.name,
                    Email: this.state.email,
                    Massage: this.state.msg
                })

            }).then(response => {
                if (response.status === 200) {
                    this.setState({
                        name: "",
                        email: "",
                        msg: ""
                    })
                }
            })
        }
    }


    onNameChange = (e) => {
        e.preventDefault();
        this.setState({ name: e.target.value })
    }
    onEmailChange = (e) => {
        e.preventDefault();
        this.setState({ email: e.target.value })
    }

    onMsgChange = (e) => {
        e.preventDefault();
        this.setState({ msg: e.target.value })
    }

    render() {

        return (
            <div className="container">
                <br />
                <Link to='/home'><button className="btn btn-success">Back</button></Link>
                <Link to='/login'><button className="btn btn-danger">SignOut</button></Link>
                <h3>Forms in react</h3><br />
                <form name="contatForm" onSubmit={this.savedata}>
                    <div>
                        <div className="form-group">
                            <label className="control-label col-sm-2">Name:-</label>
                            {/* <input type="text" className="form-control" placeholder="enter name" name="fname" id="name" value={this.state.name} onChange={this.onNameChange} /> */}

                            <Textbox
                                tabIndex="1"
                                id={'Name'}
                                name="Name"
                                type="text"
                                value={this.state.name}
                                validate={this.state.validate}
                                validationCallback={res => this.setState({ hasNameError: res, validate: false })}
                                placeholder="Place your name here"
                                onChange={(name, e) => {
                                    this.setState({ name });
                                }}
                                onBlur={(e) => { }}
                                validationOption={{
                                    name: 'Name',
                                    check: true,
                                    required: true
                                }}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2">Email:-</label>
                        {/* <input type="text" className="form-control" placeholder="enter Email" id="email" value={this.state.email} onChange={this.onEmailChange} /> */}

                        <Textbox
                            tabIndex="2"
                            id={'Email'}
                            name="Email"
                            type="text"
                            value={this.state.email}
                            validate={this.state.validate}
                            validationCallback={res => this.setState({ hasEmailError: res, validate: false })}
                            placeholder="Place your Email here"
                            onChange={(email, e) => {
                                this.setState({ email });
                            }}
                            onBlur={(e) => { }}
                            validationOption={{
                                name: 'Email',
                                reg: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                regMsg: 'Enter valid Email'
                            }}
                        />

                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2">Massage:-</label>
                        <div className="form-group">
                            {/* <textarea className="form-control" placeholder="enter massage" id="msg" value={this.state.msg} onChange={this.onMsgChange} /> */}

                            <Textarea
                                tabIndex="3"
                                id="Message"
                                name="Message"
                                value={this.state.msg}
                                validate={this.state.validate}
                                validationCallback={res => this.setState({ hasMsgError: res, validate: false })}
                                placeholder="Place your Message here"
                                onChange={(msg, e) => {
                                    this.setState({ msg });
                                }}
                                onBlur={(e) => { }}
                                validationOption={{
                                    name: 'Message',
                                    check: true,
                                    required: true,
                                }}
                            />
                        </div>
                    </div>


                    <div className="form-group">
                        <div>
                            <button className="btn btn-success" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ReactForms;  