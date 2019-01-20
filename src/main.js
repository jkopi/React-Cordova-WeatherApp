import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';

const reactTarget = document.getElementById('react-target');

ReactDOM.render(<App />, reactTarget);

console.log("webpack bundle works");
