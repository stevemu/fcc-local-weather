import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "normalize.css";
import "./weather-icons/css/weather-icons.css"

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
