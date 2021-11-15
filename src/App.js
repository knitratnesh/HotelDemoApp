// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import React from 'react';
import Home from './screens/Home';
import Rooms from './screens/Rooms';
import SingleRoom from './screens/SingleRoom';
import ErrorPage from './screens/Errorpage';
import logo from './assets/images/logo.svg';
import { Component } from 'react/cjs/react.production.min';
import '../src/assets/css/index.css';
import IndividualRoom from './components/IndividualRooms';
import RoomDetails from './screens/RoomDetails';

export default class App extends Component {

  constructor(){
    super();

    this.state ={
      isOpen:true
    }
  }

  render(){
  return (
    // <SingleRoom/>
    // <IndividualRoom/>
    <BrowserRouter>
     <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Hotel Booking" />
                        </Link>
                    </div>
                    <ul className={"nav-links"}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/rooms">Rooms</Link></li>
                        {/* <li><Link to="/singleroom">Single Room</Link></li> */}
                    </ul>
                </div>
            </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slugs" component={SingleRoom}/>
        <Route component={ErrorPage} />
      </Switch>
  </BrowserRouter>
  );
  }
}

