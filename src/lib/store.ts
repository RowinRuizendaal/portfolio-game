import { useDialougeStore } from '@/stores/dialouge'
import { useCanvasStore } from '@/stores/canvas'
import { storeToRefs } from 'pinia'

export const dialougeIsActive = () => {
    const store = useDialougeStore();

    const { dialougeIsActive } = storeToRefs(store);

    return dialougeIsActive.value
}

export const getCanvasContext = () => {
    const store = useCanvasStore();
    const canvasContext = store.getCanvasContext();

    if (!canvasContext) {
        return null;
    }

    return canvasContext;

}