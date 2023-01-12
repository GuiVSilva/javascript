function contar(){
  let inicio = document.getElementById('txtI')
  let fim = document.getElementById('txtF')
  let passo = document.getElementById('txtP')
  let res = document.getElementById('res')

  if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = 'Impossivel contar'
    //window.alert('[ERRO] Faltam dados')
  }else {
    res.innerHTML = 'Contando: <br> '
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if(p <= 0){
      window.alert('Passo invalido! Considerando PASSO 1')
      p = 1
    }

    if(i < f){
      //contagem crescente
      for(let c = i; c <= f; c+= p){
        res.innerHTML += ` ${c} \u{1f449}`
      }
    }else{
      //contagem regressiva
      for(let c = i; c >= f; c -= p){
        res.innerHTML += ` ${c} \u{1f449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}