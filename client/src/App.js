import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import SiteInfo from './Components/main';
import Footer from './Components/footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register  from './Components/register';
import Login  from './Components/login';
import MenuHeader from './Components/menu-header';
import ServiceListPage from './Components/ServiceListPage';
import ProductDetailPage from './Components/ProductDetailPage';
import MyBookings from './Components/myBookings';
// import './css/main.css';

function App() {
  return (
    <Router>
    <>
      <Header/>
      <MenuHeader />
      <Switch>
        <Route exact path="/" render={()=>{
          return(
            // <div className = "body">
                  <SiteInfo/>
                  // </div>
          )
        }}></Route>

        <Route exact path="/signup">
          <Register/>
        </Route>

        <Route exact path = "/login">
          <Login/>
        </Route>
        <Route exact path="/myBookings" component={MyBookings}/>
        <Route exact path="/:slug" component={ServiceListPage} />
        <Route exact path="/category/:slug" component={ProductDetailPage}/>
      </Switch>
      <Footer/>
    </>
    </Router>
  );
}

export default App;
