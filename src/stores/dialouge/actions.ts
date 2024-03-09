import { state } from './state'

export const actions = {
  toggleDialouge() {
    state.dialougeIsActive = !state.dialougeIsActive
  }
}
