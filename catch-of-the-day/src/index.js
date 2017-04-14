// let's go!
import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';

import './css/style.css'
import App from './components/App.jsx'
import NotFound from './components/NotFound.jsx'
import StorePicker from './components/StorePicker.jsx';

const Root = () => {
  return (
  <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={StorePicker} />
      <Match exactly pattern="/store/:storeId" component={App} />
      <Miss component={NotFound}/>
    </div>
  </BrowserRouter>
  )
}

render(<Root />, document.querySelector('#main'));
