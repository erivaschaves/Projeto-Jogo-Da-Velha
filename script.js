var res = window.document.getElementById('res');
var sinal = 'X';
var jogada = 0;
// Selecionando todas as casas, com querry selector da class casa
var casa = window.document.querySelectorAll(".casa");
//Definindo função jogar
function jogar(){
    if (jogada % 2 == 0) {
        res.innerHTML = 'Vez do jogador 2';
        sinal = 'X';
    }else {
        res.innerHTML = 'Vez do jogador 1';
        sinal = 'O';  
    }
    jogada ++;
    //Validando vencedor
    for (var i = 0; i<casa.length; i++){
        if(casa[0].innerHTML == 'X' && casa[1].innerHTML == 'X' && casa[2].innerHTML == 'X' || casa[3].innerHTML == 'X' && casa[4].innerHTML == 'X' && casa[5].innerHTML == 'X' || casa[6].innerHTML == 'X' && casa[7].innerHTML == 'X' && casa[8].innerHTML == 'X' || casa[0].innerHTML == 'X' && casa[3].innerHTML == 'X' && casa[6].innerHTML == 'X' || casa[2].innerHTML == 'X' && casa[5].innerHTML == 'X' && casa[8].innerHTML == 'X' || casa[0].innerHTML == 'X' && casa[4].innerHTML == 'X' && casa[8].innerHTML == 'X' || casa[2].innerHTML == 'X' && casa[5].innerHTML == 'X' && casa[8].innerHTML == 'X' || casa[1].innerHTML == 'X' && casa[4].innerHTML == 'X' && casa[7].innerHTML == 'X'){
            window.alert('Jogador 1 Ganhou !!!')
            jogada = 0;
            location.reload();
        }else if(casa[0].innerHTML == 'O' && casa[1].innerHTML == 'O' && casa[2].innerHTML == 'O' || casa[3].innerHTML == 'O' && casa[4].innerHTML == 'O' && casa[5].innerHTML == 'O' || casa[6].innerHTML == 'O' && casa[7].innerHTML == 'O' && casa[8].innerHTML == 'O' || casa[0].innerHTML == 'O' && casa[3].innerHTML == 'O' && casa[6].innerHTML == 'O' || casa[2].innerHTML == 'O' && casa[5].innerHTML == 'O' && casa[8].innerHTML == 'O' || casa[0].innerHTML == 'O' && casa[4].innerHTML == 'O' && casa[8].innerHTML == 'O' || casa[2].innerHTML == 'O' && casa[5].innerHTML == 'O' && casa[8].innerHTML == 'O' || casa[1].innerHTML == 'O' && casa[4].innerHTML == 'O' && casa[7].innerHTML == 'O'){
            window.alert('Jogador 2 Ganhou !!!')
            jogada = 0;
            location.reload();
        }
    }
    if(jogada == 9){
        window.alert('Empate!!!');
        jogada = 0;
        location.reload();
    }
    
}

//Validando número da casa
for(var i = 0; i < casa.length;i++){
    //Adicionando sinal a casa clicada
    casa[i].addEventListener("click", function (){
        //Validando se a casa já está ocupada
        if(this.innerHTML == 'X' || this.innerHTML == 'O'){
            res.innerHTML = 'Posição ocupada tente novamente';
            jogada --;
        }else {
        this.innerHTML = sinal;
        }
    })
}
