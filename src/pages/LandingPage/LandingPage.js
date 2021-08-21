import React from 'react';
//styles
import styles from './LandingPage.module.scss';
//assests
import { ReactComponent as HackerNewsLogo } from 'assests/hackerEarth.svg';
import Button from 'components/Button/Button';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <HackerNewsLogo className={styles.leftLogo} />
      </div>
      <div className={styles.rightSection}>
        <div className={styles.titleContainer}>
          <h6 className={styles.title}>Welcome to Hacker News!</h6>
          <Button>Explore more !</Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
