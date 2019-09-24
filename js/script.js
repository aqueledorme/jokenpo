var pc = new Array();
pc[0] = "pedra";
pc[1] = "papel";
pc[2] = "tesoura";
var texto;

texto = document.getElementById("texto");

function seleção(e) {
    var aleatorio = Math.floor(Math.random() * pc.length);
    document.getElementById("PC").innerHTML = `<img class ="${pc[aleatorio]}"src = "img/${pc[aleatorio]}.png"> `;
    var nameclasseht = e.target.className;
    if (pc[aleatorio] === nameclasseht) {
        texto.textContent = "empatou";
    } else if (pc[aleatorio] === "pedra" && nameclasseht === "papel" ||
        pc[aleatorio] === "papel" && nameclasseht === "tesoura" ||
        pc[aleatorio] === "tesoura" && nameclasseht === "pedra") {
        texto.textContent = "ganhei"

    } else {
        texto.textContent = "perdi"
    }


}