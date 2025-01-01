import './App.css';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';
import FlipCard from './flipCard';
import Typical from 'react-typical';

class Home extends React.Component {
    constructor () {
        super();
        this.state = {
            navToggled: false
        };
    }
    render () {
        return (
            <div>
            <div className="block h-96 bg-red-600 p-10">
              <h1 className="lg:text-6xl sm:text-5xl font-bold w-13">
                Created to 
                
                  <Typical 
                    loop = {Infinity}
                    wrapper = "b"
                    steps = {[
                      " Protect",
                      2000,
                      " Alert",
                      2000,
                      " Save",
                      2000
                    ]}
                />
              </h1>
              <p className="py-5 lg:text-4xl sm:text-3xl">Awareness and Action</p>
              <a className="border-solid rounded border-black text-2xl" href="#moreInfoCards">Read More</a>
            </div>
            <div className="p-10 h-80 bg-red-400">
              <p className="lg:text-4xl sm:text-3xl">What is SafeUs?</p>
              <p className="py-7 lg:text-xl sm:md">SafeUs is aimed at promoting women's safety by making crime data easily accessible and understandable. We believe that knowledge is power, and by arming women with accurate information, we aim to create a safer world for everyone.</p>
            </div>
            <div id="moreInfoCards" className="justify-center lg:flex sm:block my-16 text-center">
              <div className = "px-5 py-3 sm:m-3 lg:mx-10 bg-red-100 rounded-lg lg:h-96 sm:h-48 lg:w-64 sm:w-80%">
                <p>Self Defence</p>
                <p>Lorem Ipsum</p>
                <a onClick = {()=> this.setState( {cardIsOpen: !this.state.cardIsOpen} )}>More</a>
                <p className = {this.state.cardIsOpen ? "expandCard" : "shrinkCard"}></p>
              </div>
              <div className="px-5 py-3 sm:m-3 lg:mx-10 bg-red-100 rounded-lg lg:h-96 sm:h-48 lg:w-64 sm:w-80%">
                <p>Women's Protection Laws</p>
                <p>Lorem Ipsum</p>
                <a>More</a>
              </div>
              <div className="px-5 py-3 sm:m-3 lg:mx-10 bg-red-100 rounded-lg lg:h-96 sm:h-48 lg:w-64 sm:w-80%">
                <p>Government Schemes for Women</p>
                <p>Lorem Ipsum</p>
                <a>More</a>
              </div>
            </div>
            <div id="FlippingCards" className="justify-center lg:flex sm:block my-16 text-center">
              <FlipCard 
                 frontContent={<h3>Front Side</h3>}
                 backContent={<p>Back Side</p>}
              />
              <FlipCard 
                 frontContent={<h3>Front Side</h3>}
                 backContent={<p>Back Side</p>}
              />
              <FlipCard 
                 frontContent={<h3>Front Side</h3>}
                 backContent={<p>Back Side</p>}
              />
            </div>
            </div>
        );
    }
}


export default Home;


/**
 * class Home extends React.Component {
    constructor () {
        super();
        this.state = {
            navToggled: false
        };
    }
    render () {
        return (
            <div>
            <div className="block h-96 bg-red-600 p-10">
              <h1 className="lg:text-6xl sm:text-5xl font-bold w-13">
                Created to 
                
                  <Typical 
                    loop = {Infinity}
                    wrapper = "b"
                    steps = {[
                      " Protect",
                      2000,
                      " Alert",
                      2000,
                      " Save",
                      2000
                    ]}
                />
              </h1>
              <p className="py-5 lg:text-4xl sm:text-3xl">Awareness and Action</p>
              <a className="border-solid rounded border-black text-2xl" href="#moreInfoCards">Read More</a>
            </div>
            <div className="p-10 h-80 bg-red-400">
              <p className="lg:text-4xl sm:text-3xl">What is SafeUs?</p>
              <p className="py-7 lg:text-xl sm:md">SafeUs is aimed at promoting women's safety by making crime data easily accessible and understandable. We believe that knowledge is power, and by arming women with accurate information, we aim to create a safer world for everyone.</p>
            </div>
            <div id="moreInfoCards" className="justify-center lg:flex sm:block my-16 text-center">
              <div className = "px-5 py-3 sm:m-3 lg:mx-10 bg-red-100 rounded-lg lg:h-96 sm:h-48 lg:w-64 sm:w-80%">
                <p>Self Defence</p>
                <p>Lorem Ipsum</p>
                <a onClick = {()=> this.setState( {cardIsOpen: !this.state.cardIsOpen} )}>More</a>
                <p className = {this.state.cardIsOpen ? "expandCard" : "shrinkCard"}></p>
              </div>
              <div className="px-5 py-3 sm:m-3 lg:mx-10 bg-red-100 rounded-lg lg:h-96 sm:h-48 lg:w-64 sm:w-80%">
                <p>Women's Protection Laws</p>
                <p>Lorem Ipsum</p>
                <a>More</a>
              </div>
              <div className="px-5 py-3 sm:m-3 lg:mx-10 bg-red-100 rounded-lg lg:h-96 sm:h-48 lg:w-64 sm:w-80%">
                <p>Government Schemes for Women</p>
                <p>Lorem Ipsum</p>
                <a>More</a>
              </div>
            </div>
            <div id="FlippingCards" className="justify-center lg:flex sm:block my-16 text-center">
              <FlipCard 
                 frontContent={<h3>Front Side</h3>}
                 backContent={<p>Back Side</p>}
              />
              <FlipCard 
                 frontContent={<h3>Front Side</h3>}
                 backContent={<p>Back Side</p>}
              />
              <FlipCard 
                 frontContent={<h3>Front Side</h3>}
                 backContent={<p>Back Side</p>}
              />
            </div>
            </div>
        );
    }
}

 * 
 * 
 * 
 * 
 */