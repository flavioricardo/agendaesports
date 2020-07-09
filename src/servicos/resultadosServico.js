import axios from "axios";

class ResultadosServico {
  obterResultados = () => {
    return axios.get(
      "https://my-json-server.typicode.com/flavioricardo/agendaesports/resultados"
    );
  };
}

export default new ResultadosServico();
