import { reactive } from "vue";

export interface State {
    dialougeIsActive: boolean;
}

export const state: State = reactive({
    dialougeIsActive: true,
});