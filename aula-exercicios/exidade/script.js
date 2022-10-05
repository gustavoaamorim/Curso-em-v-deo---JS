function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoForm = document.getElementById('txtano')
    var res = document.getElementById('res')
    console.log('clicou')

    if (anoForm.value.length == 0 || anoForm.value > ano) {
        alert('ERRO! Verifique os dados e tente novamente!')
    } else {
        var fSex = document.getElementsByName('radgen')
        var idade = ano - Number(anoForm.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <=10) {
                //Criança
                img.setAttribute('src', 'menino.jpg')
            } else if (idade <25) {
                //Jovem
                img.setAttribute('src', 'homem-jovem.jpg')
            } else if (idade <55) {
                //Adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <=10) {
                //Criança
                img.setAttribute('src', 'menina.jpg')
            } else if (idade <25) {
                //Jovem
                img.setAttribute('src', 'mulher-jovem.jpg')
            } else if (idade <55) {
                //Adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}