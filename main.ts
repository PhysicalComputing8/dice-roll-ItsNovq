// Great Job! You moved the code into the onShake event trigger. This way it will be executed each time the micro:bit is shaken.
input.onGesture(Gesture.Shake, function () {
    // Awesome! You correctly set the limits of the dice roll to between 1 and 6.
    roll = randint(1, 6)
    basic.showNumber(roll)
})
// Alan,
// Not a bad start, but I was hoping that by the end of class you would have at least some of the advanced parts of the assignment done.
// 
// Please let me know if you are having trouble, so I can help you stay caught up.
// 
// Mr. Shaw
let roll = 0
basic.showString("Shake to roll the dice")
