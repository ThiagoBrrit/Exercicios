function multi(A: number = 5, B: number = 8): number {
    return A * B
};

console.log(multi());

function alunoNovo(nomes: string[] = ['Olá ', 'Thiago']): string {
    return nomes[0] + nomes[1];
};

function alunoNovo2(nome: string = 'Thiago'): string {
    return 'Olá ' + nome;
};

console.log(alunoNovo());
console.log(alunoNovo2());