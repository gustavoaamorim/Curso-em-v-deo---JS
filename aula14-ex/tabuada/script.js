function calcular() {
    let numero = document.getElementById('numtxt')
    let num = Number(numero.value)
    let res = document.getElementById('res')

    if (numero.value.length == 0) {
        alert('Por favor digite um número!')
    } else {
        let num = Number(numero.value)
        res.innerHTML = `A tabuada de ${num} é:<br>`
        
        for (i = 1; i<=10; i++) {
            console.log(`${num} x ${i} = ` + i*num)
            res.innerHTML += `${num} x ${i} = ${i*num}<br>`
        }//res.innerHTML = `A tabuada de ${num} é:<br>`
    }    
}  
