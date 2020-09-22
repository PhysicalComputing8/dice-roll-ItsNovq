// Great Job! You moved the code into the onShake event trigger. This way it will be executed each time the micro:bit is shaken.
input.onGesture(Gesture.Shake, function () {
    // Awesome! You correctly set the limits of the dice roll to between 1 and 6.
    roll = randint(1, 6)
    basic.showNumber(roll)
})
let roll = 0
basic.showString("Shake to roll the dice")
