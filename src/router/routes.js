import React from 'react'

const Login = React.lazy(() => import('@/views/Login'))
const Index = React.lazy(() => import('@/views/Index'))
const NotFind = React.lazy(() => import('@/views/NotFind'))

export default [
  { path: '/', to: '/', name: 'Index', component: Index, auth: true },
  { path: '/login', to: '/login', name: 'Login', component: Login },
  { path: '/404', to: '/404', name: '404', component: NotFind }
]
