import type { State } from './state'

export const getters = {
  isWPressed(state: State) {
    return state.w.pressed
  },
  isAPressed(state: State) {
    return state.a.pressed
  },
  isSPressed(state: State) {
    return state.s.pressed
  },
  isDPressed(state: State) {
    return state.d.pressed
  }
}
