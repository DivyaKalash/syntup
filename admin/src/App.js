import logo from './logo.svg';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from './containers/Signin';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Category from './containers/Categories';
import Service from './containers/Services';
import PrivateRoute from './components/HOC/PrivateRoute';


function App() {




  return (
    
      <div>
      <Header/>
      
      <Switch>
        <PrivateRoute exact path="/" component={Home}/>
        <PrivateRoute path="/categories" component={Category}/>
        <PrivateRoute path="/services" component={Service}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>


        
      </Switch>
      
      </div>
      
    
  );
}

export default App;
