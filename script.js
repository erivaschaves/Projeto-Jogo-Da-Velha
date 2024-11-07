//Definindo 3 linhas
var matriz = new Array(3);
//Definindo 3 colunas
matriz[0] = new Array(3);
matriz[1] = new Array(3);
matriz[2] = new Array(3);
var valor = window.document.getElementById('valor');
var res = window.document.getElementById('res');
//var casa1 = window.document.getElementById ('casa1');
matriz[0][0] = window.document.getElementById ('casa1');
matriz[0][1] = window.document.getElementById ('casa2');
matriz[0][2] = window.document.getElementById ('casa3');
var sinal = 'X';
var jogada = 0;
var lin = 0;
var col = 0;

function jogar(){
    if (jogada % 2 == 0) {
        res.innerHTML = 'Vez do jogador 1';
        sinal = 'X';
    }else {
        res.innerHTML = 'Vez do jogador 2';
        sinal = 'O';  
    }
    if (casaValida){
        matriz[lin][col].innerHTML = sinal;
    }else{
        res.innerHTML = 'Escolha outra casa';
    }
    jogada ++;
}

function casaValida(){
    if (matriz[lin][col].value == ''){
        return true;
    }
        return false;
}

/*function imprimir(){
// inserindo valores na matriz e imprimindo
for (var lin=0 ; lin<3 ; lin++){
    for (var col = 0; col<3; col++){
        matriz[lin][col] = valor;
        valor ++
    }
}
res.innerHTML = matriz.join('<br>');
}

//imprimindo matriz
/*console.log(matriz.join('\n'));*/


/*var ganhou = false;

var jogada  = 0;

var sinal = 'X';

var lin = 0;

var col = 0;
//Defindo simbolos dos jogadores
console.log ("Jogador 1 = X");
console.log ("Jogador 2 = O");
//Enquanto não houver vencedor
while (!ganhou){
    if (jogada % 2 == 0) {
        console.log("Vez do jogador 1, escolha linha e coluna 1-3 ");
        sinal = 'X';
    } else {
        console.log("Vez do jogador 2, escolha linha e coluna 1-3 ");
        sinal = 'O';
    }
    //Verificando se a linha é válida
    var linhaValida = false;
    while (!linhaValida){
        console.log("Informe a linha 1,2 ou 3");
        var linha = valor;
        if (linha >= 0 && linha <3) {
            linhaValida = true;
        }else{
            console.log("Linha inválida digite novamente");
        }
    }
    //Verificando se a coluna é válida
    var colunaValida= false;
    while (!colunaValida){
        console.log("Informe a coluna 1,2 ou 3");
        var coluna = valor;
        if (coluna >= 0 && coluna <3) {
            colunaValida = true;
        }else{
            console.log("Linha inválida digite novamente");
        }
    }
    //Verificando se linha ou coluna já foi usada.
    if (matriz[lin][col] == 'X' || matriz[lin][col] == 'O'){
        console.log("posição já usada, tente novamente");
    }else{
        matriz[linha][coluna] = sinal;
        jogada++;
    }
    //Imprimindo matriz atual do jogo
    for( var i = 0; i<matriz.length; i++){
        for(var j = 0; j<matriz.length;j++){
            console.log(matriz[i][j] + " | ");
        }
        console.log();
    }
    if (matriz[0][0] == 'X' && matriz[0][1] == 'X' && matriz[0][2] == 'X'
        || matriz[1][0] == 'X' && matriz[1][1] == 'X' && matriz[1][2] == 'X'
        || matriz[2][0] == 'X' && matriz[2][1] == 'X' && matriz[2][2] == 'X'
        || matriz[0][0] == 'X' && matriz[1][1] == 'X' && matriz[2][2] == 'X'
        || matriz[0][2] == 'X' && matriz[1][1] == 'X' && matriz[2][0] == 'X'
        || matriz[0][0] == 'X' && matriz[1][0] == 'X' && matriz[2][0] == 'X'
        || matriz[0][1] == 'X' && matriz[1][1] == 'X' && matriz[2][1] == 'X'
        || matriz[0][2] == 'X' && matriz[1][2] == 'X' && matriz[2][2] == 'X'){
        ganhou = true;
        console.log("Jogador 1 ganhou!!!");
        }else 
    if (matriz[0][0] == 'O' && matriz[0][1] == 'O' && matriz[0][2] =='O'
        || matriz[1][0] == 'O' && matriz[1][1] == 'O' && matriz[1][2] == 'O'
        || matriz[2][0] == 'O' && matriz[2][1] == 'O' && matriz[2][2] == 'O'
        || matriz[0][0] == 'O' && matriz[1][1] == 'O' && matriz[2][2] == 'O'
        || matriz[0][2] == 'O' && matriz[1][1] == 'O' && matriz[2][0] == 'O'
        || matriz[0][0] == 'O' && matriz[1][0] == 'O' && matriz[2][0] == 'O'
        || matriz[0][1] == 'O' && matriz[1][1] == 'O' && matriz[2][1] == 'O'
        || matriz[0][2] == 'O' && matriz[1][2] == 'O' && matriz[2][2] == 'O'){
        ganhou = true;
        console.log("Jogador 2 ganhou!!!");
}else if (jogada>=9){
    ganhou = true;
    console.log("Empate!!!");
}
}*/

