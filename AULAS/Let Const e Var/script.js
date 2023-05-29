let nome = "Rafael" // Funciona no contexto em que ela foi criada
nome = "João"
console.log(nome)


var nomes = "Carlos" // Fuciona em qualquer contexto
nomes = "José"
console.log(nomes)

const nomesCons = "Telma"     //Não permite alterar o valor da variável
nomesCons = "Ricardo"
console.log(nomesCons)