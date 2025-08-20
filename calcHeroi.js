let saldoVitorias = subtrair(130, 17);
let nivel = "";

function subtrair(vitorias, derrotas) {
    return vitorias - derrotas;
}

if (saldoVitorias <= 10) {
    nivel = "Ferro";
} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel = "Bronze";
} else if (saldoVitorias >= 21 && saldoVitorias <= 30) {
    nivel = "Prata";
} else if (saldoVitorias >= 31 && saldoVitorias <= 80) {
    nivel = "Ouro";
} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Diamante";
} else if (saldoVitorias >= 91 && saldoVitorias <= 110) {
    nivel = "Radiante";
} else if (saldoVitorias >= 111) {
    nivel = "Imortal";
}

console.log("O Herói tem saldo de " + saldoVitorias + " vitórias e está no nível " + nivel);