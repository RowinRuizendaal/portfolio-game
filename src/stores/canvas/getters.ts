import type { State } from './state'

export const getters = {
    GettercanvasContext(state: State) {
        return state.canvasContext
    }
}