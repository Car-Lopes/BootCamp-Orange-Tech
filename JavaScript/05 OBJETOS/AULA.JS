
/* Um Objeto Coleção de valores, agrupa valor (Chave e valor)
*/

const carlos = {
    nome: 'Carlos L Moura',
    idade: 31,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

console.log('1 ' + carlos.nome);
console.log('2 ' + carlos.idade);
console.log('3');
console.log(carlos);

/* Add no Objeto*/
carlos.altura = 1.53
console.log('4 add no objeto');
console.log(carlos);

/* deletando no Objeto*/
delete carlos.altura;
console.log('5 deletandono objeto');
console.log(carlos);

//chamando a função
console.log('6 Chamando função')
carlos.descrever();

const atributo = 'idade';
console.log('7 '+carlos[atributo]);


