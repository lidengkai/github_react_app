import { createHashHistory, Action } from 'history'
import store, { globalCommit, GlobalStore } from '@/store'
import { getConfig } from '@/config/imports'
import { preload } from '@/utils/WithLazy'

const getAnimationType = (from: string, to: string, action: Action): GlobalStore['animationType'] => {
  const toConfig = getConfig(to)
  const fromConfig = getConfig(from)
  const toLevel = toConfig?.level || 0
  const fromLevel = fromConfig?.level || 0
  const toIndex = toConfig?.index || 0
  const fromIndex = fromConfig?.index || 0
  if (toLevel === 1 && fromLevel === 1) {
    if (toIndex > fromIndex) {
      return 'followRightInto'
    }
    if (toIndex < fromIndex) {
      return 'followLeftInto'
    }
  }
  if (action === 'POP') {
    if (fromLevel === 2) {
      return 'rightLeave'
    }
  } else {
    if (toLevel === 2) {
      return 'rightInto'
    }
  }
  return ''
}

const history = createHashHistory({
  getUserConfirmation: (pathname, done) => {
    preload(pathname).then(_ => {
      done(true)
    })
  }
})

history.block((to, action) => {
  const animationType = getAnimationType(history.location.pathname, to.pathname, action)
  store.dispatch(globalCommit({ animationType, animationIng: true }))
  return to.pathname
})

export default history
