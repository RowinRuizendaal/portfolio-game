import type { Boundary, Sprite } from "./classes";

type RectangularCollisionProperties = {
    rect1: Sprite;
    rect2: Boundary;

}

export const retangularCollision = ({ rect1, rect2 }: RectangularCollisionProperties) => {
    // maybe refactor this to be more readable
    if (!rect1.position || !rect2.position || !rect1.image || !rect2.width || !rect2.height || !rect2.position || !rect2.position.x || !rect2.position.y || !rect1.position.x || !rect1.position.y || !rect1.heigth || !rect2.position.x || !rect2.position.y || !rect2.width || !rect2.height || !rect1.width) {
        return false;
    }

    return (
        rect1.position.x + rect1.width >= rect2.position.x && 
        rect1.position.x <= rect2.position.x + rect2.width &&
        rect1.position.y <= rect2.position.y + rect2.height &&
        rect1.position.y + rect1.heigth >= rect2.position.y
    );
}