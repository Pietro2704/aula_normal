function Tabuada(numero, inicio=1, fim=10){

    let texto = ""

    for(let i = inicio; i <= fim; i++){
        texto += `${numero} X ${i} = ${numero*i}\n`
    }
    alert(texto)
}

Tabuada(3, 2, 6)

// Criei um comentario no github
