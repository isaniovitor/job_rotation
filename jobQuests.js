// 2Q
let num = prompt("Digite um número:");
let a = 0, b = 1;

while (b <= num) {
  let c = a + b;
  a = b;
  b = c;
}

if (a == num || b == num) {
  console.log(`O número ${num} pertence à sequência de Fibonacci!`);
} else {
  console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
}

// 3Q
const _ = require('lodash');
const faturamento = require('./faturamento.json');

const menorValor = _.min(faturamento, 'valor').valor;
const maiorValor = _.max(faturamento, 'valor').valor;

const valores = faturamento.map((item) => item.valor).filter((valor) => valor > 0);
const media = _.mean(valores);
const diasAcimaDaMedia = valores.filter((valor) => valor > media).length;

console.log(`Menor valor: R$${menorValor.toFixed(2)}`);
console.log(`Maior valor: R$${maiorValor.toFixed(2)}`);

// 4Q
const faturamentoMensal = {
  "SP": 67836.43,
  "RJ": 36678.66,
  "MG": 29229.88,
  "ES": 27165.48,
  "Outros": 19849.53
};

let totalFaturamento = 0;

// Calcula o faturamento total
for (let estado in faturamentoMensal) {
  totalFaturamento += faturamentoMensal[estado];
}

// Calcula o percentual de representação de cada estado
for (let estado in faturamentoMensal) {
  let percentual = (faturamentoMensal[estado] / totalFaturamento) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}

// 5Q
let str = "Exemplo de string para inverter";
let strInvertida = "";

for (let i = str.length - 1; i >= 0; i--) {
  strInvertida += str[i];
}

console.log(strInvertida);