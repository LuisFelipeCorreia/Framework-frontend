const casas = document.querySelectorAll(".casa");
const status = document.getElementById("status");
const reiniciar = document.getElementById("reiniciar");

let jogador = "X";
let jogoAtivo = true;

let tabuleiro = [
    "", "", "",
    "", "", "",
    "", "", ""
];

const combinacoes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function verificarVencedor(){

    for(let combinacao of combinacoes){

        const [a,b,c] = combinacao;

        if(
            tabuleiro[a] &&
            tabuleiro[a] === tabuleiro[b] &&
            tabuleiro[a] === tabuleiro[c]
        ){
            status.textContent = `Jogador ${tabuleiro[a]} venceu!`;
            jogoAtivo = false;
            return;
        }
    }

    if(!tabuleiro.includes("")){
        status.textContent = "Empate!";
        jogoAtivo = false;
        return;
    }

    jogador = jogador === "X" ? "O" : "X";
    status.textContent = `Vez do jogador ${jogador}`;
}

function jogar(event){

    const indice = event.target.dataset.index;

    if(tabuleiro[indice] !== "" || !jogoAtivo){
        return;
    }

    tabuleiro[indice] = jogador;
    event.target.textContent = jogador;

    verificarVencedor();
}

casas.forEach(casa => {
    casa.addEventListener("click", jogar);
});

reiniciar.addEventListener("click", () => {

    tabuleiro = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    jogador = "X";
    jogoAtivo = true;

    status.textContent = "Vez do jogador X";

    casas.forEach(casa => {
        casa.textContent = "";
    });

});