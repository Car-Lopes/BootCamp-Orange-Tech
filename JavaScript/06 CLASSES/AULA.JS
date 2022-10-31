//Criando uma Classe - O que deve ter de atributo
/*
class pessoa {
    nome;
    idade;
     //função
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

//Instancias da classe - são as ocorrencias do objeto/classe
const carlos = new pessoa();
carlos.nome = 'Carlos L';
carlos.idade = 31;

const leticia = new pessoa();
leticia.nome = 'Letica A';
leticia.idade = 29;

console.log(carlos);
console.log(leticia);

carlos.descrever();
leticia.descrever();
*/

//Outra forma usando o metodo construtor 

class pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

     //função
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const carlos = new pessoa ('Carlos', 31);
const leticia = new pessoa ('Leticia', 29);
const bernardo = new pessoa ('Bernardo', 2);

carlos.descrever();
leticia.descrever();
bernardo.descrever();

console.log(carlos);
console.log(leticia);
console.log(bernardo);

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e  ${p1.nome} tem a mesma idade`);
    }
}

const fatima  = new pessoa('Fatima', 55);
const ale = new pessoa('Alexandre', 53);

compararPessoas(fatima, ale);