//Lista são representados tudo que esta dentro do [] é um conjuto de dados 
// Podemos ter tipo diferentes de dados string e numero por exemplo

const alunos = ['Carlos', 'Leticia', 'Bernardo']

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);

// para adicionar na lista 
alunos.push('Fatima');
console.log(alunos[3]);

// Mudando dado na lista em uma determinada possição 
alunos[3] = 'Caio';
console.log(alunos);

//Para remover o ultimo registro da lista 
console.log(alunos.pop());
console.log(alunos);

//Para remover o primeiro registro da lista 
console.log(alunos.shift());
console.log(alunos);

