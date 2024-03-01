import { Howl } from 'howler';

export const music = {
    Map: new Howl({
        src: 'backgroundMusic.wav',
        loop: true,
        html5: true,
        volume: 0.5,
    }),
}