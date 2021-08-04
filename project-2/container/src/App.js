import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import MarketingMfeAppWrapper from './components/MarketingMfeAppWrapper';

export default () => {

    return (
        <BrowserRouter>
            <div>
                <Header />
                <MarketingMfeAppWrapper />
            </div>
        </BrowserRouter>
    )
};