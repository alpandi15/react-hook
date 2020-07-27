import Home from '../pages/home'
import Login from '../pages/auth/Login'
import Featured from '../pages/featured'
import Register from '../pages/auth/Register'

const authRoute = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/register',
    exact: true,
    component: Register
  },
  {
    path: '/featured',
    exact: true,
    component: Featured
  }
]

const routes = []

export {
  authRoute,
  routes
}
