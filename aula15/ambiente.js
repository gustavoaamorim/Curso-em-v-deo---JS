// arrays

let num = [5, 8, 4, 7, 9]

console.log(num)

console.log(`O vetor tem ${num.length} posições`) // .length retorna o tamanho do array

console.log(`O primeiro valor do vetor é ${num[0]}`) //num[0] retorna o valor que ocupa a posição 0

console.log(`A ordem crescente do vetor é ${num.sort()}`) //num.sort() ordena os elementos em ordem crescente

let pos = num.indexOf(8) //retorna a posição de um elemento
if(pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
