import { isMobile } from "./utils";

export const offset = {
    x: isMobile() ? -700 : -300,
    y: -450,
};

export const canvasWidth = window.innerWidth;
export const canvasHeight = window.innerHeight;

export let canvas = {
    width: window.innerWidth,
    height: window.innerHeight,
};