import React from 'react'
import {connect} from 'react-redux'
import {Switch, Route, withRouter} from 'react-router-dom'

import AuthPage from '../pages/AuthPage'
import TestPage from '../pages/TestPage'
import HomePage from '../pages/HomePage'

const RouteViews = ({auth}) => (
    <main>
        <Switch>
            <Route
            exact
            path="/"
            render={() =>
            <HomePage />
            }
            />
            <Route
            exact
            path="/login"
            render={() => (
                <AuthPage authType="login" isAuthenticated={auth.isAuthenticated} />
            )}
            />
            <Route
            exact
            path="/register"
            render={() => (
                <AuthPage
                authType="register"
                isAuthenticated={auth.isAuthenticated}
                />
            )}
            />
            <Route exact path="/test" render={() => <TestPage />} />
        </Switch>
    </main>
)

export default withRouter(connect(store => ({ auth: store.auth}))(RouteViews))