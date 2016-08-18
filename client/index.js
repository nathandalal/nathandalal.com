import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

require('./styles/app.scss')

import LandingPage from './components/landing-page'
import BlogView from './components/blog-view'

render(
    <Router history={browserHistory}>
        <Route path="/">
            <IndexRoute component={LandingPage} />
            <Route path="blog">
                <IndexRoute component={BlogView} />
            </Route>
        </Route>
    </Router>,
    document.getElementById('app')
)


