//implemente a lógica de caracteres válidos e retorne se a string é valida ou não.

var isValid = function(str){
    let re1 = /\{\}|\[\]|\(\)|^\s*$/;
    return re1.test(str);
}

console.log(isValid('[]'));