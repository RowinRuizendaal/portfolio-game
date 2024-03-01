import { state } from './state'

export const actions = {
    setCanvasContext(context: CanvasRenderingContext2D) {
        state.canvasContext = context
    },
    getCanvasContext() {
        return state.canvasContext
    }
}