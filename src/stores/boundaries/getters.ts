import type { State } from './state'

export const getters = {
  getterBoundariesMap(state: State) {
    return state.boundariesMap
  }
}
