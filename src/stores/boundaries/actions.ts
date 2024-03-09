import { state } from './state'

export const actions = {
  setBoundariesMap(boundariesMap: []) {
    return (state.boundariesMap = boundariesMap)
  },
  getBoundariesMap() {
    return state.boundariesMap
  }
}
