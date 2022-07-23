import React, { Component } from 'react';
import logo from './logo.svg';
// import "@aws-amplify/ui-react/styles.css";
import './App.css';
import { withAuthenticator, AmplifySignOut, AmplfiyProvider } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';

import awsconfig from './aws-exports';
import aws_exports from './aws-exports';

Amplify.configure(awsconfig);
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. V2 Hello World
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
