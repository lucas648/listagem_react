import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Task from './components/Task/Task';
import List from './components/List/List';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Task} />
                <Route path="/list-tasks" component={List} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;