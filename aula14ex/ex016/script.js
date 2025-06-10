function contar() {
    var inicio = Number(document.getElementById("ini").value);
    var fim = Number(document.getElementById("fim").value);
    var passo = Number(document.getElementById("passo").value);
    var res = document.getElementById("res");

    if (inicio == "" || inicio == null) {
        res.innerHTML = "Impossível contar!";
        return
    }
    if (passo == 0 || passo == "") {
        alert("Passo inválido! Considerando PASSO 1")
        passo = 1
    }

    res.innerHTML = "Contando: <br>"
    res.innerHTML += `${inicio} `;

    if (inicio < fim) {
        while (inicio <= fim) {
            var contador = (inicio += passo);
            if (contador <= fim) {
                res.innerHTML += `👉 ${contador}`;
            }
        }
    }
    else {
        while (inicio >= fim) {
            var contador = (inicio -= passo);
            if (contador >= fim) {
                res.innerHTML += `👉 ${contador}`;
            }
        }
    }

    res.innerHTML += "👉 🏁";
}
