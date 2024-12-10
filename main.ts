tiles.setCurrentTilemap(tilemap`legel1`)
let mySprite3 = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 c f . . . . 
    . . . f 1 c c c c c 1 c f . . . 
    . . . f c c f f f f c 1 f . . . 
    . . . f c f f d d f f c f . . . 
    . . f c f d f d d f d f c f . . 
    . . f c f d 3 d d 3 d f c f . . 
    . . f c c f d d d d f c c f . . 
    . f c c f 6 f f f f 6 f c c f . 
    . . f f d 6 3 6 6 3 6 d f f . . 
    . . f d d f 6 3 3 6 f d d f . . 
    . . . f f 6 6 6 6 6 6 f f . . . 
    . . . f 6 6 3 6 6 3 6 6 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite3)
scene.cameraFollowSprite(mySprite3)
