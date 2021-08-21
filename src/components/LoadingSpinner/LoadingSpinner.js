import React from 'react';
//styles
import styles from './LoadingSpinner.module.scss';
//assest
import { ReactComponent as Spinner } from 'assests/loadingSpinner.svg';

const LoadingSpinner = ({ className }) => {
  return (
    <div className={styles.loadSpinner}>
      <Spinner className={className} />
    </div>
  );
};

export default LoadingSpinner;
