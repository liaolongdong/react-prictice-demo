import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('example')
// );
// ReactDOM.render(
// 	React.createElement('h1', null, 'hello world'),
// 	document.getElementById('example')
// );

registerServiceWorker();
