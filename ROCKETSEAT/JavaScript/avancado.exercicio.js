// Exercicio de Manipulação de Array

/*
Crie uma lista de compras que é inicialmente vazia
Adicione 5 itens à lista usando push().
Agora, semova o primeiro item da lista usalndo shift().
Imprima a lista final no console
*/

const listaParaCompras = [];
listaParaCompras.push("Arroz","Feijão","Pipoca","Café","Açúcar");
listaParaCompras.shift();
console.log(listaParaCompras);

/*
Você tem um array de numeros: [3,7,14,21,29,36,46]
Use a função find() para encontrar o primeiro número divisivel por 7
e o maior que 10
*/

/*
MINHA RESOLUÇÃO
const numeros = [3,7,14,21,29,36,46];
const numero1 = numeros.filter ((num) => num > 10);
const numero2 = numero1.find ((num) => num %7 === 0);

console.log(numero);
*/

const numeros = [3,7,14,21,29,36,46];
const numero1 = numeros.find ((num) => num > 10 && num %7 === 0);

console.log(numero1);

/*
Dado o array de numeros: [5,10,15,20,25,30,35,40].
Use a função filter() para criar um novo array que contenha
os numeros maiores que 20. 
*/

const quarenta = [5,10,15,20,25,30,35,40];

const vinte = quarenta.filter ((num) => num > 20);

console.log(vinte);

/*
Dada a String " Bom Dia, mundo ! ".
Remova os espaços em branco no inicio e no final da string
em seguida, divida a string em palavras.
*/

const frase = " Bom Dia, mundo ! "

const espaco = frase.trim().split(" ");

console.log(espaco);


/*
Dada a string: "O rato roeu a roupa do rei de Roma"
verifique se a string começa com a palavra "O" e termina 
com Roma.
*/

const rato = ("O rato roeu a roupa do rei de Roma");
const roma = rato.startsWith("O");
const rei = rato.endsWith("Roma");

console.log(roma);
console.log(rei);