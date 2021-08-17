//libs
import React from 'react';
import { Switch } from 'react-router';
//styles
import styles from './App.module.scss';

const App = () => {
    return (
        <div className={styles.container}>
            <p>Hello app</p>
            <Switch>

            </Switch>
        </div>
    );
};

export default App;