$("#btn").click(() => {
    let num1 = Number($("#num").val())
    let texto = ""

    for(let i = 0; i <= 10; i++){
        texto += `${num1} X ${i} = ${num1*i}\n`
    }

    $("#txtarea").val(texto)

})
