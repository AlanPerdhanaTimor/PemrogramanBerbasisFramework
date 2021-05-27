import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import BlogPost from "./container/BlogPost/BlogPost";
import App from './App';

ReactDOM.render(<App />, document.getElementById('content'));

serviceWorker.unregister();