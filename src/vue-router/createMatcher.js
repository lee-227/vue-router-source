import { createRouteMap } from './createRouteMap'
export function createMatcher(routes) {
  let { pathMap } = createRouteMap(routes)
  function addRoutes(routes) {
    createRouteMap(routes, pathMap)
  }
  function match(path) {}
  return {
    addRoutes,
    match,
  }
}
