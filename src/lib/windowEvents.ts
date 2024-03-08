import { backgroundImageSprite, playerImageSprite, foreground } from '@/lib/drawImages'
import { usePressedKeysStore } from '@/stores/pressedKeys'
import { useBoundariesStore } from '@/stores/boundaries'
import { Boundary } from '@/lib/classes'
import { retangularCollision } from '@/lib/rectangularCollision'
import { dialougeIsActive} from './store'

let lastKey = '';

export const windowEventAnimateFrame = () => {
    window.requestAnimationFrame(windowEventAnimateFrame)

    // draw sprites
    backgroundImageSprite.draw();
    playerImageSprite.draw();
    foreground.draw();

    // get boundaries
    const boundariesMap = useBoundariesStore().getBoundariesMap();

    // set movables
    const movables = [backgroundImageSprite, ...boundariesMap, foreground];


    // todo: refactor this type to be more readable
    boundariesMap.forEach((boundary: any) => {
        new Boundary(boundary).draw();
    })
    

    const pressedKeysStore = usePressedKeysStore();

    const ImageSpritePosition = backgroundImageSprite.position;

    if (!ImageSpritePosition) {
        return;
    }

    // movement
    let moving = true;
    playerImageSprite.moving = false;

    if (pressedKeysStore.isWPressed && lastKey === 'w') {
        playerImageSprite.moving = true;

        if (playerImageSprite.sprites) {
            playerImageSprite.image = playerImageSprite.sprites.up;
        }


        for (let i = 0; i < boundariesMap.length; i++) {
            const boundary = boundariesMap[i];

            if (retangularCollision({ rect1: playerImageSprite, rect2: {...boundary, position: {
                x: boundary.position.x,
                y: boundary.position.y + 3,
            }} })) {
                moving = false;
                break;
            }
        }

        if (moving) {
            movables.forEach((movable) => {
                if (movable && movable.position) {
                    movable.position.y += 3;
                }
            });
        }
    }

    if (pressedKeysStore.isAPressed && lastKey === 'a') {
        playerImageSprite.moving = true;

        if (playerImageSprite.sprites) {
            playerImageSprite.image = playerImageSprite.sprites.left;
        }

        for (let i = 0; i < boundariesMap.length; i++) {
            const boundary = boundariesMap[i];

            if (retangularCollision({ rect1: playerImageSprite, rect2: {...boundary, position: {
                x: boundary.position.x + 3,
                y: boundary.position.y,
            }} })) {
                moving = false;
                break;
            }
        }


        if (moving) {
        movables.forEach((movable) => {
            if (movable && movable.position) {
                movable.position.x += 3;
            }
        });
    }
    }

    if (pressedKeysStore.isSPressed && lastKey === 's') {
        playerImageSprite.moving = true;

        if (playerImageSprite.sprites) {
            playerImageSprite.image = playerImageSprite.sprites.down;
        }

        for (let i = 0; i < boundariesMap.length; i++) {
            const boundary = boundariesMap[i];

            if (retangularCollision({ rect1: playerImageSprite, rect2: {...boundary, position: {
                x: boundary.position.x,
                y: boundary.position.y - 3,
            }} })) {
                moving = false;
                break;
            }
        }

        if (moving) {
        movables.forEach((movable) => {
            if (movable && movable.position) {
                movable.position.y -= 3;
            }
        });
    }
    }

    if (pressedKeysStore.isDPressed && lastKey === 'd') {
        playerImageSprite.moving = true;

        if (playerImageSprite.sprites) {
            playerImageSprite.image = playerImageSprite.sprites.right;
        }

        for (let i = 0; i < boundariesMap.length; i++) {
            const boundary = boundariesMap[i];

            if (retangularCollision({ rect1: playerImageSprite, rect2: {...boundary, position: {
                x: boundary.position.x - 3,
                y: boundary.position.y,
            }} })) {
                moving = false;
                break;
            }
        }

        if (moving) {
        movables.forEach((movable) => {
            if (movable && movable.position) {
                movable.position.x -= 3;
            }
        });
    }
    }
}



export const windowEventKeyDown = () => {
    const pressedKeysStore = usePressedKeysStore();

    window.addEventListener('keydown', (event) => {

        if (dialougeIsActive()) {
            return;
        }

        const { key } = event;

        switch (key) {
            case 'w':
            pressedKeysStore.setPressedkey('w', true)
            lastKey = 'w';
            break;

            case 'a':
            pressedKeysStore.setPressedkey('a', true)
            lastKey = 'a';
            break;

            case 's':
            pressedKeysStore.setPressedkey('s', true)
            lastKey = 's';
            break;

            case 'd':
            pressedKeysStore.setPressedkey('d', true)
            lastKey = 'd';
            break;
        }
    })
}

export const windowEventKeyUp = () => {
    const pressedKeysStore = usePressedKeysStore();
    window.addEventListener('keyup', (event) => {

        if (dialougeIsActive()) {
            return;
        }

        const { key } = event;

        switch (key) {
            case 'w':
            pressedKeysStore.setPressedkey('w', false)
            break;

            case 'a':
            pressedKeysStore.setPressedkey('a', false)
            break;

            case 's':
            pressedKeysStore.setPressedkey('s', false)
            break;

            case 'd':
            pressedKeysStore.setPressedkey('d', false)
            break;
        }
    })
}



