import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import ProgressBar from './components/ProgressBar';


// // This will cause eager loading of components
// import MarketingMfeAppWrapper from './components/MarketingMfeAppWrapper';
// import AuthMfeAppWrapper from './components/AuthMfeAppWrapper';

const LazyLoadMarketingApp = lazy(() => import('./components/MarketingMfeAppWrapper'));
const LazyLoadAuthApp = lazy(() => import('./components/AuthMfeAppWrapper'));
const LazyLoadDashboardApp = lazy(() => import('./components/DashboardMfeAppWrapper'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'cnt'
});

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {

        if (isSignedIn) {
            history.push('/dashboard');
        }

    }, [isSignedIn]);

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                    <Suspense fallback={<ProgressBar />} >
                        <Switch>
                            <Route path="/auth" >
                                <LazyLoadAuthApp onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/dashboard">
                                {!isSignedIn && <Redirect to="/" />}
                                <LazyLoadDashboardApp />
                            </Route>
                            <Route path="/" component={LazyLoadMarketingApp} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    )
};