import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import MarketingMfeAppWrapper from './components/MarketingMfeAppWrapper';

export default () => {

    return <div>
        <h3> Container App </h3>
        <hr />
        <MarketingMfeAppWrapper />
    </div>
};