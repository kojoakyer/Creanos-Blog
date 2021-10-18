import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home/Home';
import Single from './components/pages/Single/Single';
import Write from './components/pages/Write/Write';
import Setting from './components/pages/Settings/Setting';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register'
import Footer from './components/Footer/Footer';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
function App() {

  const user = false;
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Register'> {user ? <Home/> : <Register/>}</Route>
          <Route path='/Login'> {user ? <Home/> : <Login/>}</Route>
          <Route path='/write'  component={Write}/>
          {/* <Route path='/Write'> {user ? <Write/> : <Register/>}</Route> */}
          <Route path='/Setting'> {user ? <Setting/> : <Register/>}</Route>
          <Route path='/Post/:postId'  component={Single}/>
          <Route path='/about' component={About}/>
          <Route path='/contact'  component={Contact}/>
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
