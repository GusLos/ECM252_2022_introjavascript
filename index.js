

//---------------------------------------------------------------------------------------------------------------------------------------
//


function fatorial(n){
    if (n < 0) return Promise.reject("Valor não pode ser negativo")
    let res = 1
    for (let i = 2; i <= n; i++) res *= i
    return Promise.resolve(res)        //atalho para new Promise... 
}


//typescript????


//await só funciona com função async
async function chamadaComAsyncAwait(){
    try{
        // const f2 = await fatorial(-10)
        // console.log(f2)
        const f1 = await fatorial(10)
        console.log(f1)
        const f2 = await fatorial(-10)
        console.log(f2)
    }
    catch (e){
        console.log(e)
    }
}

chamadaComAsyncAwait()




// function chamadaComThenCatch(){
//     fatorial(10)
//     .then(res => console.log(res))
//     .catch(erro => console.log(erro))

//     fatorial(-10)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(erro => console.log(erro))
// }

// chamadaComThenCatch()











//com async a função devolve uma promise.resolve , não um texto

// async function hello(nome){
//     return `Hello, ${nome}`
// }

// const promise = hello("Ana")
// promise.then(res => console.log(res))

//mesma coisa que a função de baixo



// function hello (nome){
//     return new Promise(function(resolve, reject){
//         resolve(`Hello ${nome}`)
//     })
// }

// hello("Pedro").then((res) => console.log(res))






//---------------------------------------------------------------------------------------------------------------------------------



/*
function calculoRapidinho (numero){
    return Promise.resolve ((numero * (numero + 1)) / 2)
}

calculoRapidinho(2).then(res => console.log(res))

*/








//1 + 2 + 3 + ... + n-1 + n
// function calculoDemorado (numero){  //sincrono
//     let res = 0
//     for (let i = 1; i <= numero; i++){
//         res += i
//     }
//     return res
// }
// const res = calculoDemorado(100)



// function calculoDemorado (numero){      //assincrona
//     return new Promise (function (resolve, reject) {
//         if (numero < 0)
//             reject ("Por favor, informe apenas valores positivos.")
//         let res = 0
//         for (let i = 1; i <= numero; i++)
//             res += i
//         resolve(res)
//     })
// }

// const res = calculoDemorado(100)
// //res.then((resultado) => console.log(resultado)).catch((erro) => console.log("Falhou: "+ erro))
// res
// .then((resultado) => console.log(resultado))
// .catch((erro) => console.log("Falhou: "+ erro))

// const res2 = calculoDemorado(-1)
// res2
// .then((resultado) => console.log(resultado))
// .catch((erro) => console.log("Falhou: "+ erro))




//------------------------------


// const fs = require('fs')
// //função callback       //função chamada no futuro ?
// const abrirArquivo = function (nomeArquivo){
//     const exibirConteudo = function (erro, conteudo){
//         if (erro) {
//             console.log(`Deu erro: ${erro}`)
//             //console.log('Deu erro ' + erro)
//         }
//         else {
//             let fd
//             console.log(`Conteudo: ${conteudo.toString()}`)

//             const triplo = +conteudo.toString() * 3
//             const finalizar = (erro) => {
//                 if (erro)
//                     console.log("Erro ao salvar o triplo")
//                 else    
//                     console.log("Salvou com sucesso")
//                 fs.close(fd)
//             }
//             fd = fs.writeFile('triplo.txt', triplo.toString(), finalizar)
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
// }

// abrirArquivo("arquivo.txt")         //inferno de callback




// setTimeout (function (){
//     console.log("Dentro da timeout")
// },0)//espera 0 milisegundos

// const umSegundoNoFuturo = new Date().getTime() + 1000
// while (new Date().getTime() <= umSegundoNoFuturo);
// console.log("Fora da timeout")







//processamento assincrono

// function demorada () {
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }


// const a = 2 + 3
// const b = 5 + 9

// setTimeout(function(){
//     const d = demorada()
//     console.log(d)
// }, 500)      //espera 500 milisegundos

// const e = a + b
// console.log(e)












