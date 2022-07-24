import { Authenticator } from "@aws-amplify/ui-react";
import { Component } from "react";
import logo from './logo.svg';
import { Button } from "@aws-amplify/ui-react";


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

  export default App;