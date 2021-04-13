
let player1 = '';
let player2 = '';

let ficha1 = '';
let ficha2 = '';

// Hace lasvalidaciones cuando gana el jugadoruno y cuando gana el 2
function play(ficha1, ficha2){

    // Si los dos tiran la misma ficha se declara empate
    if(this.ficha1 == ficha2){
        console.log('Empate');
    } 
    else {
        // Validaciones para jugador 1 :: gana
        if(ficha1 == "piedra" && ficha2 == "tijera"){
            console.log("Gana " + this.player1);
        }
        else if(ficha1 == "tijera" && ficha2 == "papel"){
            console.log("Gana " + this.player1);
        }
        else if(ficha1 == "papel" && ficha2 == "piedra"){
            console.log("Gana " + this.player1);
        }

        // Validaciones para jugador 2 :: gana
        if(ficha2 == "piedra" && ficha1 == "tijera"){
            console.log("Gana " + this.player2);
        }
        else if(ficha2 == "tijera" && ficha1 == "papel"){
            console.log("Gana " + this.player2);
        }
        else if(ficha2 == "papel" && ficha1 == "piedra"){
            console.log("Gana " + this.player2);
        }
    }
}

// Guarda los nombres de los jugadores
function save() {
    this.player1= document.getElementById("player1").value;
    this.player2= document.getElementById("player2").value;
    
    // Muestra los nombres
    console.log("Jugador uno : " + this.player1);
    console.log("Jugador dos : " + this.player2);

    // Indica quien empieza
    console.log(" - Empieza " + this.player1);
}

// Guarda los movimientos de los jugadores
function content(value) {

    // Si estan los dos jugadores hacer 
    if(this.player1.length > 0 && this.player2.length > 0) {

        // Si ya se guardo el primer movimiento pasa al segundo y ejecuta la funcion 'jugar'
        if(this.ficha1){
            this.ficha2= value;
            console.log("- " + this.ficha2); // Muestra la ficha seleccionada
            //Envia los dos movimientos
            this.play(this.ficha1, this.ficha2);
        }
        // Si no seguardo el primer movimiento lo guarla 
        else {
            this.ficha1= value;
            console.log( " - " + this.ficha1); // Muestra la ficha seleccionada
            console.log(" - Turno de " + this.player2); 
        }
    }
    // Si no hay jugadores los exige para poder jugar 
    else {
        console.log('No puedes jugar si no hay dos jugadores');
    }
    
}

function reiniciar(){
    
    document.getElementById("player1").value = "";
    document.getElementById("player2").value = "";
 }
 