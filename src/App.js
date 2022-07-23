import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  withAuthenticator, 
  AmplfiyProvider,
  Authenticator,
  Button,
} from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import { SideBar } from './ui-components/SideBar';
import '@aws-amplify/ui-react/styles.css';

import awsconfig from './aws-exports';
import aws_exports from './aws-exports';
import awsExports from './aws-exports';

Amplify.configure(awsExports);
Amplify.configure(awsconfig);
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <Authenticator initialState='signUp'>
        {({ signOut, user }) => (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload. V2 Hello {user.username}.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <Button
              LoadingText=""
              onClick={signOut}
              >
                Sign out
              </Button>
            </header>
          </div>
        )}
      </Authenticator>
    );
  }
}

function TestApp() {
  return (
    <Authenticator initialState="signUp">
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default withAuthenticator(App);

export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}