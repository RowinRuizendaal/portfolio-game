import { reactive } from "vue";

export interface State {
    // need to refactor this to be more specific
    boundariesMap: [] | any;
}

export const state: State = reactive({
    boundariesMap: []
});