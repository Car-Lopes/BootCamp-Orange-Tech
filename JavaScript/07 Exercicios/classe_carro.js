/* Crie uma classe para representar carros.
Os carros possuem marca, uma cor e um gasto medio de combustivel por km rodados
Crie um metodo que dado a qtd de km e o preço do combustivel nos de o valor
gasto em reais para realizar este percurso
*/

class Veiculo {
    marca;
    cor;
    gstMedioPorKm;

    constructor(marca, cor, gstMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gstMedioPorKm = gstMedioPorKm;
    }

    calcGastoViagem(distanciaKm,precoCombustivel){
        return ((distanciaKm * this.gstMedioPorKm) * precoCombustivel) 
    }

}

const moto = new Veiculo ('Honda', 'Prata', 1/23);

console.log(moto);

console.log(moto.calcGastoViagem(50,5));

