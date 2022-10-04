input.onButtonPressed(Button.A, function () {
    var1 += 1
    basic.showNumber(var1)
})
input.onButtonPressed(Button.AB, function () {
    if (var1 > 0) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("N")
    } else if (0 > var1) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showString("P")
    } else if (var1 == 0) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        basic.showString("Z")
    }
})
input.onButtonPressed(Button.B, function () {
    var1 += -1
    basic.showNumber(var1)
})
let var1 = 0
var1 = 1
basic.forever(function () {
	
})
