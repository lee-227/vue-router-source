let _Vue
export function install(Vue, options) {
  _Vue = Vue
  Vue.mixin({
    beforeCeate() {
      if (this.$options.router) {
        this._routerRoot = this
        this._router = this.$options.router
        this._router.init(this)
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot
      }
    },
  })
}
