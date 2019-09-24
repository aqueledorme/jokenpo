var pc = new Array();
var aleatorio;
pc[0] = "pedra";
pc[1] = "papel";
pc[2] = "tesoura";
var texto;

texto = document.getElementById("texto");

function pedra() {
    aleatorio = Math.floor(Math.random() * pc.length);
    console.log(pc[aleatorio]);
    document.getElementById("PC").innerHTML = `<img class ="${pc[aleatorio]}"src = "img/${pc[aleatorio]}.png"> `

    if (pc[aleatorio] === pc[0]) {
        texto.textContent = "empatou";
    }
    if (pc[aleatorio] === pc[1]) {
        texto.textContent = "voce perdeu";
    }
    if (pc[aleatorio] === pc[2]) {
        texto.textContent = "voce ganhou";
    }


}

function tesoura() {
    aleatorio = Math.floor(Math.random() * pc.length);
    document.getElementById("PC").innerHTML = `<img class ="${pc[aleatorio]}"src = "img/${pc[aleatorio]}.png"> `
    if (pc[aleatorio] === pc[2]) {
        texto.textContent = "empatou";
    }
    if (pc[aleatorio] === pc[0]) {
        texto.textContent = "voce perdeu";
    }
    if (pc[aleatorio] === pc[1]) {
        texto.textContent = "voce ganhou";
    }

}

function papel() {
    aleatorio = Math.floor(Math.random() * pc.length);
    document.getElementById("PC").innerHTML = `<img class ="${pc[aleatorio]}"src = "img/${pc[aleatorio]}.png">`
    if (pc[aleatorio] === pc[1]) {
        texto.textContent = "empatou";
    }
    if (pc[aleatorio] === pc[2]) {
        texto.textContent = "voce perdeu";
    }
    if (pc[aleatorio] === pc[0]) {
        texto.textContent = "voce ganhou";
    }

}