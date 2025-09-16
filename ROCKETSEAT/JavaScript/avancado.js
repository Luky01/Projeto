// 1 - Manipulação de Arrays - unshift(na frente) push(atras) shif(retirar)
const frutas = ["Maçã","Laranja"];

frutas.unshift("Acerola");
console.log(frutas);
frutas.shift();
console.log(frutas);

//

// 2 map, filter, reduce -> arrow function
const numeros = [1,2,3,4,5,6,8,9,10];

// find => reotrna o primeiro elemento do critério
const numeroPar = numeros.find((num) => num %2 === 0);

console.log(numeroPar);

// filter => retorna todos os elementos que batem o criterio
const numerosPares = numeros.filter((num) => num %2 === 0);

console.log(numerosPares);

//Manupulação de Strings

const frase = " Olá, Mundo!    ";
const palavras = frase.trim().split(" ");

console.log(frase);
console.log(palavras);

const frase2 = "JavaScrip é incrivel!";

console.log(frase2.startsWith("Java"));
console.log(frase2.endsWith("!"));

// Exetenções e tratamentos de erros
const idade = 15;
//( quando o Java encontra o erro, ele encerra a execução do programa )
// if (idade < 18) {
// throw new Error ("Você deve ter no minimo 18 anos")
//};

try {
 if (idade < 18) {
 throw new Error ("Você deve ter no minimo 18 anos");
}
} catch (error) {
console.log (error.message);
}

console.log("continuando o programa ...");

//Callback => função
function cumprimentar(nome, callback) {
  console.log("Ola " + nome);
  callback();
}
function mostrarSaudacao() {
  console.log("Como você está?");
}
cumprimentar("Lucas" ,mostrarSaudacao);

cumprimentar("Maria", function() {
  console.log("Tá tudo bem ?");
});

//Settimeout => depois de um tempo executa algo

function mostrarMensagem (){
  console.log ("Essa mensagem será exibida após 3 segundos");
}

setTimeout(mostrarMensagem, 3000);

//Promises
const promessa = new Promise((resolve, reject)=> {
  const condicao = false;
  if(condicao) {
    resolve("A condição é verdadeira");
  } else {
    reject("A condição é falsa");
  }
});

promessa.then((mensagem) => {
  console.log(mensagem);
})
.catch((erro) => {
  console.log(erro);
});

//Bibliotecas feitas que são "promise based"

const promese1 = Promise.resolve(3);
const promese2 = new Promise((resolve,reject) => {
  setTimeout(resolve, 2500, ["testando"]);
})

Promise.all([promese1,promese2]).then((valores) => console.log(valores));

//Async Await

async function obterValor (){
  const promessa = new Promise((resolve, reject)=> {
    setTimeout(() => resolve ("valor obtido"), 2000);
});

const valor = await promessa;
console.log(valor);
}

obterValor();

//JASON (JavaScript Object Notation)
//{nome: "teste"} => {"nome" : "teste"}
//Padroniza a comunicação
//front e back em uma linguagem só

const objeto = { nome: "João", idade: 30 };

const jasonString = JSON.stringify(objeto);

console.log(jasonString);
console.log(typeof jasonString);