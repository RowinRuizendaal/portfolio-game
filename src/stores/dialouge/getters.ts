import type { State } from './state'

export const getters = {
    GetterDialougeIsActive(state: State) {
        return state.dialougeIsActive
    }
}