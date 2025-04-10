function VinnerLogikk (player: string) {
    if (player == "DU") {
        player1 += 1
        basic.showString("DU")
    } else {
        player2 += 1
        basic.showString("AI")
    }
}
input.onButtonPressed(Button.A, function () {
    player1Valg = (player1Valg + 1) % 3
    valgt = forskjelligeValg[player1Valg]
    basic.showString("" + (valgt))
})
function on_received_number (receivedNumber: number) {
    if (player2Valg == 5) {
        player2Valg = receivedNumber
    }else if (receivedNumber == 6){
        SjekkVinner()
    }
    else{
        radio.sendNumber(6)
        SjekkVinner()
    }
}
function SjekkVinner () {
    // Lookup the result directly from the table
   let resultCode = rpsResultsTable[player1Valg][player2Valg]
    // Perform action based on the result code
    if (resultCode == 0) {
        basic.showString("TIE")
    } else if (resultCode == 1) {
        // AI wins
        VinnerLogikk("AI")
    } else {
        // resultCode === 2
        // DU wins
        VinnerLogikk("DU")
    }
    player1Valg = 5
    player2Valg = 5
}
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(player1Valg)
})

let valgt = ""
let player2 = 0
let player1 = 0
let forskjelligeValg: string[] = []
let player2Valg = 0
let player1Valg = 0
let rpsResultsTable: number[][] = []
rpsResultsTable = [[0, 2, 1], [1, 0, 2], [2, 1, 0]]
radio.setGroup(275)
radio.onReceivedNumber(on_received_number)
player1Valg = 5
player2Valg = 5
forskjelligeValg = ["St", "Sk", "Pr"]
