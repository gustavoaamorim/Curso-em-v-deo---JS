function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >=0 && hora < 12) {
        img.src = 'manhã.jpg'
        document.body.style.background = '#bec7ce'
    } else if (hora >=12 && hora <18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#df933f'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#022044'
    }
}
