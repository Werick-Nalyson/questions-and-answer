import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Questions from './pages/Questions';
import Answer from './pages/Answer';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Answer} />
                <Route path="/perguntar" component={Questions} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;