//Definindo 3 linhas
var matriz = new Array(3);
//Definindo 3 colunas
matriz[0] = new Array(3);
matriz[1] = new Array(3);
matriz[2] = new Array(3);

lin = 0;
col = 0;
ganhou = false;

jogada  = 0;

sinal = 'X';

var valor = 1;
// inserindo valores na matriz
/*for (var lin=0 ; lin<3 ; lin++){
    for (var col = 0; col<3; col++){
        matriz[lin][col] = valor;
        valor ++
    }
}
//imprimindo matriz
console.log(matriz.join('\n'));

console.log ("Jogador 1 = X");
console.log ("Jogador 2 = O");
//Enquanto não houver vencedor
while (!ganhou){
    if (jogada % 2 == 0) {
        console.log("Vez do jogador 1, escolha linha e coluna 1-3 ");
        sinal = 'X';
    } else {
        console.log("Vez do jogador 1, escolha linha e coluna 1-3 ");
        sinal = 'O';

    }
    linhaValida = false;
    while (!linhaValida){
        console.log("Informe a linha 1,2 ou 3");
    }
}*/

var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual módulo pra ler dados no node.js?\n", function(answer) {
    var resp = answer;
    console.log("\nSua resposta '" + resp + "' foi grava com sucesso numa variável inútil");
    leitor.close();
});




    



