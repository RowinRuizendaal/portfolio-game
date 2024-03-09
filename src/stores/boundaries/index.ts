import { defineStore } from 'pinia'
import { state } from './state'
import { getters } from './getters'
import { actions } from './actions'

export const useBoundariesStore = defineStore('BoundariesStore', {
  state: () => state,
  getters,
  actions
})
