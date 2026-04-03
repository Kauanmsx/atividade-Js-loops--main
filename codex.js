/*1. Uma empresa está desenvolvendo um sistema simples para testar a exibição de dados no O desenvolvedor precisa garantir que os números de 1 até 10 sejam exibidos
corretamente, em ordem crescente, como forma de validar a lógica inicial do sistema
Desenvolva um algoritmo utilizando a estrutura for que exiba os números de 1 a 10 no console*/


for (let i = 1; i<= 10; i++){
    console.log(1);
} 

 2. /*Uma escola deseja criar uma funcionalidade para ajudar alunos a estudarem matemática
básica. O sistema deve ser capaz de gerar automaticamente a tabuada de um número. Utilize
a estrutura for para construir a tabuada de 1 a 10 de um número definido no código. */

const numero = 7; 
for (let i = 1; i<= 10; i++ ){
    console.log(numero + " x " + i + " = " + (numero * i));
}

 /* 3. Um sistema financeiro precisa calcular a soma de valores sequenciais para simular um
acumulador de pequenas transações. Utilize a estrutura while para calcular e exibir a soma
dos números de 1 a 100.*/

let i = 1;
let soma = 0;

while (i <= 100) {
  soma += i;
  i++;
}

console.log("Soma total: " + soma);

/* 4. Um sistema precisa identificar apenas valores pares dentro de um intervalo numérico para
aplicar regras específicas. Utilize a estrutura while para exibir todos os números pares de 0 a
20. */

let i = 0;

while (i <= 20) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

/*5. Um sistema de lançamento precisa realizar uma contagem regressiva antes de iniciar uma
operação crítica. Utilize a estrutura do...while para exibir números de 10 até 1 no console. */
 
let i = 10;
 
do {
    console.log (i);
     i--;
} while (i >= 1);  


/*6. Um sistema armazena informações de um usuário em formato de objeto e precisa exibir
todas as suas propriedades e valores. Utilize a estrutura for...in para percorrer um objeto e 
exibir suas propriedades e valores no console. */

const usuario = {
  nome: "kauan marinho",
  idade: 20,
  curso: "sistemas de informação"
  matricula: 12345
}; 
  for (let propriedade in usuario) {
     console.log(propriedade + ": " + usuario[propriedade]);
}

/*7. Um sistema educacional precisa calcular a média das notas de um aluno armazenadas em
um array. Crie um algoritmo que percorra o array e calcule a média dos valores.*/

const notas = [7, 8.5, 6, 9, 7.5];
let total = 0;

for (let i = 0; i < notas.length; i++) {
  total += notas[i];
}

const media = total / notas.length;
console.log("Média: " + media.toFixed(2));

/*8. Um sistema de análise numérica precisa filtrar apenas números ímpares dentro de um
intervalo para aplicar uma regra específica. Desenvolva um algoritmo que exiba apenas os
números ímpares de 1 a 50.*/

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

/*9. Um sistema precisa exibir uma contagem regressiva antes de encerrar uma execução
automaticamente. Crie um algoritmo que simule um contador regressivo de 10 até 0.*/

let i = 10;
 
do {
    console.log (i);
     i--;
} while (i >= 0); 