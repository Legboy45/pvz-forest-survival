namespace SpriteKind {
    export const HUD = SpriteKind.create()
    export const Seed = SpriteKind.create()
    export const Dirt = SpriteKind.create()
}
namespace StatusBarKind {
    export const Hunger = StatusBarKind.create()
}
/**
 * regen stamina
 */
function Toolbar () {
    toolbar = Inventory.create_toolbar([], 4)
    toolbar.set_color(ToolbarColorAttribute.BoxBackground, 14)
    toolbar.set_color(ToolbarColorAttribute.BoxSelectedOutline, 5)
    toolbar.set_color(ToolbarColorAttribute.BoxOutline, 15)
    toolbar.setFlag(SpriteFlag.RelativeToCamera, true)
    toolbar.setPosition(80, 108)
    toolbar.z = 98
    All_Seeds = [
    Inventory.create_item("Peashooter Seeds", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f . . . . . 
        . . . . . . . . . f f . . . . . 
        . . . . . . . . f 7 f . . . . . 
        . . . . . . f f 7 f f . . . . . 
        . . . . . f 7 7 6 f . . . . . . 
        . . . . . f 7 7 6 f . . . . . . 
        . . . . . f 6 6 f . . . . . . . 
        . . . . . . f f . . . . . f . . 
        . . f f f . . . . . . . f 7 f . 
        . f f 7 f f . . . . f f 7 f f . 
        . . f 7 7 f f . . f 7 7 6 f . . 
        . . f f 7 6 f . . f 6 6 f . . . 
        . . . f 6 f f . . . f f . . . . 
        . . . f f f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("Sunflower Seeds", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f f f . . . 
        . . . . . . . . . f 5 5 4 f . . 
        . . . . . . . . . f 5 5 4 f . . 
        . . . . . . . . . f 4 4 4 f . . 
        . . . f . . . . . . f f f . . . 
        . . f 5 f . . . . . . . . . . . 
        . f 5 5 4 f . . f f . . . . . . 
        . . f 4 f . . . f 5 f . . . . . 
        . . . f . . . . f 5 4 f . . . . 
        . . . . . . . f 5 5 4 f . . . . 
        . . . . . . . . f 5 4 f . . . . 
        . . . . . . . . f 4 4 f . . . . 
        . . . . . . . . f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("Snowpea Seeds", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f . . . . . 
        . . . . . . . . . f f . . . . . 
        . . . . . . . . f 9 f . . . . . 
        . . . . . . f f 9 f f . . . . . 
        . . . . . f 9 9 6 f . . . . . . 
        . . . . . f 9 9 6 f . . . . . . 
        . . . . . f 6 6 f . . . . . . . 
        . . . . . . f f . . . . . f . . 
        . . f f f . . . . . . . f 9 f . 
        . f f 9 f f . . . . f f 9 f f . 
        . . f 9 9 f f . . f 9 9 6 f . . 
        . . f f 9 6 f . . f 6 6 f . . . 
        . . . f 6 f f . . . f f . . . . 
        . . . f f f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("Melonpult Seeds", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f . . . . . . . . 
        . f f 6 7 6 7 f f . . . . . . . 
        . f 7 6 7 6 7 7 f . . . . . . . 
        . f 7 6 7 6 7 7 f . . . . . . . 
        . f f 6 7 6 7 f f . . . . . . . 
        . . f f f f f f . . . . . . . . 
        . . . . . . . . f f f f f f . . 
        . . . . . . f f f 6 7 6 7 f f . 
        . . . . . . f 6 7 6 7 6 7 7 f . 
        . . . . . . f 6 7 6 7 6 7 7 f . 
        . . . . . . f 6 7 6 7 6 7 f f . 
        . . . . . . . f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ]
    All_Tools = [
    Inventory.create_item("Shovel", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f . . . . 
        . . . . . . . . . . f e f . . . 
        . . . . . . . . . . . f e f . . 
        . . . . . . . . . . f e f e f . 
        . . . . . . . . . f e f . f . . 
        . . . . . . . . f e f . . . . . 
        . . . . f f . f e f . . . . . . 
        . . . f b b f e f . . . . . . . 
        . . f b b b b f . . . . . . . . 
        . . f b b b b b f . . . . . . . 
        . . f b b b b b f . . . . . . . 
        . . . f b b b f . . . . . . . . 
        . . . . f f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("Axe", img`
        . . . . . . . . . . . f f . . . 
        . . . . . . . . . . f e f . . . 
        . . . . . . . . . . f e f . . . 
        . . . . . . . . . . f e f . . . 
        . . . . . . . . . f e f . . . . 
        . . . . . . . . . f e f . . . . 
        . . . . . . . . . f e f . . . . 
        . . . . . . . . f e f . . . . . 
        . . . f . . . . f e f . . . . . 
        . . f 1 f f . . f e f . . . . . 
        . . f 1 2 2 f f e f . . . . . . 
        . . f 1 2 2 2 2 e f . . . . . . 
        . . f 1 2 2 2 2 e f . . . . . . 
        . . f 1 2 2 2 2 e f . . . . . . 
        . . f 1 2 2 2 2 e f . . . . . . 
        . . . f f f f f f . . . . . . . 
        `),
    Inventory.create_item("Watering Can", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f . . . . . 
        . f f f . . . f f f f f f . . . 
        f c c f . . f f f . . f f f . . 
        f c 6 f . . f f . . . . . f f . 
        f f 6 6 f . f f f f f f . f f . 
        . . f 6 6 f 6 6 6 6 6 6 f f f . 
        . . . f 6 6 6 6 6 6 6 6 6 f . . 
        . . . . f 6 6 6 6 6 6 6 6 f . . 
        . . . . f 6 6 6 6 6 6 6 6 f . . 
        . . . . f 6 6 6 6 6 6 6 6 f . . 
        . . . . f 6 6 6 6 6 6 6 6 f . . 
        . . . . f 6 6 6 6 6 6 6 6 f . . 
        . . . . . f 6 6 6 6 6 6 f . . . 
        . . . . . . f f f f f f . . . . 
        `),
    Inventory.create_item("Medkit", img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 1 1 2 2 1 1 1 f . . . 
        . . . f 1 1 1 2 2 1 1 1 f . . . 
        . . . f 1 2 2 2 2 2 2 1 f . . . 
        . . . f 1 2 2 2 2 2 2 1 f . . . 
        . . . f 1 1 1 2 2 1 1 1 f . . . 
        . . . f 1 1 1 2 2 1 1 1 f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f b b b b b b b b f . . . 
        . . . f b b b b b b b b f . . . 
        . . . f b b b b b b b b f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ]
    All_Plants = [
    Inventory.create_item("Peashooter", img`
        . f . . . . . . . . . . . . . . 
        f 7 f f f f f f f . . . . . . . 
        f f f f 7 7 7 7 7 f . f f f . . 
        f . f 7 7 7 7 7 f 7 f 7 7 7 f . 
        . . f 7 7 7 f 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 f 7 7 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 7 7 f . 
        . . . f 7 7 7 7 7 f . f f f . . 
        . . . . f f f f f . . . . . . . 
        . . . . . f 6 f . . . . . . . . 
        . . . . . f 6 f . . . . . . . . 
        . . . . . f 6 f . . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . f f . f 6 f . f f . . . . 
        . . f 6 6 f f 6 f f 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 f . . . . 
        `),
    Inventory.create_item("Sunflower", img`
        . . . . . f f f . f f . . . . . 
        . . . . f 5 5 5 f 5 5 f . . . . 
        . . f f f f f f f f f f f . . . 
        . f 5 5 f e e e e e e f 5 f . . 
        . f 5 f e e f e e f e e f 5 f . 
        . . f f e e f e e f e e f 5 f . 
        . f 5 f e f e e e e f e f f . . 
        . f 5 f e e f f f f e e f 5 f . 
        . . f f f e e e e e e f 5 f . . 
        . . . f 5 f f f f f f f f . . . 
        . . . . f 5 f 6 6 f 5 f . . . . 
        . . . . . f f 6 6 f f . . . . . 
        . . . . . . f 6 6 f . . . . . . 
        . . . . f f f 6 6 f f f . . . . 
        . . . f 6 6 f 6 6 f 6 6 f . . . 
        . . . . f 6 6 6 6 6 6 f . . . . 
        `),
    Inventory.create_item("Snowpea", img`
        . f f . . . . . . . . . . . . . 
        . f 9 f f f f f f . . . . . . . 
        . . f f 9 9 9 9 9 f . f f f . . 
        . . f 9 9 9 9 9 f 9 f 9 9 9 f . 
        . . f 9 9 9 f 9 f 9 9 9 f 9 f . 
        . . f 9 9 9 f 9 9 9 9 9 f 9 f . 
        . . f 9 9 9 9 9 9 9 f 9 9 9 f . 
        . . . f 9 9 9 9 9 f . f f f . . 
        . . . . f f f f f . . . . . . . 
        . . . . . f 6 f . . . . . . . . 
        . . . . . f 6 f . . . . . . . . 
        . . . . . f 6 f . . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . f f . f 6 f . f f . . . . 
        . . f 6 6 f f 6 f f 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 f . . . . 
        `),
    Inventory.create_item("Melonpult", img`
        . . . . . . . . . . f f f . . . 
        . . . . . . . . . f 7 6 6 f . . 
        . . . . . . . . f 6 6 7 6 6 f . 
        . . . . . . . . f 7 6 6 7 f e f 
        . . . . . . . . f f 7 7 f e e f 
        . . . . . . . . . . f f e e e f 
        . . . . . . . . . . . f e e f . 
        . . . . . . . . . . . f e e f . 
        . . . . . . . . . . f e e e f . 
        . . . . . . . . . f e e e f . . 
        . . . . f f f f f f f f f . . . 
        . . . f 7 6 7 6 6 7 6 7 f . . . 
        . . f 7 6 1 f 6 6 1 f 6 7 f . . 
        . . f 7 6 f f 6 6 f f 6 7 f . . 
        . . f 7 6 f f 6 6 f f 6 7 f . . 
        . . . f 7 6 7 6 6 7 6 7 f . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ]
    All_Materials = [
    Inventory.create_item("Wood", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f . . . . . . . . . . . 
        f e e e e f f f f . . . . . . . 
        f e c c e e e e e f f f . . . . 
        f e e e e e e e e e e f f f f . 
        f e e e e e e c c e f b b b b f 
        . f f f e e e e e e f b b b b f 
        . . . . f f f f e e f b b b b f 
        . . . . . . . . f f f b b b b f 
        . . . . . . . . . . . f f f f . 
        `),
    Inventory.create_item("Planks", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f f f . 
        . f f f f f f f f e 4 4 4 4 f . 
        . f e e e e e e e f f f f f f . 
        . f f f f f f f f f f f f f f f 
        f f f f f f f f e e e e e e e f 
        f 4 4 4 4 e e e f f f f f f f f 
        f f f f f f f f . . . . . . . . 
        `),
    Inventory.create_item("Cut Grass", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f f f f . 
        . . . f f 6 6 6 6 6 6 6 6 f f . 
        . f f 6 6 f f f f f f f f f . . 
        f 6 6 f f 6 6 6 6 6 6 6 f f f f 
        . f f 6 6 6 6 6 6 f f f 6 6 6 f 
        f f 6 6 6 6 6 f f 6 6 6 6 6 f f 
        f 6 6 6 6 f f 6 6 6 6 f f f f . 
        f 6 6 f f 6 6 6 f f f . . . . . 
        . f f f f f f f f . . . . . . . 
        . f f . . . . . . . . . . . . . 
        `),
    Inventory.create_item("Rope", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f f . . . . . 
        . . . . . . . . f d d f . . . . 
        . . . . . . . . . f d d f . . . 
        . . . . . . . . . . f f f . . . 
        . . . f f f f f . . f d f f f . 
        . . f d f d d f f f f f f f d f 
        . f d f f f f f f f f f f f d f 
        . f f d d d f d d d d f d d f . 
        . . f f f f f f f f f f f f . . 
        `),
    Inventory.create_item("Stone", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f . . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . f f f f b b d f . . . . 
        . . . . f b b b b b b f . . . . 
        . . . f f b b b b b b f f . . . 
        . . . f b b b b b b b f f . . . 
        . . . f f c c c c f f f . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    Inventory.create_item("", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ]
}
scene.onPathCompletion(SpriteKind.Enemy, function (sprite, location) {
	
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (item == All_Materials[0]) {
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile13`)) {
            toolbar.get_items().removeAt(toolbar.get_number(ToolbarNumberAttribute.SelectedIndex))
            toolbar.get_items().push(All_Materials[1])
            toolbar.update()
        }
    } else if (item == All_Materials[2]) {
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile13`)) {
            toolbar.get_items().removeAt(toolbar.get_number(ToolbarNumberAttribute.SelectedIndex))
            toolbar.get_items().push(All_Materials[3])
            toolbar.update()
        }
    } else if (item == All_Tools[3]) {
        if (HP.value <= 35) {
            toolbar.get_items().removeAt(toolbar.get_number(ToolbarNumberAttribute.SelectedIndex))
            HP.value += 15
            toolbar.update()
        }
    }
})
function Mapcr () {
    scene.setBackgroundColor(6)
    tiles.setCurrentTilemap(tilemap`level1`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (controller.B.isPressed()) {
        scene.setBackgroundColor(12)
        tiles.placeOnRandomTile(sprite, assets.tile`myTile17`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (controller.B.isPressed()) {
        scene.setBackgroundColor(6)
        tiles.placeOnRandomTile(sprite, assets.tile`myTile15`)
    }
})
function Playercr () {
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f c f f f . . . 
        . . f f f f f f c c f f f c . . 
        . . f f f c f f f f f f f c . . 
        . . c c c f f f b b f f c c . . 
        . . f f f f f b b f f c c f . . 
        . . f f f b f b b f b f f f . . 
        . . . f d 1 f d d f 1 d f . . . 
        . . . f b d d d d d d b f . . . 
        . . . f f f b b b b f f f . . . 
        . . . b f b 7 7 7 7 b f b . . . 
        . . b d f 7 7 7 7 7 7 f d b . . 
        . . b b f 6 6 6 6 6 6 f b b . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 50, 50)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    if (controller.B.isPressed()) {
        toolbar.get_items().push(All_Tools[3])
        toolbar.update()
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    if (controller.B.isPressed()) {
        toolbar.get_items().push(All_Tools[0])
        toolbar.update()
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    if (toolbar.get_items().length <= 3) {
        if (controller.B.isPressed()) {
            toolbar.get_items().push(All_Materials[0])
            toolbar.update()
            tiles.setTileAt(location, assets.tile`transparency16`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    if (controller.B.isPressed()) {
        toolbar.get_items().push(All_Tools[1])
        toolbar.update()
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
function HUDcr () {
    Hunger = statusbars.create(50, 6, StatusBarKind.Hunger)
    Hunger.setColor(4, 2)
    Hunger.setBarBorder(1, 15)
    Hunger.max = 50
    Hunger.value = 50
    Hunger.setPosition(29, 76)
    Hunger.z = 98
    HP = statusbars.create(50, 6, StatusBarKind.Health)
    HP.setBarBorder(1, 15)
    HP.max = 50
    HP.value = 50
    HP.setPosition(29, 84)
    HP.z = 98
    Stamina = statusbars.create(50, 6, StatusBarKind.Energy)
    Stamina.setBarBorder(1, 15)
    Stamina.max = 100
    Stamina.value = 100
    Stamina.setPosition(131, 84)
    Stamina.z = 98
    Sun = textsprite.create("0", 0, 5)
    Sun.setOutline(1, 15)
    Sun.z = 99
    Sun.setFlag(SpriteFlag.RelativeToCamera, true)
    Sun.setPosition(18, 22)
    Time = textsprite.create("0", 0, 2)
    Time.setOutline(1, 15)
    Time.z = 99
    Time.setFlag(SpriteFlag.RelativeToCamera, true)
    Time.setPosition(9, 7)
    ClockHUD = sprites.create(img`
        fffffffffffffffffffffffffffffffffffffffff.
        fcccccccccccccccccccccccccccccccccccccccf.
        fccccccccccccccccccccccccccccccccccccccf..
        fccccccccccccccccccccccccccccccccccccccf..
        fcccccccccccccccccccccccccccccccccccccf...
        fcccccccccccccccccccccccccccccccccccccf...
        fccccccccccccccccccccccccccccccccccccf....
        fccccccccccccccccccccccccccccccccccccf....
        fcccccccccccccccccccccccccccccccccccf.....
        fcccccccccccccccccccccccccccccccccccf.....
        fccccccccccccccccccccccccccccccccccf......
        fccccccccccccccccccccccccccccccccccf......
        fcccccccccccccccccccccccccccccccccf.......
        fffffffffffffffffffffffffffffffffff.......
        .......fff...............fff..............
        ......fffffffffffffffffffffff.............
        ....ffeeeeeeeeeeeeeeeeeeeeeeeff...........
        ...feeeffeeeeeeeeeeeeeeeeeeeeeef..........
        ..feeff55ffeeeeeeeeeeeeeeeeeeeeef.........
        ..fef555555feeeeeeeeeeeeeeeeeeeef.........
        .feef554455feeeeeeeeeeeeeeeeeeeeef........
        .fef55444455feeeeeeeeeeeeeeeeeeeef........
        .fef55444455feeeeeeeeeeeeeeeeeeeef........
        .feef554455feeeeeeeeeeeeeeeeeeeeef........
        ..fef555555feeeeeeeeeeeeeeeeeeeef.........
        ..feeff55ffeeeeeeeeeeeeeeeeeeeeef.........
        ...feeeffeeeeeeeeeeeeeeeeeeeeeef..........
        ....ffeeeeeeeeeeeeeeeeeeeeeeeff...........
        ......fffffffffffffffffffffff.............
        `, SpriteKind.HUD)
    ClockHUD.setFlag(SpriteFlag.RelativeToCamera, true)
    ClockHUD.z = 98
    ClockHUD.setPosition(21, 15)
    BtoPress = sprites.create(img`
        1111.................1111
        1.......................1
        1..111.111.111.111.111..1
        1..1.1.1.1.1...1...1....1
        ...111.111.11..111.111...
        ...1...11..1.....1...1...
        ...1...1.1.111.111.111...
        .........................
        .........................
        ...........111...........
        ...........1.1...........
        ...........11............
        1..........1.1..........1
        1..........111..........1
        1.......................1
        1111.................1111
        `, SpriteKind.HUD)
    BtoPress.setFlag(SpriteFlag.Invisible, true)
    Steak = sprites.create(img`
        . . . . f f . 
        . . . f f e f 
        . f f e f f f 
        f f f e e f f 
        f e f f e e f 
        f e e f f f . 
        . f f f . . . 
        `, SpriteKind.HUD)
    Steak.setFlag(SpriteFlag.RelativeToCamera, true)
    Steak.z = 98
    Steak.setPosition(61, 76)
    Heart = sprites.create(img`
        . f f . f f . 
        f 1 2 f 2 2 f 
        f 2 2 2 2 2 f 
        f 2 2 2 2 c f 
        . f 2 2 c f . 
        . . f c f . . 
        . . . f . . . 
        `, SpriteKind.HUD)
    Heart.setFlag(SpriteFlag.RelativeToCamera, true)
    Heart.z = 98
    Heart.setPosition(61, 84)
    Lightning = sprites.create(img`
        . . f . 
        . f 5 f 
        f 5 f . 
        . f 5 f 
        f 5 f . 
        . f . . 
        `, SpriteKind.HUD)
    Lightning.setFlag(SpriteFlag.RelativeToCamera, true)
    Lightning.z = 98
    Lightning.setPosition(101, 84)
    CurrentItemNameHUD = textsprite.create("", 0, 1)
    CurrentItemNameHUD.setOutline(1, 15)
    CurrentItemNameHUD.z = 99
    CurrentItemNameHUD.setFlag(SpriteFlag.RelativeToCamera, true)
    CurrentItemNameHUD.setPosition(62, 93)
    Toolbar()
}
function Var () {
    Tired = false
    Hours = 6
    Minutes = 0
    Slot1taken = false
    Slot2taken = false
    Slot3taken = false
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (controller.B.isPressed()) {
        toolbar.get_items().removeAt(toolbar.get_number(ToolbarNumberAttribute.SelectedIndex))
        toolbar.update()
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    toolbar.change_number(ToolbarNumberAttribute.SelectedIndex, 1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (toolbar.get_items()[toolbar.get_number(ToolbarNumberAttribute.SelectedIndex)] == All_Tools[0]) {
            toolbar.get_items().push(All_Seeds._pickRandom())
            toolbar.update()
            tiles.setTileAt(location, assets.tile`transparency16`)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    timer.throttle("taking dmg", 300, function () {
        HP.value += -2
    })
})
let CurrentItemName: Inventory.Item = null
let Slot3taken = false
let Slot2taken = false
let Slot1taken = false
let Minutes = 0
let Hours = 0
let Tired = false
let CurrentItemNameHUD: TextSprite = null
let Lightning: Sprite = null
let Heart: Sprite = null
let Steak: Sprite = null
let BtoPress: Sprite = null
let ClockHUD: Sprite = null
let Time: TextSprite = null
let Sun: TextSprite = null
let Stamina: StatusBarSprite = null
let Hunger: StatusBarSprite = null
let HP: StatusBarSprite = null
let item: Inventory.Item = null
let All_Materials: Inventory.Item[] = []
let All_Plants: Inventory.Item[] = []
let All_Tools: Inventory.Item[] = []
let All_Seeds: Inventory.Item[] = []
let toolbar: Inventory.Toolbar = null
let mySprite: Sprite = null
color.setPalette(
color.originalPalette
)
Playercr()
Var()
HUDcr()
Mapcr()
tiles.placeOnRandomTile(mySprite, assets.tile`myTile18`)
game.onUpdate(function () {
    if (toolbar.get_items()[toolbar.get_number(ToolbarNumberAttribute.SelectedIndex)]) {
        CurrentItemName = toolbar.get_items()[toolbar.get_number(ToolbarNumberAttribute.SelectedIndex)]
        CurrentItemNameHUD.setText(CurrentItemName.get_text(ItemTextAttribute.Name))
    } else {
        CurrentItemNameHUD.setText("")
    }
    BtoPress.setPosition(mySprite.x, mySprite.y - 20)
    Time.setText("" + convertToText(Hours) + ":" + convertToText(Minutes) + "")
    timer.throttle("ticking time", 150, function () {
        Minutes += 1
    })
    timer.throttle("losing hunger", 1500, function () {
        Hunger.value += -0.2
    })
    if (Minutes == 60) {
        Hours += 1
        Minutes = 0
    }
    if (Hours == 24) {
        Hours = 0
    }
})
game.onUpdate(function () {
    item = toolbar.get_items()[toolbar.get_number(ToolbarNumberAttribute.SelectedIndex)]
    if (toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) == 4) {
        toolbar.set_number(ToolbarNumberAttribute.SelectedIndex, 0)
    }
})
game.onUpdate(function () {
    if (mySprite.vx > 50) {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f f f f f c f f f . . . 
            . . f f f f c f f f c f f f . . 
            . . f c f f c c f f f c c f f . 
            . . f c c f f f f b f f f f f . 
            . . f f f f f f f b b f f f . . 
            . . f f b b f b f b b f f . . . 
            . . . f b d b 1 f d d f f . . . 
            . . . f f f b b d d d f . . . . 
            . . . . f b d d b b f f . . . . 
            . . . . f b d d b 7 7 f . . . . 
            . . . f f f b b f 6 6 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . f f f f f . . . . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f f f f f c f f f . . . 
            . . f f f f c f f f c f f . . . 
            . . f c f f c c f f f c c f f . 
            . . f c c f f f f b f f f f f . 
            . . f f f f f f f b b f f f . . 
            . . f f b b f b f b b f f . . . 
            . . . f b d b 1 f d d f . . . . 
            . . . f f f b d d d d f . . . . 
            . . . . f b b b b b f f . . . . 
            . . . . b d d b 7 7 7 f . . . . 
            . . . . b d d b 7 7 7 f . . . . 
            . . . . f b b f 6 6 6 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `],
        250,
        characterAnimations.rule(Predicate.Moving, Predicate.FacingRight)
        )
    } else {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f f f f f c f f f . . . 
            . . f f f f c f f f c f f f . . 
            . . f c f f c c f f f c c f f . 
            . . f c c f f f f b f f f f f . 
            . . f f f f f f f b b f f f . . 
            . . f f b b f b f b b f f . . . 
            . . . f b d b 1 f d d f f . . . 
            . . . f f f b b d d d f . . . . 
            . . . . f b d d b b f f . . . . 
            . . . . f b d d b 7 7 f . . . . 
            . . . f f f b b f 6 6 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . f f f f f . . . . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f f f f f c f f f . . . 
            . . f f f f c f f f c f f . . . 
            . . f c f f c c f f f c c f f . 
            . . f c c f f f f b f f f f f . 
            . . f f f f f f f b b f f f . . 
            . . f f b b f b f b b f f . . . 
            . . . f b d b 1 f d d f . . . . 
            . . . f f f b d d d d f . . . . 
            . . . . f b b b b b f f . . . . 
            . . . . b d d b 7 7 7 f . . . . 
            . . . . b d d b 7 7 7 f . . . . 
            . . . . f b b f 6 6 6 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.Moving, Predicate.FacingRight)
        )
    }
    if (mySprite.vx < -50) {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f f f f f f f f f . . . 
            . . . f f f c f f f f f f . . . 
            . . f f f c f f f c f f f f . . 
            . f f c c f f f c c f f c f . . 
            . f f f f f b f f f f c c f . . 
            . . f f f b b f f f f f f f . . 
            . . . f f b b f b f b b f f . . 
            . . . f f d d f 1 b d b f . . . 
            . . . . f d d d b b f f f . . . 
            . . . . f f b b d d b f . . . . 
            . . . . f 7 7 b d d b f . . . . 
            . . . f f 6 6 f b b f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . . f f f f f . . . . . 
            . . . . f f f f f f f f f . . . 
            . . . f f f c f f f f f f . . . 
            . . . f f c f f f c f f f f . . 
            . f f c c f f f c c f f c f . . 
            . f f f f f b f f f f c c f . . 
            . . f f f b b f f f f f f f . . 
            . . . f f b b f b f b b f f . . 
            . . . . f d d f 1 b d b f . . . 
            . . . . f d d d d b f f f . . . 
            . . . . f f b b b b b f . . . . 
            . . . . f 7 7 7 b d d b . . . . 
            . . . . f 7 7 7 b d d b . . . . 
            . . . . f 6 6 6 f b b f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `],
        250,
        characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft)
        )
    } else {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f f f f f f f f f . . . 
            . . . f f f c f f f f f f . . . 
            . . f f f c f f f c f f f f . . 
            . f f c c f f f c c f f c f . . 
            . f f f f f b f f f f c c f . . 
            . . f f f b b f f f f f f f . . 
            . . . f f b b f b f b b f f . . 
            . . . f f d d f 1 b d b f . . . 
            . . . . f d d d b b f f f . . . 
            . . . . f f b b d d b f . . . . 
            . . . . f 7 7 b d d b f . . . . 
            . . . f f 6 6 f b b f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . . f f f f f . . . . . 
            . . . . f f f f f f f f f . . . 
            . . . f f f c f f f f f f . . . 
            . . . f f c f f f c f f f f . . 
            . f f c c f f f c c f f c f . . 
            . f f f f f b f f f f c c f . . 
            . . f f f b b f f f f f f f . . 
            . . . f f b b f b f b b f f . . 
            . . . . f d d f 1 b d b f . . . 
            . . . . f d d d d b f f f . . . 
            . . . . f f b b b b b f . . . . 
            . . . . f 7 7 7 b d d b . . . . 
            . . . . f 7 7 7 b d d b . . . . 
            . . . . f 6 6 6 f b b f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft)
        )
    }
    if (mySprite.vy > 50) {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f c f f f . . . 
            . f f f f f f f c c f f f c . . 
            . f f f f c f f f f f f f c . . 
            . . c c c f f f b b f f c c . . 
            . . f f f f f b b f f c c f . . 
            . . f f f b f b b f b f f f . . 
            . . f f d 1 f d d f 1 d f f . . 
            . . . f b d d d d d b b f b . . 
            . . . b f b 7 7 7 b d d d b . . 
            . . b d f 7 7 7 7 b d d b . . . 
            . . . . f 6 6 6 6 6 b b . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f c f f f . . . 
            . . f f f f f f c c f f f c . . 
            . . f f f c f f f f f f f c . . 
            . . c c c f f f b b f f c c . . 
            . . f f f f f b b f f c c f . . 
            . . f f f b f b b f b f f f . . 
            . . . f d 1 f d d f 1 d f . . . 
            . . . f b d d d d d d b f . . . 
            . . . f f f b b b b f f f . . . 
            . . . b f b 7 7 7 7 b f b . . . 
            . . b d f 7 7 7 7 7 7 f d b . . 
            . . b b f 6 6 6 6 6 6 f b b . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f c f f f f f f . . . 
            . . c f f f c c f f f f f f f . 
            . . c f f f f f f f c f f f f . 
            . . c c f f b b f f f c c c . . 
            . . f c c f f b b f f f f f . . 
            . . f f f b f b b f b f f f . . 
            . . f f d 1 f d d f 1 d f f . . 
            . . b f b b d d d d d b f . . . 
            . . b d d d b 7 7 7 b f b . . . 
            . . . b d d b 7 7 7 7 f d b . . 
            . . . . b b 6 6 6 6 6 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f c f f f . . . 
            . . f f f f f f c c f f f c . . 
            . . f f f c f f f f f f f c . . 
            . . c c c f f f b b f f c c . . 
            . . f f f f f b b f f c c f . . 
            . . f f f b f b b f b f f f . . 
            . . . f d 1 f d d f 1 d f . . . 
            . . . f b d d d d d d b f . . . 
            . . . f f f b b b b f f f . . . 
            . . . b f b 7 7 7 7 b f b . . . 
            . . b d f 7 7 7 7 7 7 f d b . . 
            . . b b f 6 6 6 6 6 6 f b b . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        250,
        characterAnimations.rule(Predicate.Moving, Predicate.FacingDown)
        )
    } else {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f c f f f . . . 
            . f f f f f f f c c f f f c . . 
            . f f f f c f f f f f f f c . . 
            . . c c c f f f b b f f c c . . 
            . . f f f f f b b f f c c f . . 
            . . f f f b f b b f b f f f . . 
            . . f f d 1 f d d f 1 d f f . . 
            . . . f b d d d d d b b f b . . 
            . . . b f b 7 7 7 b d d d b . . 
            . . b d f 7 7 7 7 b d d b . . . 
            . . . . f 6 6 6 6 6 b b . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f c f f f . . . 
            . . f f f f f f c c f f f c . . 
            . . f f f c f f f f f f f c . . 
            . . c c c f f f b b f f c c . . 
            . . f f f f f b b f f c c f . . 
            . . f f f b f b b f b f f f . . 
            . . . f d 1 f d d f 1 d f . . . 
            . . . f b d d d d d d b f . . . 
            . . . f f f b b b b f f f . . . 
            . . . b f b 7 7 7 7 b f b . . . 
            . . b d f 7 7 7 7 7 7 f d b . . 
            . . b b f 6 6 6 6 6 6 f b b . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f c f f f f f f . . . 
            . . c f f f c c f f f f f f f . 
            . . c f f f f f f f c f f f f . 
            . . c c f f b b f f f c c c . . 
            . . f c c f f b b f f f f f . . 
            . . f f f b f b b f b f f f . . 
            . . f f d 1 f d d f 1 d f f . . 
            . . b f b b d d d d d b f . . . 
            . . b d d d b 7 7 7 b f b . . . 
            . . . b d d b 7 7 7 7 f d b . . 
            . . . . b b 6 6 6 6 6 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f c f f f . . . 
            . . f f f f f f c c f f f c . . 
            . . f f f c f f f f f f f c . . 
            . . c c c f f f b b f f c c . . 
            . . f f f f f b b f f c c f . . 
            . . f f f b f b b f b f f f . . 
            . . . f d 1 f d d f 1 d f . . . 
            . . . f b d d d d d d b f . . . 
            . . . f f f b b b b f f f . . . 
            . . . b f b 7 7 7 7 b f b . . . 
            . . b d f 7 7 7 7 7 7 f d b . . 
            . . b b f 6 6 6 6 6 6 f b b . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.Moving, Predicate.FacingDown)
        )
    }
    if (mySprite.vy < -50) {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f c c c c f f . . . . 
            . . f f f c c c c c c f f . . . 
            . f f c c c c c c c c c f f . . 
            . f c c c c f c c c c c c f . . 
            . . f f f f c c c c f c c f . . 
            . . f f f f c c f c c c f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . . b f f f f f f f f f . . . 
            . . . b f f f f f f f f b f . . 
            . . . d c 7 7 7 7 7 b d d b . . 
            . . . b f f f f f f f b b . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f c c c c f f . . . . 
            . . . f f c c c c c c f f . . . 
            . . f f c c c c c c c c f f . . 
            . . f f c c f c c c c c c f . . 
            . . f f f f f c c c f c c f . . 
            . . f f f f c c c f c c f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . b f f f f f f f f b . . . 
            . . b d f 7 7 7 7 7 7 c d b . . 
            . . b b f 6 6 6 6 6 6 f b b . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f c c c c f f . . . . 
            . . . f f c c c c c c f f . . . 
            . . f f f c c c c c c c f f . . 
            . f f f c c c c c c c c c f . . 
            . f f c c c f c c c c c c f . . 
            . . f f f f f c c c f c f f . . 
            . . f f f f c c f f c f f f . . 
            . . . f f f f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f b . . . 
            . . . b f f f f f f f f b . . . 
            . . b d d b 7 7 7 7 7 c d b . . 
            . . . b b f f f f f f f b . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f c c c c f f . . . . 
            . . . f f c c c c c c f f . . . 
            . . f f c c c c c c c c f f . . 
            . . f f c c f c c c c c c f . . 
            . . f f f f f c c c f c c f . . 
            . . f f f f c c c f c c f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . b f f f f f f f f b . . . 
            . . b d f 7 7 7 7 7 7 c d b . . 
            . . b b f 6 6 6 6 6 6 f b b . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        250,
        characterAnimations.rule(Predicate.Moving, Predicate.FacingUp)
        )
    } else {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f c c c c f f . . . . 
            . . f f f c c c c c c f f . . . 
            . f f c c c c c c c c c f f . . 
            . f c c c c f c c c c c c f . . 
            . . f f f f c c c c f c c f . . 
            . . f f f f c c f c c c f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . . b f f f f f f f f f . . . 
            . . . b f f f f f f f f b f . . 
            . . . d c 7 7 7 7 7 b d d b . . 
            . . . b f f f f f f f b b . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f c c c c f f . . . . 
            . . . f f c c c c c c f f . . . 
            . . f f c c c c c c c c f f . . 
            . . f f c c f c c c c c c f . . 
            . . f f f f f c c c f c c f . . 
            . . f f f f c c c f c c f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . b f f f f f f f f b . . . 
            . . b d f 7 7 7 7 7 7 c d b . . 
            . . b b f 6 6 6 6 6 6 f b b . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f c c c c f f . . . . 
            . . . f f c c c c c c f f . . . 
            . . f f f c c c c c c c f f . . 
            . f f f c c c c c c c c c f . . 
            . f f c c c f c c c c c c f . . 
            . . f f f f f c c c f c f f . . 
            . . f f f f c c f f c f f f . . 
            . . . f f f f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f b . . . 
            . . . b f f f f f f f f b . . . 
            . . b d d b 7 7 7 7 7 c d b . . 
            . . . b b f f f f f f f b . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f c c c c f f . . . . 
            . . . f f c c c c c c f f . . . 
            . . f f c c c c c c c c f f . . 
            . . f f c c f c c c c c c f . . 
            . . f f f f f c c c f c c f . . 
            . . f f f f c c c f c c f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . b f f f f f f f f b . . . 
            . . b d f 7 7 7 7 7 7 c d b . . 
            . . b b f 6 6 6 6 6 6 f b b . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.Moving, Predicate.FacingUp)
        )
    }
})
game.onUpdate(function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f c c c c f f . . . . 
        . . . f f c c c c c c f f . . . 
        . . f f c c c c c c c c f f . . 
        . . f f c c f c c c c c c f . . 
        . . f f f f f c c c f c c f . . 
        . . f f f f c c c f c c f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . b f f f f f f f f b . . . 
        . . b d f 7 7 7 7 7 7 f d b . . 
        . . b b f 6 6 6 6 6 6 f b b . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingUp)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f c f f f . . . 
        . . f f f f f f c c f f f c . . 
        . . f f f c f f f f f f f c . . 
        . . c c c f f f b b f f c c . . 
        . . f f f f f b b f f c c f . . 
        . . f f f b f b b f b f f f . . 
        . . . f d 1 f d d f 1 d f . . . 
        . . . f b d d d d d d b f . . . 
        . . . f f f b b b b f f f . . . 
        . . . b f b 7 7 7 7 b f b . . . 
        . . b d f 7 7 7 7 7 7 f d b . . 
        . . b b f 6 6 6 6 6 6 f b b . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingDown)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f f . . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f f f c f f f f f f . . . 
        . . . f f c f f f c f f f f . . 
        . f f c c f f f c c f f c f . . 
        . f f f f f b f f f f c c f . . 
        . . f f f b b f f f f f f f . . 
        . . . f f b b f b f b b f f . . 
        . . . . f d d f 1 b d b f . . . 
        . . . . f d d d d b f f f . . . 
        . . . . f f b b b b b f . . . . 
        . . . . f 7 7 7 b d d b . . . . 
        . . . . f 7 7 7 b d d b . . . . 
        . . . . f 6 6 6 f b b f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f f c f f f . . . 
        . . f f f f c f f f c f f . . . 
        . . f c f f c c f f f c c f f . 
        . . f c c f f f f b f f f f f . 
        . . f f f f f f f b b f f f . . 
        . . f f b b f b f b b f f . . . 
        . . . f b d b 1 f d d f . . . . 
        . . . f f f b d d d d f . . . . 
        . . . . f b b b b b f f . . . . 
        . . . . b d d b 7 7 7 f . . . . 
        . . . . b d d b 7 7 7 f . . . . 
        . . . . f b b f 6 6 6 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
})
/**
 * TO-DO:
 * 
 * -planting seeds
 * 
 * -digging up seeds
 * 
 * -time feature and zombie spawning
 * 
 * -plants killing zombies
 * 
 * - many materials
 * 
 * - more tools
 * 
 * - sun mechanic
 */
game.onUpdate(function () {
    if (Hours <= 5 || Hours >= 18) {
        color.startFadeFromCurrent(color.GrayScale, 5000)
    } else {
        color.startFadeFromCurrent(color.originalPalette, 5000)
    }
})
/**
 * when tired do kacken
 */
/**
 * wenn a gedrückt
 */
game.onUpdate(function () {
    if (Stamina.value == 0) {
        Stamina.setColor(2, 11)
        Tired = true
    }
    if (Stamina.value >= 25) {
        Stamina.setColor(5, 11)
        Tired = false
    }
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        Stamina.value += 0.4
    } else {
        Stamina.value += 0.2
    }
    if (controller.A.isPressed()) {
        if (Tired) {
            controller.moveSprite(mySprite, 50, 50)
        } else {
            controller.moveSprite(mySprite, 75, 75)
            Stamina.value += -0.7
        }
    } else {
        controller.moveSprite(mySprite, 50, 50)
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile7`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile13`))) {
        BtoPress.setFlag(SpriteFlag.Invisible, false)
    } else {
        BtoPress.setFlag(SpriteFlag.Invisible, true)
    }
    if (mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.darkGroundCenter)) {
        controller.moveSprite(mySprite, 20, 20)
    }
})
game.onUpdateInterval(10000, function () {
	
})
