const ffesports = await (
  await fetch("https://www.ffesports.com.br/classificacao/")
).text();
const tabelaCopaff = new DOMParser().parseFromString(ffesports, "text/html");

const resultados = [];

tabelaCopaff
  .querySelectorAll(".tabela-copaff table tbody tr")
  .forEach((resultado, indice) => {
    const posicao = resultado.querySelector("td:nth-child(1)");
    const time = resultado.querySelector("td:nth-child(3)");
    const pontuacao = resultado.querySelector("td:nth-child(4)");

    if (posicao && time && pontuacao) {
      resultados[indice] = {
        posicao: posicao.innerHTML.trim().replace("º", ""),
        time: time.innerHTML.trim(),
        pontuacao: pontuacao.innerHTML.trim(),
      };
    }
  });

console.log(JSON.stringify(resultados));
