import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from '../pages/Main'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Main} />
                </Switch>
            </BrowserRouter>
        )
    }
}
