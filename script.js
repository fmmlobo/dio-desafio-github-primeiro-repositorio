/* Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20". */

num1 = 5
num2 = 5

function comparador() {
    num1 === num2 ? console.log('Os números num1 e num2 são iguais') : console.log('Os números num1 e num2 são diferentes');
}

function soma() {
    num1 + num2 >10 ? console.log('A soma dos numeros num1 e num2 é maior que 10') : console.log('A soma dos numeros num1 e num2 é menor que 10');
    num1 + num2 <20 ? console.log('A soma dos numeros num1 e num2 é menor do que 20') : console.log('A soma dos numeros num1 e num2 não é menor do que 20');
}


comparador()
soma()