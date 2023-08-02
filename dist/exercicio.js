const alunos = [{
  nome: 'João',
  nota: 7
}, {
  nome: 'Maria',
  nota: 6
}, {
  nome: 'José',
  nota: 3
}, {
  nome: 'Caio',
  nota: 9
}, {
  nome: 'Marcos',
  nota: 4
}];
function filtramedia(aluno) {
  return aluno.nota >= 6;
}
const alunosaprovados = alunos.filter(filtramedia);
console.log(alunosaprovados);