const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];
const alunas = ['dayane', 'Renata', 'Amanda', 'Brenda', 'Aline']

//filter ele busca e retorna todos os elementos encontrados, em forma de listas, e como um filtro dos elementos, trazendo todos os elementos verificados e não modifica o original
//find = encontrar um determinado elemento no array e não modifica o original
// map cria uma array nova , utilizada executa uma ação para cada elemento no determinado metodo, rtrazendop uma renova, não faz verificação 

//Métodos de Iteração
const encontrarElemento = numeros.find((elemento) => elemento == 1)
console.log(encontrarElemento);

const filtrarPor = numeros.filter((elemento) => elemento == 4)

console.log(filtrarPor)

const executarTodos = numeros.map(elemento => elemento * 3)
console.log(executarTodos)

const verTodos = numeros.forEach(elemento => console.log(elemento * 4))
console.log(verTodos)

const somarTodos = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual)
console.log(somarTodos)
console.log(numeros)


// exemplos
console.log(alunas.find((elemento) => elemento == 'Renata'));
console.log(numeros.filter((elemento) => elemento == 3))
console.log(numeros.map((elemento) => elemento * 2))
console.log(numeros)

// function calcular (funcaoComArgumento){
//     let numero1= 3
//     let numero2= 6
//     return funcaoComArgumento(numero1, numero2)
// }


//métodos Gerais de array
//concat concatena o elemento, e retorna uma nova array sem modificar a original(idepotencia)
//push, altera a array original adiciona um ou mais elementos no final da array
//pop remove o ultimo elemento, definitivamente, modificando a aray original, nÃo recebe parametros
//shift remove o primeiro elemento, definitivamente, modificando a aray original, nÃo recebe parametros
//unshift, altera a array original adiciona um ou mais elementos no inicio da array
// corta a array num determinado espaço com começo e fim, porém não definitivamente, o mesmo que salvar como
//splice altera o conteudo de uma lista adicionando novos elementos  e removendo elementos antigos
//indexof localiza elemento, mostra seu indice
const arrayConcatenada = numeros.concat([1, 2, 6], 3, 'café', { nome: "lilit" })
console.log(arrayConcatenada)
console.log(numeros)

const adicionaNoFinal = numeros.push(7, 9, 3)
console.log(adicionaNoFinal)
console.log(numeros)

const removeUltimo = numeros.pop()
console.log(removeUltimo)
console.log(numeros)

const removePrimeiro = numeros.shift()
console.log(removePrimeiro)
console.log(numeros)
console.log('__________________________________________________')
const adicionaNoInicio = numeros.unshift(8, 4, 6)
console.log(adicionaNoFinal)
console.log(numeros)
console.log('__________________________________________________')
const copiaParte = numeros.slice(2, 5)
console.log(copiaParte)
console.log(numeros)
console.log('__________________________________________________')
const removeAdiciona = numeros.splice(2, 5, "café", [26, 65, 328]) //  primeiro parametro inicio da remoção, segundo parametro quantidade de elementos retirados, terceiro parametro adiciona elemento
console.log(removeAdiciona)
console.log(numeros)
console.log('__________________________________________________')
const localizaIndice = numeros.indexOf(2)
console.log(localizaIndice)
console.log(numeros)