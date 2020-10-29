import { install } from './install'
import { createMatcher } from './createMatcher'
import HashHistory from './history/hash'
import BrowserHistory from './history/history'
export default class VueRouter {
  constructor(options) {
    this.matcher = createMatcher(options.routes || [])
    switch (options.mode) {
      case 'hash':
        this.history = new HashHistory(this)
        break
      case 'history':
        this.history = new BrowserHistory(this)
        break
    }
  }
  init(app) {
    const history = this.history
    const setupHashListener = () => {
      history.setupListener()
    }
    history.transitionTo(history.getCurrentLocation(), setupHashListener)
  }
}
VueRouter.install = install
