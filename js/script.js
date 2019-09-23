var pc = new Array();
var aleatorio;
pc[0] = "pedra";
pc[1] = "papel";
pc[2] = "tesoura";
var imagens = ["img/Papel.png", "img/Pedra.png", "Tesoura.png"];
var texto;

texto = document.getElementById("texto");

function pedra() {
    aleatorio = Math.floor(Math.random() * pc.length);
    console.log(pc[aleatorio]);

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