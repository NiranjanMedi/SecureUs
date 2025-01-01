import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import errorPage from './ErrorPage';
import CrimeDataPage from './crimeDataPage';
import About from './AboutUs';
import HomePage from './HomePage'
import BasicTextFields from '../components/Form';
import ReactGA from 'react-ga4';


function App() {

  const TRACKING_ID = "G-Y0GWP9MH5M";
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({ hitType: "pageview", page: "window.location.pathname + window.location.search", title: "Home Page" });

  return (
    <div>
          <Header />
          <Router>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/crimeMap" element={<CrimeDataPage />} />
              <Route path='/aboutUs' element={<About />} />
              <Route path="*" element={<errorPage />} />
              <Route path='/login' element={<BasicTextFields title="Login" />} />
              <Route path='/register' element={<BasicTextFields title="Register" />} />
            </Routes>
          </Router>
    </div>
  );
}


export default App;