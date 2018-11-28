import React, { Component } from 'react';
import { Textbox } from 'react-inputs-validation';
import AuthGuard from '../services/auth';
import Cookies from 'universal-cookie';

export default class loginComponent extends Component {
    state = {
        username: '',
        password:'',
        hasusernameError:true,
        haspasswordError:true,
        validate: false,
    }
    authguard=new AuthGuard();
    cookies=new Cookies();
    constructor(props){
        super(props)
        this.loginsuccess=this.loginsuccess.bind(this)
    }
    
    toggleValidating(validate){
        this.setState({ validate });
    }
    loginsuccess = (e) => {
        e.preventDefault();
        this.toggleValidating(true);
        const {
            haspasswordError,
            hasusernameError
        }=this.state;
        
        if (!haspasswordError && !hasusernameError) {
            let loginInfo={
                username:this.state.username,
                password:this.state.password
            }
            console.log(loginInfo)
            let token="12345"
            this.authguard.SignIn(token)
            this.props.history.push('/home');
          }


    }
    render() {
        return (
            <div className="container">
                <h2 style={{ color: "red", 'marginLeft': '254px' }}>Welcome To React Practice</h2>
                <div className="container loginClass">
                    <form name="login" onSubmit={this.loginsuccess}>
                        <div className="row">

                            <div className="vl">
                                <span className="vl-innertext" >or</span>
                            </div>

                            <div className="col">
                                <div className="fb btn">
                                    <i className="fa fa-facebook fa-fw"></i> Login with Facebook
                                </div>
                                <div className="twitter btn">
                                    <i className="fa fa-twitter fa-fw"></i> Login with Twitter
                                </div>
                                <div href="" className="google btn" ><i className="fa fa-google fa-fw">
                                </i> Login with Google+
                                </div>
                            </div>

                            <div className="col">
                                <div className="hide-md-lg">
                                    <p>Or sign in manually:</p>
                                </div>

                                {/* <input type="text" name="username" placeholder="Username" required /> */}
                                <Textbox
                                    tabIndex="1"
                                    id={'username'}
                                    name="username"
                                    type="text"
                                    value={this.state.username}
                                    placeholder="Place your name here"
                                    validate={this.state.validate} 
                                    validationCallback={res => this.setState({ hasusernameError: res, validate: false })}
                                    onChange={(username, e) => {
                                        this.setState({ username });
                                    }}
                                    onBlur={(e) => { }}
                                    validationOption={{
                                        name: 'username',
                                        check: true,
                                        required: true
                                    }}
                                />

                                <Textbox
                                tabIndex="1"
                                id={'password'} 
                                name="password" 
                                type="password"
                                value={this.state.password}
                                validate={this.state.validate} 
                                validationCallback={res => this.setState({ haspasswordError: res, validate: false })}
                                placeholder="Place your name here"
                                onChange={(password, e) => {
                                    this.setState({ password });
                                }}
                                onBlur={(e) => { }}
                                validationOption={{
                                    name: 'password',
                                    check: true,
                                    required: true,
                                  
                                }}
                            />
                                {/* <button onClick={this.validateForm}>test</button> */}
                               
                                <input type="submit" value="Save"/>

                            </div>

                        </div>
                    </form>
                </div>

                <div className="bottom-container">
                    <div className="row">
                        <div className="col">
                            <div className="btn">Sign up</div>
                        </div>
                        <div className="col">
                            <div className="btn">Forgot password?</div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
