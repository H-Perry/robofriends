import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import App from './Containers/App';

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('root'));




//import CardList from './CardList';
//import { robots }  from './robots';
//ReactDOM.render(
//    <div>
//        <CardList robots={robots} />
//    </div>,
//    document.getElementById('root'));


//import * as serviceWorker from './serviceWorker';
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Hello greeting={'hello' + ' greetingz'}/>, document.getElementById('root'));
//ReactDOM.render(<h1>Lovely Page!</h1>, document.getElementById('root'));
//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
