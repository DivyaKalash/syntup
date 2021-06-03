import logo from './logo.svg';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from './containers/Signin';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Category from './containers/Categories';
import Service from './containers/Services';

function App() {
  return (
    
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/categories" component={Category}/>
        <Route path="/services" component={Service}/>


        
      </Switch>
      </Router>
    
  );
}

export default App;