// function demorada () {
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }


// const a = 2 + 3
// const b = 5 + 9
// const d = demorada()        //precessamento bloqueante
// const e = a + b + 2
// console.log(e)





//precessamento sincrono?

// console.log('Eu sou primeiro')
// console.log('Agora sou eu...')
// console.log('Sou o ultimo...')




//----------------------------------------------------------------------------------------------------------------

//armazenar função em JSON


// const calc = {
//     soma: (a, b) => a + b,
//     subtracao: function (a, b) {return a - b}
// }

// calc.soma = (a, b, c) => a + b + c      //independente de calc ser let ou const, pois afeta calc não soma

// console.log(calc.soma(2,3,4))
// console.log(calc.subtracao(2,3))





// //abreviação "JSON"
// const nome = 'João'
// const idade = 20
// const pessoa = {
//     nome: nome,
//     idade: idade        // pode omitir parte do JSON ficando :    pessoa = {nome, idade}
// }







//coleção - o que sta em [], para acessar tem que usar [0] (número)



// let c = {
//     cnpj: 22112211000145,
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 122,
//         bairro: "Vila A"
//     },
//     veiculos: [
//         {
//             marca: "Ford",
//             modelo: 'Ka',
//             ano: 1995,
//             revisoes: [
//                 {
//                     data: '14/02/1996',
//                     consultor: 'Fábio'
//                 },
//                 {
//                     data: '15/03/1997',
//                     consultor: 'João'
//                 }
//             ]
//         },
//         {
//             marca: 'Volks',
//             modelo: "Nivus",
//             ano: 2020
//         },
//         {
//             marca: 'Chevrolet',
//             modelo: 'Onix',
//             ano: 2022
//         }
//     ]
// }


// console.log(c.veiculos[0].revisoes[1].consultor)





// let p = {
//     nome: "Maria",
//     idade: 19,
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 122
//     }
// }

// console.log(p.endereco.logradouro)
// console.log(p['endereco']['numero'])
// console.log(p.endereco['logradouro'])
// console.log(p['endereco'].numero)
////pode usar os dois jeitos





// //par chave(nome variavel, sempre string, n numero) e valor

// let pessoa = {
//     nome: "José",
//     idade: 17
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])




//----------------------------------------------------------------------------------------------------------------


//JSON  Javascript Object Notation



// function eAgora(){
//     let cont = 1
//     function f1 (){
//         console.log(cont)
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     //isso é um objeto JSON
//     return {f1, f2}
// }

////function f1 (){
////    console.log("ola")
////}


// let res = eAgora()
// res.f1()
// res.f2()

// //explicação - javascript tem varias passagens, faz uma passagem e realiza não faz as ordens, 
// //só guarda as declarações na tabela de simbolos, na segunda as execuções são realizadas, realiza 
// //a "atualização" das variaveis e depois executa a função (nesse caso)





//----------------------------------------------------------------------------------------------------------------


// //devolver uma nova coleção 
// //que possui todos os elementos 
// //de v que fazem com que f produza true

// function filter (v, f){
//     let r = []
//     let x = 0
//     for (let i = 0; i < v.length; i++){
//         if (f(v[i])){
//             r[x] = v[i]
//             x++
//             //r.push(v[i])??    ai n precisa do x
//         }
//     }
//     return r
// }



// //[2]
// console.log(filter ([1, 2, 3, 4], e => e % 2 === 0))





// // produzir uma coleção nova que,
// // para cada elemento de v[i] possui o valor
// // resultante de f(v[i])

// function map (v, f){
//     let r = []
//     for (let i = 0; i < v.length; i++){
//         r[i] = f(v[i])          //ou
//         //r.push(f(v[i]))
//     }
//     return r
// }


// //[4, 3]
// console.log(map(['abcd', 'abc', 'abcde', 'a'], e => e.length))




//----------------------------------------------------------------------------------------------------------------




//closure
// function f (){
//     let nome  = "João"
//     function g () {
//         console.log(nome)
//     }
//     g()
// }

// f()










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