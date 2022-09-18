
let jogador = "X";

let casa01 = document.getElementById("casa01");
let casa02 = document.getElementById("casa02");
let casa03 = document.getElementById("casa03");


function jogada(casa) {
    if (casa.innerHTML === ""){
        casa.innerHTML = jogador;
        alterna_jogador();

        verifica_ganhador();
    }
    quebraCabecas();
        
}
function alterna_jogador() {
    if (jogador === "X") jogador = "O";
    else jogador = "X";
    
}
function verifica_ganhador() {
    let ganhador = "";
    if (casa01.innerHTML!="" && casa01.innerHTML===casa02.innerHTML && casa01.innerHTML=== casa03.innerHTML) ganhador = casa01.innerHTML;
    else if (casa04.innerHTML!="" && casa04.innerHTML===casa05.innerHTML && casa04.innerHTML=== casa06.innerHTML) ganhador = casa04.innerHTML;
    else if (casa07.innerHTML!="" && casa07.innerHTML===casa08.innerHTML && casa07.innerHTML=== casa09.innerHTML) ganhador = casa07.innerHTML;
    else if (casa01.innerHTML!="" && casa01.innerHTML===casa04.innerHTML && casa01.innerHTML=== casa07.innerHTML) ganhador = casa01.innerHTML;
    else if (casa02.innerHTML!="" && casa02.innerHTML===casa05.innerHTML && casa02.innerHTML=== casa08.innerHTML) ganhador = casa02.innerHTML;
    else if (casa03.innerHTML!="" && casa03.innerHTML===casa06.innerHTML && casa03.innerHTML=== casa09.innerHTML) ganhador = casa03.innerHTML;
    else if (casa01.innerHTML!="" && casa01.innerHTML===casa05.innerHTML && casa01.innerHTML=== casa09.innerHTML) ganhador = casa01.innerHTML;
    else if (casa03.innerHTML!="" && casa03.innerHTML===casa05.innerHTML && casa03.innerHTML=== casa07.innerHTML) ganhador = casa03.innerHTML;

    if (ganhador != '') {
        alert(`Temos uma ganhador: ${ganhador}`);
        adicionaPlacar(ganhador);
        recomecar();
    }
}

function adicionaPlacar(ganhador){
    if (ganhador == "X") placarX.innerHTML = parseInt(placarX.innerHTML) + 1;
    else placarO.innerHTML = parseInt(placarO.innerHTML) + 1
}

function recomecar(){
    casa01.innerHTML = "";
    casa02.innerHTML = "";
    casa03.innerHTML = "";
    casa04.innerHTML = "";
    casa05.innerHTML = "";
    casa06.innerHTML = "";
    casa07.innerHTML = "";
    casa08.innerHTML = "";
    casa09.innerHTML = "";
}


function zerarPlacar(){
    if (placarX.innerHTML != "0" || placarO.innerHTML != "0"){
        placarX.innerHTML = "0";
        placarO.innerHTML = "0";
        recomecar();
        alert("Que comecem os jogos!");

    }else alert("Ninguém ganhou nenhuma partida.")
}

function quebraCabecas(){
    if (casa01.innerHTML != "" && casa02.innerHTML != "" && casa03.innerHTML != "" && casa04.innerHTML != "" && casa05.innerHTML != ""
    && casa06.innerHTML != "" && casa07.innerHTML != "" && casa08.innerHTML != "" && casa09.innerHTML != ""){
        alert("Se isso não foi intencional, meus pêsames... Aconselho comprar Omega 3.")
        recomecar(); // Se isso foi intencional, acredito que seja a última excessão do jogo.
    }
}