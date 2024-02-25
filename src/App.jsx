// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Store from './components/Store';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import Login from './components/Login';


function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Store} />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/login" component={Login} />
        </Switch>
        {isLoggedIn && <Cart />}
      </div>
    </Router>
  );
}

export default App;
