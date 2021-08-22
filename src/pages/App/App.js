import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
//styles
import styles from './App.module.scss';
//components
import LandingPage from 'pages/LandingPage/LandingPage';
import NewsStories from 'pages/NewsStories/NewsStories';
import StoryDetail from 'pages/StoryDetail/StoryDetail';
//route path
import {
  LANDING_PATH,
  STORIES_PATH,
  STORY_DETAIL_PATH,
} from 'utilities/router/routePath';

const App = () => {
  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path={LANDING_PATH} component={LandingPage} />
        <Route exact path={STORIES_PATH} component={NewsStories} />
        <Route exact path={STORY_DETAIL_PATH} component={StoryDetail} />
      </Switch>
    </div>
  );
};

export default App;
