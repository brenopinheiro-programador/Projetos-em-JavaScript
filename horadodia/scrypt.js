function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date() //Data atual.
    var hora = data.getHours() //Pega a hora atual.

    //var hora = 15 - Força a hora para mostrar o funcionamento dos outros momentos do dia.
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#d0cabe'
        msg.innerHTML = `Agora são ${hora} horas da manhã.`
    } else if(hora >= 12 && hora < 18) {
        //bom tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#fca12c'
        msg.innerHTML = `Agora são ${hora} horas da tarde.`
    } else {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#2f3859'
        msg.innerHTML = `Agora são ${hora} horas da noite.`
    }
}