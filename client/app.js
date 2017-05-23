import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/ItemList';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { baseUrl } from './components/common-components/common';
import Main from './components/Main.component';
import UserList from './components/UserList';
import DetailComponent from './components/DetailComponent';
var injectTapEventPlugin = require("react-tap-event-plugin");

const store = configureStore();
//here sending empty initialstates
injectTapEventPlugin();

render(
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ UserList } />
          <Route path="view/:login" component={ DetailComponent } />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
);
