import { Sprite } from '@/lib/classes'
import { canvasSizes, offset } from '@/lib/constants'
import {
  backgroundImage,
  playerDownImage,
  foregroundImage,
  playerLeftImage,
  playerRightImage,
  playerUpImage
} from '@/lib/images'

export const backgroundImageSprite = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: backgroundImage
})

export const foreground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: foregroundImage
})

export const playerImageSprite = new Sprite({
  position: {
    x: canvasSizes.width / 2 - 192 / 4 / 2,
    y: canvasSizes.height / 2 - 68 / 2
  },
  image: playerDownImage,
  frames: {
    max: 4,
    val: 1,
    elapsed: 0
  },
  sprites: {
    up: playerUpImage,
    down: playerDownImage,
    left: playerLeftImage,
    right: playerRightImage
  }
})
