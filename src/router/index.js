import React from 'react'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'

import ScrollToTop from '../components/utils/ScrollToTop'
import { AuthRoute, PrivateRoute } from './middleware'
import { authRoute, routes } from './web'

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        {authRoute.map((props, index) => (
          <AuthRoute key={index} {...props} />
        ))}

        {routes.map((props, index) => {
          const { auth, ...other } = props
          return auth && <PrivateRoute key={index} {...other} />
        })}

        <Redirect from="/tournaments" to="/tournaments/search?page=1" />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
