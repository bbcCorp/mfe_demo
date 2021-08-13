import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
// // This will cause eager loading of components
// import MarketingMfeAppWrapper from './components/MarketingMfeAppWrapper';
// import AuthMfeAppWrapper from './components/AuthMfeAppWrapper';

const LazyLoadMarketingApp = lazy(() => import('./components/MarketingMfeAppWrapper'));
const LazyLoadAuthApp = lazy(() => import('./components/AuthMfeAppWrapper'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'cnt'
});

export default () => {

    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <Suspense fallback={<ProgressBar />} >
                        <Switch>
                            <Route path="/auth" component={LazyLoadAuthApp} />
                            <Route path="/" component={LazyLoadMarketingApp} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
};