"use strict";
function multi(A = 5, B = 8) {
    return A * B;
}
;
console.log(multi());
function alunoNovo(nomes = ['Olá ', 'Thiago']) {
    return nomes[0] + nomes[1];
}
;
function alunoNovo2(nome = 'Thiago') {
    return 'Olá ' + nome;
}
;
console.log(alunoNovo());
console.log(alunoNovo2());
