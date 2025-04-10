def on_received_number(receivedNumber):
    global player2Valg
    if player2Valg == 5:
        player2Valg = receivedNumber
    else:
        SjekkVinner()
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global player1Valg, valgt
    player1Valg = (player1Valg + 1) % 3
    valgt = forskjelligeValg[player1Valg]
    basic.show_string("" + (valgt))
input.on_button_pressed(Button.A, on_button_pressed_a)

def SjekkVinner():
    global player1Valg, player2Valg, player1, player2
    if player2Valg == player1Valg:
        basic.show_string("TIE")
    if player1Valg == 0:
        if player2Valg == 1:
            player1 = player1 + 1
            basic.show_string("DU")
        elif player2Valg == 2:
            player2 = player2 + 1
            basic.show_string("AI")
    elif player1Valg == 1:
        if player2Valg == 2:
            player1 = player1 + 1
            basic.show_string("DU")
        elif player2Valg == 0:
            player2 = player2 + 1
            basic.show_string("AI")
    elif player1Valg == 2:
        if player2Valg == 0:
            player1 = player1 + 1
            basic.show_string("DU")
        elif player2Valg == 1:
            player2 = player2 + 1
            basic.show_string("AI")
    player1Valg = 5
    player2Valg = 5

def on_button_pressed_b():
    radio.send_number(player1Valg)
input.on_button_pressed(Button.B, on_button_pressed_b)

valgt = ""
forskjelligeValg: List[str] = []
player2Valg = 0
player1Valg = 0
player1 = 0
player2 = 0
player1Valg = 5
player2Valg = 5
forskjelligeValg = ["St", "Sk", "Pr"]