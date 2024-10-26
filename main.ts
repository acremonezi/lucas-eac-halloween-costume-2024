input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showString("LUCAS")
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.play(music.stringPlayable("A - A - A - C C ", 240), music.PlaybackMode.UntilDone)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showString("KENJI")
    basic.showLeds(`
        . # . . #
        . # . # .
        . # # . .
        . # . # .
        . # . . #
        `)
    basic.pause(5000)
    basic.showLeds(`
        . # . # .
        # # . # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    for (let index = 0; index < 20; index++) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            # . # . #
            . . # . .
            # # . # #
            . . # . .
            # . # . #
            `)
        basic.showLeds(`
            # . # . #
            . . . . .
            # . . . #
            . . . . .
            # . # . #
            `)
    }
    music.play(music.stringPlayable("G F E C G F E C ", 131), music.PlaybackMode.UntilDone)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.clearScreen()
})
