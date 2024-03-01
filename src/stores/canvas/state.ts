import { reactive } from "vue";

export interface State {
    canvasContext: CanvasRenderingContext2D | null;
}

export const state: State = reactive({
    canvasContext: null,
});