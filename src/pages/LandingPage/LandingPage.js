import React from 'react';
import { useHistory } from 'react-router-dom';
//styles
import styles from './LandingPage.module.scss';
//assests
import { ReactComponent as HackerNewsLogo } from 'assests/hackerEarth.svg';
import Button from 'components/Button/Button';
//route path
import { STORIES_PATH } from 'utilities/router/routePath';

const LandingPage = () => {
  const history = useHistory();

  const routeToStories = () => {
    history.push(STORIES_PATH);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <HackerNewsLogo className={styles.leftLogo} />
      </div>
      <div className={styles.rightSection}>
        <div className={styles.titleContainer}>
          <h6 className={styles.title}>Welcome to Hacker News!</h6>
          <Button onClick={routeToStories}>Explore more !</Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
