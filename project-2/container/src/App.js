import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Header from './components/Header';
import MarketingMfeAppWrapper from './components/MarketingMfeAppWrapper';

const generateClassName = createGenerateClassName({
    productionPrefix: 'cnt'
});

export default () => {

    return (

        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <MarketingMfeAppWrapper />
                </div>
            </StylesProvider>
        </BrowserRouter>


    )
};