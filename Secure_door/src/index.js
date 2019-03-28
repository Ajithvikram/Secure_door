import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import './index.css';
import App from './component/App'
import Dashboard from './component/dashboard';
import Config from './component/config';
import * as serviceWorker from './serviceWorker';

const routing =(
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route Path="/config" component={Config}/>
                <Redirect to='/'/>
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
