import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import LoginScreen from '../screens/Login'
import HomeScreen from '../screens/Home'

export const Routes = () => (
    <div>
        <Router>
            <Switch>
                <Route exact path = "/login" component = {LoginScreen} />
                <Route exact path = "/" component = {HomeScreen} />
            </Switch>
        </Router>
    </div>
)