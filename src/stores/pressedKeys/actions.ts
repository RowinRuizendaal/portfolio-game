import { state } from './state'


export const actions = {
    setPressedkey(key: keyof typeof state, pressed: boolean) {
        state[key].pressed = pressed;

        return state[key].pressed;
    }
}