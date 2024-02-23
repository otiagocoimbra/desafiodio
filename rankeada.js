// Definição da função para calcular o nível com base nas vitórias
function calcularNivel(vitorias, derrotas) {
    // Calculando o saldo de Rankeadas (vitórias - derrotas)
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Utilizando uma estrutura de decisão para determinar o nível com base no número de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retornando o saldo de vitórias e o nível do jogador
    return `O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de utilização da função
let vitorias = 75;
let derrotas = 25;
let resultado = calcularNivel(vitorias, derrotas);
console.log(resultado);