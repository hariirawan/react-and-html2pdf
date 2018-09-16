import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase/app';
var config = {
  apiKey: 'AIzaSyB0i8G3b3nA1iQmL4MYYAGqiDPid8b9jJE',
  authDomain: 'vue-project-e0ba0.firebaseapp.com',
  databaseURL: 'https://vue-project-e0ba0.firebaseio.com',
  projectId: 'vue-project-e0ba0',
  storageBucket: 'vue-project-e0ba0.appspot.com',
  messagingSenderId: '61259821774'
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
