function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector("div#res");

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var genero = "";

        var img = document.createElement("img");
        img.setAttribute("id", "foto");

        if (fsex[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "./images/bb-M.jpg");
            } else if (idade < 21) {
                img.setAttribute("src", "./images/jovem-M.jpg");
            } else if (idade < 50) {
                img.setAttribute("src", "./images/adulto-M.jpg");
            } else {
                img.setAttribute("src", "./images/idoso-M.jpg");
            }
        } else {
            genero = "Mulher";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "./images/bb-F.jpg");
            } else if (idade < 21) {
                img.setAttribute("src", "./images/jovem-F.jpg");
            } else if (idade < 50) {
                img.setAttribute("src", "./images/adulta-F.jpg");
            } else {
                img.setAttribute("src", "./images/idosa-F.jpg");
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br>`;
        res.appendChild(img)
    }
}
