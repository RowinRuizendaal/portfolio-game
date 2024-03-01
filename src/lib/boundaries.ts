import { collisions } from '@/lib/collisions'
import { Boundary } from '@/lib/classes'
import { useBoundariesStore } from '@/stores/boundaries'
import { offset, tiledMapWidth } from '@/lib/constants'

export const generateBoundaries = () => {
    const collisionsMap = []

    for (let i = 0; i < collisions.length; i+= tiledMapWidth) {
        collisionsMap.push(collisions.slice(i, tiledMapWidth + i))
    }    

    // get the current boundaries from the store
    const boundariesMap = useBoundariesStore().getBoundariesMap()

    collisionsMap.forEach((row, i) => {
        row.forEach((symbol, j) => {
            // symbol 1025 is the boundary
            if (symbol === 1025) {
                boundariesMap.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width + offset.x,
                            y: i * Boundary.height + offset.y,
                        }
                    })
                )
            }
        })
    })

    // update the store with the new boundaries
    useBoundariesStore().setBoundariesMap(boundariesMap)
    
}






