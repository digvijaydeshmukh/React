import  React,{ Component } from 'react';
import Cookies from 'universal-cookie';

class AuthGuard extends Component{
    state={};
    cookies=new Cookies();
    constructor(props){
        super(props);
        
    }

    isAuthenticated=()=>{
        console.log("yt",localStorage.getItem('auth'))
        let checkAuth=localStorage.getItem('auth')
        if(checkAuth){
            return true;
        }else{
            return false
        }
        
    }

    SignIn(tok){
        localStorage.setItem('auth',tok,{path:'/'});
         setTimeout(tok,100);
    }
    
    SignOut(){
        localStorage.removeItem('auth',false,{path:'/'});
        // setTimeout(tok,100);
    }
}


export default AuthGuard;