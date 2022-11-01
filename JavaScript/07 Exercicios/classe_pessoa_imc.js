/* Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC
(IMC = peso /(altura * altura ));
Instancie uma pessoa chamada jose que tenha 70 kg de peso e 1,75 de altura 
e peça jose para dizer o valor do seu imc
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

   calcImc(){
        return this.peso/ (this.altura * this.altura) 
   }   
   
   classifiqueImc(){
     const imc = this.calcImc();
     if (imc < 18.5) {
        return'Abaixo do Peso';
    } else if (imc >= 18.5 && imc < 25) {
       return 'Peso Normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do Peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Morbita';
    }

   }
    
}
const jose = new Pessoa ('jose', 70, 1.75);
console.log(jose.calcImc());
console.log(jose.classifiqueImc());

/*
class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function descreverPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`);
}

const renan = new Pessoa('Renan', 30);
console.log(descreverPessoa(renan));
*/