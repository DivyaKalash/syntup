import React from "react";
// import { Header } from "./header";
// import { Footer } from "./footer";
import "../Css/login.css"
const Login = () => {
  return (
    // <div>
      
      // <form>
      //   <div className="row mb-3">
      //     <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
      //       Email
      //     </label>
      //     <div className="col-sm-10">
      //       <input type="email" className="form-control" id="inputEmail3" />
      //     </div>
      //   </div>
      //   <div className="row mb-3">
      //     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
      //       Password
      //     </label>
      //     <div className="col-sm-10">
      //       <input
      //         type="password"
      //         className="form-control"
      //         id="inputPassword3"
      //       />
      //     </div>
      //   </div>
      //   <div className="row mb-3">
      //     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
      //       Confirm Password
      //     </label>
      //     <div className="col-sm-10">
      //       <input
      //         type="password"
      //         className="form-control"
      //         id="inputPassword3"
      //       />
      //     </div>
      //   </div>

      //   <button type="submit" className="btn btn-primary">
      //     Sign up
      //   </button>
      // </form>
      
    // </div>
    <div className="login">
        <form action="">
            <h1>Log In</h1>
            <input type="email" name="email" id="email" placeholder="Email Id" autoComplete="off"/><br/><br/>
            <input type="password" name="password" id="password" placeholder="Password" autoComplete="off"/><br/><br/><br/>
            <input type="submit" value="login"/><br/><br/><br/>

            Don't have account?<a className="link" href="register.html"  >&nbsp;Sign Up</a>
        </form>
    </div>
  );
};

export default Login;
