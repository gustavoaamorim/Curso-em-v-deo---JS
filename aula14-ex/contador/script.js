function contar() {
    let inicio = document.getElementById('inicio')
    let final = document.getElementById('final')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    
    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Dados incompletos!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value) 
        let f = Number(final.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO=1')
            p = 1
        }

        if (i < f) {
            //contagem crescente
            for (var c = i; c<=f; c+=p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }  
        } else {
            //contagem decrescente
            for (let c = i; c >= f; c-= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    } 
    
}