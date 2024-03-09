import { reactive } from 'vue'

export interface State {
  w: {
    pressed: boolean
  }
  a: {
    pressed: boolean
  }
  s: {
    pressed: boolean
  }
  d: {
    pressed: boolean
  }
}

export const state: State = reactive({
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  }
})
