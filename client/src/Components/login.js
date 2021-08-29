
import React, { useState } from 'react'
// import { Header } from "./header";
// import { Footer } from "./footer";
import "../Css/login.css"
import {Link, useHistory} from "react-router-dom";
import synimg from "../images/SYNTUP.png";
const Login = () => {
  const history = useHistory()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const options = {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: email,
        password: password
    })
  }
    const postFunc=()=> 
    {
        if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
            console.log("Invalid Email");
            // M.toast({html: 'Invalid Email', classes:"#e53935 red darken-1"})
            return;
        }
        fetch('/signin', options)
        .then(res => res.json())
        .then(data => {
        if(data.error)
        {
            // M.toast({html: data.error, classes:"#e53935 red darken-1"})
            console.log(data.error);
            
        }else{
            // M.toast({html: data.message, classes:"#00c853 green accent-4"})
            localStorage.setItem("jwt", data.token)
            localStorage.setItem("user", JSON.stringify(data.user))
            history.push('/')
        }
        
        }).catch(err=> {
            console.error(err);
        })
    
    }
 
  

  return (
    <>
    <div className="login">
            <h1>Log In</h1><br/>
            <input className="registerInput" type="email" name="email" id="email" placeholder="Email Id" autoComplete="off" value={email} onChange={(emailFunc) => setEmail(emailFunc.target.value)}/><br/><br/>
            <input className="registerInput" type="password" name="password" id="password" placeholder="Password" autoComplete="off" value={password} onChange={(pwdFunc) => setPassword(pwdFunc.target.value)}/><br/><br/><br/>
            <button className="si"type="submit " name="action" onClick={()=>postFunc()}>Sign In</button><br/><br/>

            <p>Don't have account?</p><Link className="link" to="/signup">&nbsp;Sign Up </Link>
    </div>
    <img class="img2" src={synimg} alt="not able"/>
    <img class="img1" src={synimg}/>
    </>
  );
};

export default Login;
