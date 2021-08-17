import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
//route history
import history from 'utilities/router/history';
//components
import App from 'pages/App/App';
//styles 
import 'stylesheets/global-styles.scss';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
