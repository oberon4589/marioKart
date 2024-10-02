const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

//retorna um número aleátorio de 1 a 6
async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

//exemplo de function chains, funções que chamam outras funções
async function playRacingEngine(character1, character20) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    //Sortear bloco
  }
}

//exemplo de função auto-invocável
(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} está começando...`
  );

  await playRacingEngine(player1, player2);
})();
