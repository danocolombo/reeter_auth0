import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import NotFound from './components/NotFound';
import CallBack from './components/Callback';

class App extends Component {
  render (){
    //routing
    let mainComponent = "";
    switch(this.props.location){
      case "":
        mainComponent = <Main {...this.props}/>;
        break;
      case "callback":
        mainComponent = <CallBack />;                
        break;
      case "secret":
        mainComponent = <Secret />;
        break;
      default:
        mainComponent = <NotFound />;
        break;
    }


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Reeter Auth0 sample, {this.props.name}<br/>
            To do anything you will need to login.
          </p>
        </header>
        {mainComponent }
      </div>
    );
  }
  
}

export default App;
