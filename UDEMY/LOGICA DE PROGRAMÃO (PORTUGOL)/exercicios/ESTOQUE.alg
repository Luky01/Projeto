algoritmo "CONTROLE DE ESTOQUE"
// Função :cadastrar produto no estoque
// Autor :  Lucas Braga Lima
// Data : 15/09/2025
// Seção de Declarações 
var
produto: caracter
quantidade: inteiro
repeticao: caracter

inicio
// Seção de Comandos

escreval("CONTROLE DE ESTOQUE")
escreval("--------------------")

escreval("Digite o nome do produto:")
leia(produto)

escreval("Digite a quantidade desse produto:")
leia(quantidade)

escreval ("Deseja continuar cadastrando produto? s/n")
leia(repeticao)
ENQUANTO repeticao = "s" FACA

escreval("Digite o nome do produto:")
leia(produto)

escreval("Digite a quantidade desse produto:")
leia(quantidade)

escreval ("Deseja continuar cadastrando produto? s/n")
leia(repeticao)

FIMENQUANTO

escreval("PRODUTOS CADASTRADOS COM SUCESSO")


fimalgoritmo
