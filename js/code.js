function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function choise(move) {
	let result = ""
	if (move == 1) {
		result = "Piedra"
	} else if (move == 2) {
		result = "Papel"
	} else if (move == 3) {
		result = "Tijera"
	} else {
		result = "Elección invalida"
	} return result
}


let player = 0
let computer = 0
let victories = 0
let lost = 0

while (victories < 3 && lost < 3) {
	computer = random(1,3)
	player = prompt("Elige: 1 para Piedra, 2 para Papel, 3 para Tijera")

	alert("Computadora elige " + choise(computer))
	alert("Tu elegiste " + choise(player))

	//fight
	if (player == computer) {
		alert("Empate!")
	} else if (player == 1 && computer == 3 || player == 2 && computer == 1 || player == 3 && computer == 2) {
		alert("Ganaste!")
		victories = victories + 1
	} else {
		alert("Perdiste!")
		lost = lost + 1
	}
}
alert("Ganaste " + victories + " veces, y perdiste " + lost + " veces.")