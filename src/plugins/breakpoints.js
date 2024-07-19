import { useBreakpoints } from '@vueuse/core'

const breakpointsPlugin = {
  install(app) {
    const { smaller, greater, between, isGreater, isSmaller, isBetween } = useBreakpoints({
      s: 600,
      m: 960,
      l: 1280
    })

    app.config.globalProperties.$breakpoints = {
      smaller,
      greater,
      between,
      isGreater,
      isSmaller,
      isBetween
    }
  }
}

export default breakpointsPlugin
