import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route'
import {render} from 'react-dom';

import Home from './components/Home';
import {base} from './api/firebase';

console.log('index');

ReactDOM.render(
    <App />, document.getElementById('root'));
registerServiceWorker();
