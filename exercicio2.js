//5.2. Crie uma aplicação simples que faça uma busca no nosso banco de dados fake (let data) pelo nome do (retorno único) ou gênero (retorno em lista) é fornecido pelo cliente, envie como resposta para cada filme um objeto com título, gênero encontrado e ano de lançamento;

let data = [
    { titulo: "us", genero: "terror", ano: "2019" },
    { titulo: "transformers: O Lado Oculto da Lua", genero: ["ação", "sci-fi"], ano: "2011" },
    { titulo: "moonfall - ameaça lunar", genero: ['Aventura', "sci-fi"], ano: "2022" },
    { titulo: "casa gucci", genero: "drama", ano: "2021" },
    { titulo: "encanto", genero: ["animação", "musical"], ano: "2021" },
    { titulo: "Demon Slayer - Mugen Train", genero: ["ação", "fantasia"], ano: "2019" },
    { titulo: "O Último Suspiro", genero: ["drama", "sci-fi"], ano: "2019" },
    { titulo: "Suspiria", genero: "terror", ano: "1977" },
    { titulo: "Corpo Elétrico", genero: ["drama", "sci-fi"], ano: "2017" },
    { titulo: "Amour", genero: ["drama", "romance"], ano: "2012" },
    { titulo: "Ninho de Musaranho", genero: "terror", ano: "2014" },
    { titulo: "Colonia", genero: "suspense", ano: "2015" },
    { titulo: "Homem-Aranha: Sem Volta para Casa", genero: ["ação", "aventura"], ano: "2021" }
]

function buscarPorTitulo(entrada) {
    let filmesEncontrados = []
    entrada = entrada.toLowerCase()

    data.forEach(filme => {
        let titulo = filme.titulo.toLowerCase()
        if (titulo.includes(entrada)) {
            filmesEncontrados.push(filme)
        }
    })
    return filmesEncontrados
}


function buscarPorGeneros(entrada) {

    let listaGeneros = []
    entrada = entrada.toLowerCase()

    for (let filme of data) {
        if (typeof(filme.genero) == "string") {
            let generoEncontrado = (filme.genero).toLowerCase().includes(entrada);
            !!generoEncontrado ? listaGeneros.push(filme) : null;
        } else {
            let generoEncontradoArray = filme.genero.find(genero => genero.toLowerCase().includes(entrada))
            generoEncontradoArray != undefined ? listaGeneros.push(filme) : null
        }
    }
    return listaGeneros
}



function buscarFilmes(entrada) {
    if (typeof(entrada) == "string") {
        let porTitulo = buscarPorTitulo(entrada)
        let porGenero = buscarPorGeneros(entrada)
        console.log(porGenero)
    } else {
        console.log('Dados inválido')
    }
}
buscarFilmes("romance")


// let encontrarGenero = data.filter((estilo) => estilo.genero === "suspense");
// console.table(encontrarGenero);


// let encontrarTitulo = data.filter((nome) => nome.titulo === "Corpo Elétrico");
// console.table(encontrarTitulo);

// let encontrarFilme = data.filter((nome) => nome.titulo === "Homem-Aranha: Sem Volta para Casa");

// console.table(encontrarFilme);



//................................................................................
// let filtrarFilmes = data.filter((filmes) => filmes.genero.includes.(genero) === "scf-fi")
// console.table(filtrarFilmes)

// let filtrarGeneros = data.filter(function(filtro) {
//     return filtro.genero === "sci-fi";
// });
// console.table(filtrarGeneros);

//let encontrarRomance = data.filter((filme) => filme.genero === "romance");
//console.table(encontrarRomance);

//let filtrarRomance = data.filter(function(filtrar) {
//return filtrar.genero.includes === "romance";
//});

//console.table(filtrarRomance);

//function Cliente5(value) {
//     if (value.genero == "romance")
//         return value;
// }
// var encontrarGeneros = data.filter(estilo => estilo.genero.includes == "romance");
// encontrarGeneros.forEach(estilo => {
//     console.log(estilo)
// });


//...................................................................................
let hoje = new Date
let dataHoje = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};
let dataPesquisa = hoje.toLocaleDateString("pt-BR", dataHoje);
console.log(dataPesquisa);



//busca cliente1 = "Suspense";
//busca cliente2 = "Corpo Elétrico"
//busca cliente3 = "Homem-Aranha: Sem Volta para Casa"
//busca cliente4 = "ficção científica"
//busca cliente5 = "romance"