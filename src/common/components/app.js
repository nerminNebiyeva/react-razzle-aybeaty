import React from 'react';
//import Home from '../containers/home'
import MyList from '../containers/MyList'
import logo from '../../../public/logo.png';
import './main.css';

const App = () => (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href=""><img src={logo} alt="logo" height="75" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Pricing</a>
        </li>
      </ul>
      <span className="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>  
</nav>

{/* <Home/>*/}

<MyList/>

<footer className="bg-light">
  <div className="container py-3">
    <div className="row">
      <div className="col-md-6">
        <a className="navbar-brand" href=""><img src={logo} alt="logo" height="75" /></a>
      </div>
      <div className="col-md-6 text_right">
       &copy; 2018 Nermin Nebiyeva
      </div>
    </div>
  </div>
</footer>
</div>
);


export default App;
