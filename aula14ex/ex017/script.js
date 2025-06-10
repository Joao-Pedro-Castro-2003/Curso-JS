function tabuada() {
    var num = Number(document.getElementById("num").value);
    var arr = []
    var select = document.getElementById("tabuada");
    
    select.innerHTML = ""; //reseta os options para não juntar 2 ou mais tabuadas

    for (i = 0; i <= 10; i++){
        var resultado = `${num} X ${i} = ${num * i}`;
        arr.push(resultado);

        const opcao = document.createElement("option");
        opcao.value = num * i;
        opcao.text = resultado;
        select.appendChild(opcao);
    }
}