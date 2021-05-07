import React from 'react'
// import { Header } from "./header";
// import { Footer } from "./footer";
import "../Css/register.css"

const Register = () => {
    return (
//         <div className="body">
//             {/* <Header/> */}
//             <form>
//   <div className="row mb-3">
//     <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
//     <div className="col-sm-10">
//       <input type="email" className="form-control" id="inputEmail3"/>
//     </div>
//   </div>
//   <div className="row mb-3">
//     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
//     <div className="col-sm-10">
//       <input type="password" className="form-control" id="inputPassword3"/>
//     </div>
//   </div>
//   <div className="row mb-3">
//     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Confirm Password</label>
//     <div className="col-sm-10">
//       <input type="password" className="form-control" id="inputPassword3"/>
//     </div>
//   </div>
  
  
//   <button type="submit" className="btn btn-primary">Sign up</button>
// </form>
// {/* <Footer/> */}
//         </div>
<div className="register">
<form action="">
    <h1>Sign up</h1>
    <input className= "registerInput" type="text" name="name" placeholder="First Name"/><br/><br/>
    <input className= "registerInput" type="text" name="name" placeholder="Last Name"/><br/><br/>
    <input className= "registerInput" type="email" name="email" id="email" placeholder="Email address"/><br/><br/>
    <input className= "registerInput" type="password" name="password" placeholder="Password"/><br/><br/>
    <input className= "registerInput" type="password" name="password" id="password" placeholder="Confirm Password"/><br/><br/>
    <input className= "registerInput" type="submit" value="Register" /><br/><br/>
    Already have account?<a className="link" href="login.html" >&nbsp;Log In</a>
</form>
</div>
    );
};
export default Register;
