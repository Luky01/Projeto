
 //1 - Print-Fundamento
   console.log("Vai se FUDER")
   //

  //2 - Conversão
    const valorstring = '1,2,3,4';

  const valornumber = Number (valorstring);

  console.log(typeof valornumber);
/*
Objeto {}
Lista []
Null - Nulo
undefind
*/

  //

  //3 - manipulação de Satring
  const minhapalavra = ("Java é incrivel");

  const minhacaracter = minhapalavra.length;
  const minhapalavras = minhapalavra.split(" ").length;

  console.log (`O numero de caracter é: ${minhacaracter}`);
  console.log (`O numero de palavras é: ${minhapalavras}`);
  //

  
  //4 - loop
  const pessoas = ["Maria","João","Pedro","Gabriel","Carlos"];

  for (i = 0; i < pessoas.length; i++){

  console.log(pessoas[i]);
}
//

//5 - Funções de String e Math

function converterhora (horario24){
 //const hora = horario24.split (":") [0];//
 //const minuto = horario24.split (":") [1];//

 const [hora,minuto] = horario24.split(":");
 
 const hora12 = hora % 12 || 12;

let periodo = "AM";

 if (hora>12) {
  periodo = "PM"
 }
console.log(`${hora12}:${minuto} ${periodo}`)

}

converterhora("09:46");
converterhora("15:16");
converterhora("21:12");
//
