import Home from '../pages/home'
import Login from '../pages/auth/Login'
import Featured from '../pages/featured'

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
