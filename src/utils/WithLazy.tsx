import { useLocation } from 'react-router-dom'
import { getConfig } from '@/config/imports'

const Components: {
  [pathname: string]: ComponentType<any>
} = {
}

const load = (pathname: string): Promise<ComponentType<any> | void> => {
  const callback = getConfig(pathname)?.lazyImport
  if (typeof callback === 'function') {
    return callback().then(res => {
      const Component = res.default
      Components[pathname] = Component
      return Component
    })
  }
  return Promise.resolve()
}

export function preload(pathname: string): Promise<any> {
  if (!Components[pathname]) {
    return load(pathname)
  }
  return Promise.resolve()
}

export default memo(() => {
  const location = useLocation()
  const { pathname } = location
  const [Component, setComponent] = useState<ComponentType<any> | void>(Components[pathname])

  useEffect(() => {
    if (!Component) {
      load(pathname).then(Component => {
        setComponent(Component)
      })
    }
  }, [])

  return Component ? <Component /> : null
}) as FC<{}>
