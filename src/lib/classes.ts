import { getCanvasContext } from './store'
import { debug } from '@/lib/constants'
import { playerDownImage, playerLeftImage, playerRightImage, playerUpImage } from '@/lib/images'

type SpriteProperties = {
    position?: {
        x: number;
        y: number;
    }
    velocity?: {
        x: number;
        y: number;
    }
    image?: HTMLImageElement;
    frames?: {
        max: number;
        val: number;
        elapsed: number;
    },
    width?: number;
    height?: number;
    moving?: boolean;
    sprites?: {
        up: HTMLImageElement
        down: HTMLImageElement
        left: HTMLImageElement
        right: HTMLImageElement
    }
}

export class Sprite {
    velocity?: SpriteProperties['velocity'];
    position?: SpriteProperties['position'];
    image?: SpriteProperties['image'];
    frames?: SpriteProperties['frames'];
    width: SpriteProperties['width'];
    heigth: SpriteProperties['height'];
    moving: SpriteProperties['moving'];
    sprites: SpriteProperties['sprites'];
    constructor({
        position, 
        velocity, 
        image, 
        frames = { max: 1, val: 0, elapsed: 0 }, 
        sprites = {
        up: playerUpImage,
        down: playerDownImage,
        left: playerLeftImage,
        right: playerRightImage,
    } }: SpriteProperties) {
        this.position = position;
        this.velocity = velocity;
        this.image = image;
        this.frames = {...frames, val: 0, elapsed: 0};

        if (!this.image) {
            return;
        }

        this.image.onload = () => {
            if (!this.image || !this.frames) {
                return;
            }

            this.width = this.image?.width / this.frames.max;
            this.heigth = this.image?.height;
        }

        this.moving = false;
        this.sprites = sprites;
        
    }

    draw() {
        const canvasContext = getCanvasContext();

        const image = this.image ?? new Image();
        const xPosition = this.position?.x ?? 0;
        const yPosition = this.position?.y ?? 0;
        const frames = this.frames ?? { max: 1, val: 0, elapsed: 0};
        const width = this.width ?? 0;
        const moving = this.moving ?? false;

        canvasContext?.drawImage(
            image,
            frames.val * width,
            0,
            image.width / frames.max,
            image.height,
            xPosition,
            yPosition,
            image.width / frames.max,
            image.height
        )
    
        if (!moving) {
            return;
        }

        if (frames.max > 1) {
            frames.elapsed++;
        }

        if (frames.elapsed % 10 === 0) {
            if (frames.val < frames.max - 1) {
                frames.val++;
            } else {
                frames.val = 0;
            }
        }
    }
}


type BoundaryProperties = {
    position?: {
        x: number;
        y: number;
    },
    width?: number;
    height?: number;
}


export class Boundary {
    position: BoundaryProperties['position'];
    width: BoundaryProperties['width'];
    height: BoundaryProperties['height'];
    static width = 48;
    static height = 48;
    constructor({ position }: BoundaryProperties) {
        this.position = position;
        this.width = 48;
        this.height = 48;
    }

    draw() {
        const canvasContext = getCanvasContext();

        const xPosition = this.position?.x ?? 0;
        const yPosition = this.position?.y ?? 0;
        const width = this.width ?? 0;
        const height = this.height ?? 0;

        if (!canvasContext) {
            return;
        }

        if (debug) {
            canvasContext.fillStyle = 'red';
            canvasContext?.fillRect(xPosition, yPosition, width, height);
        }
    }
}

