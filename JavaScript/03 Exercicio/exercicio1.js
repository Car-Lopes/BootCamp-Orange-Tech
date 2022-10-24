/*
Faça um algoritimo que dado as 3 notas tiradas por um aluno em um 
semestre da faculdade calcule e imprima a sua media 
e a classificação conforme a tabela abaixo. 

Media = (Nota1 + Nota 2 + Nota 3)/ 3;

Classificação: 
- Média menor que 5, Reprovação;
- Média entre 5 e 7, Recuperação;
- Media Acima de 7, Aprovado
*/

let n1 = 5;
let n2 = 5; 
let n3 = 10;

let media = (n1 + n2 + n3)/3;
console.log(media.toFixed(2))

if (media <= 5) {
    console.log('Reprovado')
} else if (media > 5 && media <= 7) {
    console.log('Recuperação')
} else {
    console.log('Aprovado')
}
