import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Header from './components/Header';

import MarketingMfeAppWrapper from './components/MarketingMfeAppWrapper';
import AuthMfeAppWrapper from './components/AuthMfeAppWrapper';

const generateClassName = createGenerateClassName({
    productionPrefix: 'cnt'
});

export default () => {

    return (

        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/auth" component={AuthMfeAppWrapper} />
                        <Route path="/" component={MarketingMfeAppWrapper} />
                    </Switch>
                </div>
            </StylesProvider>
        </BrowserRouter>


    )
};