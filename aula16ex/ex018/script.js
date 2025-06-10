let arrNum = [];
let res = document.getElementById("res");

function adicionar() {
    let num = Number(document.getElementById("num").value);
    let select = document.getElementById("lista");
    if (num == 0) {
        return alert("Insira um número!");
    } else if (num < 1 || num > 100) {
        return alert("Número inválido!");
    } else if (arrNum.includes(num)) {
        return alert("Número já foi adicionado!");
    }

    arrNum.push(num);

    const opt = document.createElement("option");
    opt.text = `valor ${num} adicionado`;
    select.appendChild(opt);

    res.innerHTML = "";
}

function finalizar() {
    if (arrNum.length == 0) {
        return alert("Adicione valore antes de finalizar!");
    }

    arrNum.sort();

    var menor = arrNum[0];

    var maior = arrNum[arrNum.length - 1];

    var soma = 0;
    arrNum.forEach((num) => {
        soma += num;
    }); 

    var media = soma / arrNum.length;

    res.innerHTML = `<p>Ao todo, temos ${arrNum.length} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}</p>`;
}
