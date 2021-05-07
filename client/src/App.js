import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import SiteInfo from './Components/main';
import Footer from './Components/footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register  from './Components/register';
import Login  from './Components/login';
// import './css/main.css';

function App() {
  return (
    <Router>
    <>
      <Header/>
      <Switch>
        <Route exact path="/" render={()=>{
          return(
            // <div className = "body">
                  <SiteInfo/>
                  // </div>
          )
        }}></Route>

        <Route exact path="/register">
          <Register/>
        </Route>

        <Route exact path = "/login">
          <Login/>
        </Route>
      </Switch>
      <Footer/>
    </>
    </Router>
  );
}

export default App;
