import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { LOGIN_PATH, INDEX_PATH, NOT_FIND_PATH } from '@/router/constants'
import constanstsRoutes from '@router/routes'
import { getToken } from '@/utils/token'

function BaseRoute({ route, isRedirect }) {
  console.log(route)
  return isRedirect ?
    <Redirect { ...route } /> :
    <Route { ...route } />
}

const loginRoute = constanstsRoutes.find(route => {
  return route.path === LOGIN_PATH
})

const notFindRoute = constanstsRoutes.find(route => {
  return route.path === NOT_FIND_PATH
})

const indexRoute = constanstsRoutes.find(route => {
  return route.path === INDEX_PATH
})

const AuthRoute = ({ routes }) => {
  const { pathname } = useLocation()

  const toRoute = routes.find(route => route.path === pathname)

  const isLogin = getToken()

  if (toRoute && !toRoute.auth && !isLogin) {
    return <Route exact path={pathname} component={toRoute.component} />
  }

  if (isLogin) {
    if (pathname === LOGIN_PATH) {
      return <BaseRoute route={indexRoute} isRedirect />
    } else {
      if (toRoute) {
        return <BaseRoute route={toRoute} />
      } else {
        return <BaseRoute route={notFindRoute} isRedirect />
      }
    }
  } else {
    if (toRoute && toRoute.auth) {
      return <BaseRoute route={loginRoute} isRedirect />
    } else {
      return <BaseRoute route={notFindRoute} isRedirect />
    }
  }
}

export default AuthRoute
