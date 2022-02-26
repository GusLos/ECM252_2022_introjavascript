
//  () => {}

// const hello = () => console.log("Hello")        // ou const hello = () => {console.log("Hello")} 
// hello()

//pode emitir as chaves desde que tenha apenas uma função e não precisa usar return
//quando tem chave precisa necessariamente de return 

// de:
// const dobro = (n) => {
//     return 2*n
// }
//para:
// const dobro = (n) => n*2
// console.log(dobro(5))






// const triplo = function (n = 10) {   // valor padrão para parametros 
//     return n * 3
// }
// console.log(triplo(5))
// console.log(triplo())


// const dobro = function (n){
//     return 2*n
// }
// const resultado = dobro(6)
// console.log(resultado)


// function soma (a, b){
//     return a + b
// }
// const res = soma(2, 3)
// console.log(res)


// //definição da função

// function hello (){
//     console.log("oi")
// }

// //chamada da funcao
// //ou seja, ponto em que ela é colocada em execucao 
// hello()


// function hello (nome){
//     console.log("Oi, " + nome)
// }
// hello('Jose')






// const valores = [1, 2, 3, 4]
// const soma = valores.reduce ((acumulador, atual) => {
//     return acumulador + atual
// })
// console.log(soma)








// const nomes = [
//     'Ana Maria',
//     'Antonio',
//     'Rodrigo',
//     'Alex',
//     'Cristina'
// ]

//Encontrar todos os nomes que começam com a

// filter(funcao){
//     funcao()
// }

// arrow function           // usado para declarar função
// () => { }                // função sem nome 


// const apenasA = nomes.filter((n) => {
//     return n.startsWith("A")
// })

// console.log(apenasA)

// obter [A, A, R, A, C]

// const mapeamento = nomes.map((nome) => {
//     return nome.charAt(0)
// })

// console.log(mapeamento)



// const resultado = nomes.every((n) => {
//     return n.startsWith("A")
// })
// console.log(resultado)








// const a = "ab cd"
// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])






// const v2 = [2, 'abc', true]

// const v1 = []
// //console.log(v1.length)
// v1[0] = 3.4
// v1[2] = 'abc'
// v1[10] = 2
// console.log(v1.length)

// for (let i = 0; i < v1.length; i++){
//     console.log(v1[i])
// }
// console.log(v1[5] === v1[6])




// =   atribuição
// ==  comparação (com coerção implícita)  [geralmente não usa]
// === comparação (sem coerção implícita, compara por tipo e valor)

// console.log(1 == 1)

//console.log(1 == '1')

// console.log(1 === 1)

//console.log(1 === '1')          // compara por tipo e depois por valor -> Number === Number ->  1 === 1 

// console.log(false == 0)

// console.log(true === 1)

// console.log(1 == ['1'])
// console.log(1 == [1])

// console.log(1 === [1])

// console.log(null == null)
// console.log(null == undefined)

// console.log(false == null)
// console.log(false == undefined)

// console.log([] == false)

// console.log([] == [])    // mesma propriedade porém oobjetos diferentes 
// console.log([] === [])

// const a = []
// const b = a              // apontam para o mesmo objeto
// console.log(a == b) 
// console.log(a === b)

//console.log([2] == [2])   // comparação == pode variar nos valores, as vezes true == true pode resultar em false 







// const n1 = 2
// const n2 = '3'
// //coerção implícita
// const n3 = n1 + n2 
// //n3 = n1 - n2
// //n3 = n1 * n2
// console.log(n3)
// //coerção explícita 
// const n4 = n1 + Number(n2) // == n4 = n1 + +n2
// console.log(n4)



// let a = null
// console.log(a)
// console.log(typeof(a))
// a = "abc"



// var idade = 18
// console.log ("Oi, " + nome)
// if (idade >= 18){
//    //var nome = "João"
//    let nome = "João"
//    console.log ("Parabéns João")
//    console.log ("Você pode dirigir")
// }
// console.log ("Até mais " + nome)




//var linguagem  = "javascript"
//console.log ("Aprendendo" + linguagem)
//variavel pode ser redeclarada
//linguagem = "java"
//console.log ("Aprendendo " + linguagem)



//const nome = 'José "" '
//const endereco = `Rua K, 12`
//const sexo = "F ' ' "
//const idade = 27

//let a = 2
//a = 3
//let nomeCompleto = "Joao Silva"
//a = 'abc'


//var c = 2 + 3
//c = 6
//var d = "abc"