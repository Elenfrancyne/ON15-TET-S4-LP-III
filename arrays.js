//arrays- Lista de objetos, ou elementos
// iterar a array para achar as coisas, um looping , percorrer o array
//let nome = { "Elen" }

let alunas = ['Adriana', 'Amitair', 'Ana Elisa', 'Elen']

//console.log(alunas[3])
//console.log(alunas.length)
let listaDeValores = new Array();
//console.log(listaDeValores);

let signos = Array.of('Aquario', 'Libra', 'Gemeos', 'Sagitario'); // outra forma de criar um array sem colchetes
//console.log(signos);

//let alfabeto = "abcedefghijklmnopqrstuwxyz";
//let arrayAlfabeto = alfabeto.split('o'); separa a array neste ponto
//let arrayAlfabeto = alfabeto.split(""); // sem espaço divide cada caractere em elementos separados

// outra forma
let alfabeto = "abcedefghijklmnopqrstuwxyz".toUpperCase().split("")
console.log(alfabeto[8])

let cursos = 'front back dados ux'
let listasDeCursos = cursos.split(" "); // com espaço separa cada palavra em elementos diferentes
// console.log(listasDeCursos);