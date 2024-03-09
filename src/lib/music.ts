import { Howl } from 'howler'

export const music = {
  Map: new Howl({
    src: 'background-music.mp3',
    loop: true,
    html5: true,
    volume: 0.5,
  }),
  TextBox: new Howl({
    src: 'text-box-sound.wav',
    html5: true,
    volume: 1
  })
}
