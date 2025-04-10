input.onButtonPressed(Button.A, function () {
    player1Valg = (player1Valg + 1) % 3
    valgt = forskjelligeValg[player1Valg]
    basic.showString("" + (valgt))
})
function on_received_number (receivedNumber: number) {
    if (player2Valg == 5) {
        player2Valg = receivedNumber
    } else {
        SjekkVinner()
    }
}
function SjekkVinner () {
    if (player2Valg == player1Valg) {
        basic.showString("TIE")
    }
    if (player1Valg == 0) {
        if (player2Valg == 1) {
            player1 = player1 + 1
            basic.showString("DU")
        } else if (player2Valg == 2) {
            player2 = player2 + 1
            basic.showString("AI")
        }
    } else if (player1Valg == 1) {
        if (player2Valg == 2) {
            player1 = player1 + 1
            basic.showString("DU")
        } else if (player2Valg == 0) {
            player2 = player2 + 1
            basic.showString("AI")
        }
    } else if (player1Valg == 2) {
        if (player2Valg == 0) {
            player1 = player1 + 1
            basic.showString("DU")
        } else if (player2Valg == 1) {
            player2 = player2 + 1
            basic.showString("AI")
        }
    }
    player1Valg = 5
    player2Valg = 5
}
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(player1Valg)
})
let player2 = 0
let player1 = 0
let valgt = ""
let forskjelligeValg: string[] = []
let player2Valg = 0
let player1Valg = 0
radio.onReceivedNumber(on_received_number)
player1Valg = 5
player2Valg = 5
forskjelligeValg = ["St", "Sk", "Pr"]
