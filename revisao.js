 const professora = new Object()
 const lista = new Array()
 professora.nome = "Lilit"
     // professora.sobrenome = "Bandeira"
     // professora.cidade = "São Paulo"


 const aluna = {
     nome: {
         primeiro: "Gabriela",
         segundo: "Lemos"
     },
     _id: 1232541231234,
     idade: 20,
     cidade: {
         nascimento: "Palmas",
         viveu: ["São Paulo", "Salvador"]
     },
     interesses: ["música", "animais"],
     saudacao: () => console.log("Olá meninas"),
 };

 console.log(lista.length)
     // consola.log(aluna.cidade.viveu[1])

 //console.log(alula['interesse'][0])

 //desestruturar
 //  console.log(aluna)
 //  let { nome, _id } = aluna
 //  console.log(nome)
 //  console.log(aluna.nome.segundo)


 //  //métodos de data, mes e ano//

 //  let hoje = new Date()
 //      //  console.log(hoje)
 //  let dia = hoje.getDate()
 //  console.log(dia)
 //  let mes = hoje.getMonth()
 //  console.log(mes)
 //  let ano = hoje.getFullYear()
 //  console.log(hoje)
 //  console.log(`${dia}/${mes}/${ano}`)


 //  let objetoFormatacao = {
 //      weekday: "long",
 //      day: "numeric",
 //      month: "long",
 //      year: "numeric",
 //  }
 //  let dataFormatada = hoje.toLocaleDateString('pt-BR', options);
 //  console.log(dataFormatada)