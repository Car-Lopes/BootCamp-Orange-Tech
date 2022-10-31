/* Função que escreva meu nome */

function myName(nome){
    console.log('My name is:' + nome);
}
myName(' Carlos');
myName(' Leticia');
myName(' Bernardo');

function verMaiorIdade(idade){
    if (idade >= 18){
       console.log('Maior de Idade!');
    } else {
        console.log('Menor de Idade!');
    }
}
verMaiorIdade(31);
verMaiorIdade(29);
verMaiorIdade(2);