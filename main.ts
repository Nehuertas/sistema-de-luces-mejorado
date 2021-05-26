basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B))) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # #
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . . . # #
            . . . . #
            `)
        basic.showLeds(`
            . . . # .
            . . # # .
            . # # # #
            . . # # .
            . . . # .
            `)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        basic.showLeds(`
            . # . . .
            # # . . .
            # # # # .
            # # . . .
            . # . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # # # . .
            # . . . .
            # . . . .
            `)
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A))) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # # . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # . .
            # # . . .
            # . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # # . .
            # # # # .
            . # # . .
            . # . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . # .
            . . . # .
            . # # # #
            . . . # #
            . . . # .
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . # # #
            . . . . #
            . . . . #
            `)
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
    }
    if (input.isGesture(Gesture.Shake)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
    }
})
