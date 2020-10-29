export default class History {
  constructor(router) {
    this.router = router
  }
  transitionTo(location, cb) {
    console.log(location)

    cb && cb()
  }
}
