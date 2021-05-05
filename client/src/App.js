import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import SiteInfo from './Components/main';
import Footer from './Components/footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { register } from './Components/register';
import { login } from './Components/login';
// import './css/main.css';

function App() {
  return (
    <Router>
    <div className="body">
      <Header/>
      <Switch>
        <Route exact path="/" render={()=>{
          return(
            <>
                  <SiteInfo/>
                  </>
          )
        }}></Route>

        <Route exact path="/register">
          <register/>
        </Route>

        <Route exact path = "/login">
          <login/>
        </Route>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
