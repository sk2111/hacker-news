import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
//styles
import styles from './App.module.scss';
//components
import LandingPage from 'pages/LandingPage/LandingPage';

const App = () => {
    return (
        <div className={styles.container}>
            <Switch>
                <Route exact path="/" component={LandingPage} />
            </Switch>
        </div>
    );
};

export default App;