import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { getUserToken } from 'services/utils/storage'

function PrivateRoute ({
  component: Component, title, redirect, ...rest
}) {
  let login = getUserToken()
  return redirect ? (
    <Redirect from={rest.path}
      to={rest.redirectTo}
      render={(props) => (
        <>
          <Component {...props} />
        </>
      )}
    />
  ) : (
    <Route
      {...rest}
      render={(props) => (login ? (
        <>
          <Component {...props} />
        </>
      ) : (
        <Redirect
          to={{
            pathname: '/admin/login',
            state: { from: props.location }
          }}
        />
      ))}
    />
  )
}

function AuthRoute ({
  component: Component, title, redirect, ...rest
}) {
  let login = getUserToken()
  return (
    <Route
      {...rest}
      render={(props) => (!login ? (
        <>
          <Component {...props} />
        </>
      ) : (
        <Redirect
          to={{
            pathname: '/admin',
            state: { from: props.location }
          }}
        />
      ))}
    />
  )
}

function PublicRoute ({
  component: Component, title, redirect, ...rest
}) {
  return redirect ? (
    <Redirect from={rest.path}
      to={rest.redirectTo}
      render={(props) => (
        <>
          <Component {...props} />
        </>
      )}
    />
  ) : (
    <Route {...rest}
      render={(props) => (
        <>
          <Component {...props} />
        </>
      )}
    />
  )
}

export { PrivateRoute, AuthRoute, PublicRoute }
