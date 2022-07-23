import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import '@aws-amplify/ui-react/styles.css';
// import { AmplifyProvider } from '@aws-amplify/ui-react';

ReactDOM.render(
    // <AmplifyProvider>
        <App />,
    // </AmplifyProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