function imprimir(){
    // inserindo valores na matriz e imprimindo
    for (var lin=0 ; lin<3 ; lin++){
        for (var col = 0; col<3; col++){
            matriz[lin][col] = 'X';
        }
    }
    matriz[1][1] = 'O';
    matriz[0][1] = 'O';
    matriz[2][0] = 'O';
    matriz[2][1] = 'O';
    matriz[1][2] = 'O';
    if (matriz[0][0] == 'X' && matriz[0][1] == 'X' && matriz[0][2] == 'X'
        || matriz[1][0] == 'X' && matriz[1][1] == 'X' && matriz[1][2] == 'X'
        || matriz[2][0] == 'X' && matriz[2][1] == 'X' && matriz[2][2] == 'X'
        || matriz[0][0] == 'X' && matriz[1][1] == 'X' && matriz[2][2] == 'X'
        || matriz[0][2] == 'X' && matriz[1][1] == 'X' && matriz[2][0] == 'X'
        || matriz[0][0] == 'X' && matriz[1][0] == 'X' && matriz[2][0] == 'X'
        || matriz[0][1] == 'X' && matriz[1][1] == 'X' && matriz[2][1] == 'X'
        || matriz[0][2] == 'X' && matriz[1][2] == 'X' && matriz[2][2] == 'X'){
        ganhou = true;
        res.innerHTML='Jogador 1 ganhou!!!<br>';
        }else 
        if (matriz[0][0] == 'O' && matriz[0][1] == 'O' && matriz[0][2] =='O'
            || matriz[1][0] == 'O' && matriz[1][1] == 'O' && matriz[1][2] == 'O'
            || matriz[2][0] == 'O' && matriz[2][1] == 'O' && matriz[2][2] == 'O'
            || matriz[0][0] == 'O' && matriz[1][1] == 'O' && matriz[2][2] == 'O'
            || matriz[0][2] == 'O' && matriz[1][1] == 'O' && matriz[2][0] == 'O'
            || matriz[0][0] == 'O' && matriz[1][0] == 'O' && matriz[2][0] == 'O'
            || matriz[0][1] == 'O' && matriz[1][1] == 'O' && matriz[2][1] == 'O'
            || matriz[0][2] == 'O' && matriz[1][2] == 'O' && matriz[2][2] == 'O'){
            ganhou = true;
            res.innerHTML='Jogador 2 ganhou!!!<br>';
    }else {
        ganhou = true;
        res.innerHTML='Empate!!!<br>';
    }
    res.innerHTML += matriz.join('<br>');
    }
function inserir(){
    casa1.innerHTML = 'X';
}




    



