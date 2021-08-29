import logo from './logo.svg';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from './containers/Signin';
import Home from './containers/Home/index';
import Signup from './containers/Signup';
import Category from './containers/Categories';
import Service from './containers/Services';
import PrivateRoute from './components/HOC/PrivateRoute';
import { isUserLoggedIn, getInitialData, getAllServices } from "./actions";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import AllBookings from './containers/AllBookings';
import { getAllBookings } from './actions/booking';

function App() {
   
  const dispatch = useDispatch();
const auth = useSelector(state => state.auth);

useEffect(() => {
  if(!auth.authenticate){
  dispatch(isUserLoggedIn());

}
  dispatch(getInitialData());
  dispatch(getAllServices());
  dispatch(getAllBookings());



}, []);



  return (
    
      <div>
      
      <Header/>
      <Switch>
        <PrivateRoute path="/" exact component={Home}/>
        <PrivateRoute path="/categories" component={Category}/>
        <PrivateRoute path="/services" component={Service}/>
        <PrivateRoute path="/allBookings" component={AllBookings}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>


        
      </Switch>
      
      </div>
      
    
  );
}

export default App;
