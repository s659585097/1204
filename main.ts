input.onButtonPressed(Button.A, function () {
    robotbit.Servo(robotbit.Servos.S1, 75)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, 85)
})
input.onButtonPressed(Button.AB, function () {
    robotbit.Servo(robotbit.Servos.S1, 95)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, 85)
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P8,
    DigitalPin.P0,
    PingUnit.Centimeters
    )))
    basic.pause(200)
    if (sonar.ping(
    DigitalPin.P8,
    DigitalPin.P0,
    PingUnit.Centimeters
    ) < 5) {
        robotbit.Servo(robotbit.Servos.S1, 75)
        basic.pause(1000)
        robotbit.Servo(robotbit.Servos.S1, 95)
        basic.pause(1000)
    } else {
        robotbit.Servo(robotbit.Servos.S1, 85)
    }
})
