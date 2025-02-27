// Métodod Importantes de Array
const frutas = ['banana', 'laranja', 'uva', 'morango']
console.log(frutas)

frutas.pop() // o método POP remove o último elemento do array
console.log(frutas)

frutas.push('manga') // o método PUSH adiciona um elemento no array
console.log(frutas)

frutas.shift() // o método SHIFT remove o primeiro elemento 
console.log(frutas)

frutas.unshift('limão') // o método UNSHIFT adiciona um elemento no primeiro indice(0) do array
console.log(frutas)

frutas.splice(2, 0, 'maçã', 'amora') // adicionando elementos com o método SPLICE
console.log(frutas) 

frutas.splice(2, 1) // removendo elemento com o método SPLICE
console.log(frutas)

const outrasFrutas = frutas.slice(2) // o método SLICE retorna um novo array
console.log(outrasFrutas)