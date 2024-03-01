export const debug = false;

export const canvasSizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

// need to fix this
export const offset = {
    x: canvasSizes.width > 1000 ? -300 : -1000,
    y: -450,
}

export const tiledMapWidth = 70;
