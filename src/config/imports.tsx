import { matchPath } from 'react-router-dom'
import { Imports } from './interface'

export const layoutUserConfig: Imports.LayoutUserConfig = [
  {
    path: '/user',
    redirect: '/user/login'
  },
  {
    path: '/user/login',
    lazyImport: () => import(
      /* webpackChunkName: 'UserLogin' */
      '@/view/User/Login'
    )
  }
]

export const layoutPageConfig: Imports.LayoutPageConfig = [
  {
    path: '/',
    role: ['2'],
    redirect: '/test'
  },
  {
    path: '/',
    role: ['1'],
    redirect: '/home'
  },
  {
    path: '/exception/404',
    role: ['1', '2'],
    lazyImport: () => import(
      /* webpackChunkName: 'Exception404' */
      '@/view/Exception/404'
    )
  },
  {
    path: '/test',
    role: ['2'],
    lazyImport: () => import(
      /* webpackChunkName: 'Test' */
      '@/view/Test'
    )
  },
  {
    path: '/home',
    role: ['1', '2'],
    lazyImport: () => import(
      /* webpackChunkName: 'Home' */
      '@/view/Home'
    ),
    level: 1,
    index: 0
  },
  {
    path: '/about',
    role: ['1', '2'],
    lazyImport: () => import(
      /* webpackChunkName: 'About' */
      '@/view/About'
    ),
    level: 1,
    index: 1
  },
  {
    path: '/list',
    role: ['1', '2'],
    lazyImport: () => import(
      /* webpackChunkName: 'List' */
      '@/view/List'
    ),
    level: 2
  },
  {
    path: '/tab',
    role: ['1', '2'],
    lazyImport: () => import(
      /* webpackChunkName: 'Tab' */
      '@/view/Tab'
    ),
    level: 2
  },
]

const configs: {
  [path: string]: Imports.Item
} = {}

const matchs: string[] = []

const readImports = (...args: Imports.Config[]) => {
  for (const config of args) {
    for (const item of config) {
      const { path, redirect } = item
      if (redirect === undefined) {
        matchs.push(path)
        configs[path] = item
      }
    }
  }
}

readImports(layoutUserConfig, layoutPageConfig)

export const getConfig = (pathname: string): Imports.Item | undefined => {
  const match = matchPath(pathname, matchs)
  if (match) {
    return configs[match.path]
  }
}
