[README (1).md](https://github.com/user-attachments/files/26472129/README.1.md)
# Exercícios Práticos — Estruturas de Repetição em JavaScript

Coleção de exercícios práticos para fixar o uso das estruturas de repetição `for`, `while`, `do...while` e `for...in` no JavaScript.

---

## Estruturas abordadas

| Estrutura | Uso recomendado |
|-----------|----------------|
| `for` | Quando se sabe quantas repetições serão feitas |
| `while` | Quando a repetição depende de uma condição |
| `do...while` | Quando o bloco deve executar ao menos uma vez |
| `for...in` | Para percorrer propriedades de um objeto |

---

## Exercícios

### 1. Números de 1 a 10 — `for`

Exibe os números de 1 a 10 no console em ordem crescente.

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

---

### 2. Tabuada de um número — `for`

Gera automaticamente a tabuada de 1 a 10 de um número definido no código.

```js
const numero = 7;

for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}
```

---

### 3. Soma de 1 a 100 — `while`

Calcula e exibe a soma acumulada dos números de 1 a 100.

```js
let i = 1;
let soma = 0;

while (i <= 100) {
  soma += i;
  i++;
}

console.log("Soma total: " + soma);
```

> Resultado esperado: `Soma total: 5050`

---

### 4. Números pares de 0 a 20 — `while`

Exibe apenas os números pares dentro do intervalo de 0 a 20.

```js
let i = 0;

while (i <= 20) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}
```

---

### 5. Contagem regressiva de 10 a 1 — `do...while`

Realiza uma contagem regressiva de 10 até 1, executando o bloco ao menos uma vez.

```js
let i = 10;

do {
  console.log(i);
  i--;
} while (i >= 1);
```

---

### 6. Percorrer objeto com `for...in`

Percorre todas as propriedades de um objeto e exibe chave e valor.

```js
const usuario = {
  nome: "Ana",
  idade: 22,
  curso: "Desenvolvimento Web",
  matricula: "2024001"
};

for (let propriedade in usuario) {
  console.log(propriedade + ": " + usuario[propriedade]);
}
```

---

### 7. Média de notas — `for`

Percorre um array de notas e calcula a média aritmética.

```js
const notas = [7, 8.5, 6, 9, 7.5];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

const media = soma / notas.length;
console.log("Média: " + media.toFixed(2));
```

---

### 8. Números ímpares de 1 a 50 — `for`

Filtra e exibe apenas os números ímpares dentro do intervalo de 1 a 50.

```js
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
```

---

### 9. Contador regressivo de 10 a 0 — `while`

Simula um contador regressivo de 10 até 0.

```js
let i = 10;

while (i >= 0) {
  console.log(i);
  i--;
}

console.log("Execução encerrada.");
```

---

## Como executar

Você pode rodar qualquer exercício de três formas:

**1. No navegador (DevTools)**
- Abra o Chrome ou Firefox
- Pressione `F12` → aba **Console**
- Cole o código e pressione `Enter`

**2. Com Node.js**
```bash
node nome-do-arquivo.js
```

**3. Em editores online**
- [playcode.io](https://playcode.io)
- [jsfiddle.net](https://jsfiddle.net)
- [codepen.io](https://codepen.io)

---

## Conceitos-chave

- **Inicialização** — define o ponto de partida do contador (`let i = 0`)
- **Condição** — determina até quando o laço continua (`i < 10`)
- **Incremento/Decremento** — atualiza o contador a cada volta (`i++` / `i--`)
- **Operador módulo `%`** — retorna o resto da divisão; usado para verificar par/ímpar

---

## Autor

**Kauan Marinho**
Estudante de Análise e Desenvolvimento de Sistemas
