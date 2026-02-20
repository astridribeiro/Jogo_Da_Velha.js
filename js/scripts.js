let X = document.querySelector(".X");
let O = document.querySelector(".O");
let boxes = document.querySelectorAll(".box");

let buttons = document.querySelectorAll('#two-players, #ai-player');
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");

// BOTÃO PARA VOLTAR PARA A PÁGINA INICIAL
let backButton = document.getElementById("back-button");
let startScreen = document.getElementById("start-screen");
let gameContainer = document.getElementById("container");

let secondPlayer;
let player1 = 0;
let player2 = 0;

for(let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function(){
        let elemento = checkElemento(player1, player2);
        if(this.childNodes.length == 0) {            
            let cloneElemento = elemento.cloneNode(true);
            this.appendChild(cloneElemento);
            if(player1 == player2) {
                player1++;
                if(secondPlayer == 'ai-player') {
                    computerPlay();
                    player2++;
                }
            } else {
                player2++;
            }
            checkWinCondition();
        }
    });  
}

// BOTÃO PARA VOLTAR PARA A PÁGINA INICIAL
backButton.addEventListener("click", () => {
    gameContainer.classList.add("hide");
    startScreen.classList.remove("hide");
    backButton.classList.add("hide");
});

function checkElemento(player1, player2) {
    if(player1 == player2) {
        elemento = X;
    } else {
        elemento = O;
    }
    return elemento;
}

function checkWinCondition(){
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById('block-2');
    let b3 = document.getElementById('block-3');
    let b4 = document.getElementById('block-4');
    let b5 = document.getElementById('block-5');
    let b6 = document.getElementById('block-6');
    let b7 = document.getElementById('block-7');
    let b8 = document.getElementById('block-8');
    let b9 = document.getElementById('block-9');

// HORIZONTAL
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;
        if(b1Child == 'X' && b2Child == 'X' && b3Child == 'X') {
            declareWinner('X');
        } else if(b1Child == 'O' && b2Child == 'O' && b3Child == 'O') {
            declareWinner('O');
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        if(b4Child == 'X' && b5Child == 'X' && b6Child == 'X') {
            declareWinner('X');
        } else if(b4Child == 'O' && b5Child == 'O' && b6Child == 'O') {
            declareWinner('O');
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        if(b7Child == 'X' && b8Child == 'X' && b9Child == 'X') {
            declareWinner('X');
        } else if(b7Child == 'O' && b8Child == 'O' && b9Child == 'O') {
            declareWinner('O');
        }
    }

// VERTICAL    
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
        if(b1Child == 'X' && b4Child == 'X' && b7Child == 'X') {
            declareWinner('X');
        } else if(b1Child == 'O' && b4Child == 'O' && b7Child == 'O') {
            declareWinner('O');
        }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        if(b2Child == 'X' && b5Child == 'X' && b8Child == 'X') {
            declareWinner('X');
        } else if(b2Child == 'O' && b5Child == 'O' && b8Child == 'O') {
            declareWinner('O');
        }   
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        if(b3Child == 'X' && b6Child == 'X' && b9Child == 'X') {
            declareWinner('X');
        } else if(b3Child == 'O' && b6Child == 'O' && b9Child == 'O') {
            declareWinner('O');
        }
    }

// DIAGONAL
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        if(b1Child == 'X' && b5Child == 'X' && b9Child == 'X') {
            declareWinner('X');
        } else if(b1Child == 'O' && b5Child == 'O' && b9Child == 'O') {
            declareWinner('O');
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
        if(b3Child == 'X' && b5Child == 'X' && b7Child == 'X') {
            declareWinner('X');
        } else if(b3Child == 'O' && b5Child == 'O' && b7Child == 'O') {
            declareWinner('O');
        }
    }

// DEU VELHA
    let counter = 0
    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter ++;
        }
    }

    if(counter == 9) {
        declareWinner('deu velha');
    }
}

// LIMPA O JOGO, DECLARA O VENCEDOR E LIMPA O PLACAR 
function declareWinner(winner){
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardO = document.querySelector("#scoreboard-2");
    let mensagem = '';
    
    if(winner == 'X'){
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        mensagem = "O JOGADOR 1 VENCEU!";
    }else if(winner == 'O'){
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        mensagem = "O JOGADOR 2 VENCEU!";
    }else{
        mensagem = "DEU VELHA!";
    }

// EXIBIR MENSSAGEM
    messageText.innerHTML = mensagem;
    messageContainer.classList.remove("hide");

// ESCONDER A MENSSAGEM
    setTimeout(function(){
        messageContainer.classList.add("hide");
    }, 5000);

// ZERAR OS JOGADORES
    player1 = 0;
    player2 = 0;

// LIMPAR O JOGO
    let boxesToRemove = document.querySelectorAll(".box div");
    for(let i = 0; i < boxesToRemove.length; i++) { 
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

/* AI OU SECOND PLAYER
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        secondPlayer = this.getAttribute('id');
        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }

        backButton.classList.remove("hide");
        
        setTimeout(function() {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500);
    });
}*/
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        secondPlayer = this.getAttribute('id');
        startScreen.classList.add("hide");
        gameContainer.classList.remove("hide");
        backButton.classList.remove("hide");
    });
}

// AI
function computerPlay() {
    let cloneO = O.cloneNode(true);
    counter = 0;
    filled = 0;
    for(let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);
        if(boxes[i].childNodes[0] == undefined) {  
            if(randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }      
        } else {
            filled++;
        }
    }
    if(counter == 0 && filled < 9) {
        computerPlay();
    }
}