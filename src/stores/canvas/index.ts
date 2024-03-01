import { defineStore } from 'pinia';
import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';

export const useCanvasStore = defineStore('canvas', {
  state: () => state,
  getters,
  actions,
});