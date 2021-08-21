import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
//styles
import styles from './App.module.scss';
//components
import LandingPage from 'pages/LandingPage/LandingPage';
import NewsStories from 'pages/NewsStories/NewsStories';
//route path
import { LANDING_PATH, STORIES_PATH } from 'utilities/router/routePath';

const App = () => {
  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path={LANDING_PATH} component={LandingPage} />
        <Route exact path={STORIES_PATH} component={NewsStories} />
      </Switch>
    </div>
  );
};

export default App;
