import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Task from './components/task/task';
import List from './components/list/list';

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