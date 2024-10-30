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

//Função com switch case, muito parecido com if/else
async function getRandomBlock() {
  let random = Math.random();
  let result;
  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;

    case random < 0.66:
      result = "CURVA";
      break;

    default:
      result = "CONFRONTO";
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} Rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

//exemplo de function chains, funções que chamam outras funções
async function playRacingEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    //Sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    //rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "velocidade",
        diceResult1,
        character1.VELOCIDADE
      );

      await logRollResult(
        character2.NOME,
        "velocidade",
        diceResult2,
        character1.VELOCIDADE
      );
    }
    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        "manobrabilidade",
        diceResult1,
        character1.MANOBRABILIDADE
      );

      await logRollResult(
        character2.NOME,
        "manobrabilidade",
        diceResult2,
        character1.MANOBRABILIDADE
      );
    }
    if (block === "CONFRONTO") {
      powerResult1 = diceResult1 + character1.PODER;
      powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);

      await logRollResult(
        character1.NOME,
        "poder",
        diceResult1,
        character1.PODER
      );

      await logRollResult(
        character2.NOME,
        "poder",
        diceResult2,
        character1.PODER
      );

      if (
        (character2.PONTOS -=
          powerResult1 > powerResult2 && character2.PONTOS > 0 ? 1 : 0)
      ) {
        console.log(
          `${character1.NOME} Venceu o confronto! ${character2.NOME} perdeu um ponto!🐢"`
        );
        character2.PONTOS--;
      }

      if (powerResult2 > powerResult1 && character1.PONTOS > 0 ? 1 : 0) {
        character1.PONTOS--;
      }

      console.log(powerResult1 === powerResult2 ? "Empate!" : "");
    }

    //verificar quem ganhou"

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NOME} marcou um ponto!`);
      character1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.NOME} marcou um ponto!`);
      character2.PONTOS++;
    }

    console.log("--------------------");
  }
}

//declara vencedor
async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.NOME}: ${character1.PONTOS} pontos`);
  console.log(`${character2.NOME}: ${character2.PONTOS} pontos`);

  if (character1.PONTOS > character2.PONTOS)
    console.log(`\n🏆 ${character1.NOME} venceu a corrida! 🏆`);
  else if (character2.PONTOS > character1.PONTOS)
    console.log(`\n🏆 ${character2.NOME} venceu a corrida! 🏆`);
  else console.log("A corrida terminou empatada!");
}

//exemplo de função auto-invocável
(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} está começando...`
  );

  await playRacingEngine(player1, player2);
  await declareWinner(player1, player2);
})();
