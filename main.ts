basic.showIcon(IconNames.Heart)
TPBot.headlightColor(0xff0080)
basic.forever(function () {
    if (TPBot.sonarJudge(TPBot.Sonarjudge.Greater, 4) && TPBot.sonarJudge(TPBot.Sonarjudge.Less, 15)) {
        TPBot.stopCar()
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, 30, 1)
        TPBot.setWheels(-50, -20)
        TPBot.setTravelTime(TPBot.DriveDirection.Right, 30, 0.5)
        TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 50)
    } else {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 50)
    }
})
