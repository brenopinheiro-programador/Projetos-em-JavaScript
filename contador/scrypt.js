
function contar(){
    let pnum = document.querySelector('input#inicio')
    let snum = document.querySelector('input#fim')
    let pas = document.querySelector('input#passo')
    let res = document.getElementById('res')
    if(pnum.value.length == 0 || snum.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossível contar!'        
        //alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let Ni = Number(pnum.value)
        let Nf = Number(snum.value)
        let Np = Number(pas.value)
        if(Np <= 0){
            alert('[Erro] Sem valor especificado! Considerando Passo = 1')
            Np = 1
        }
        if(Ni < Nf){
            //Contagem crescente
            for(let c = Ni; c <= Nf; c += Np){
                res.innerHTML += `${c} \u{1F449}`
            }       
        } else {
            //Contagem descrecente
            for(let c = Ni; c >= Nf; c -= Np){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}








