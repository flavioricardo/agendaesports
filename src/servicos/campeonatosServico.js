import axios from "axios";

class CampeonatosServico {
  obterCampeonatos = () => {
    return axios.get(
      "http://my-json-server.typicode.com/flavioricardo/agendaesports/campeonatos"
    );
  };
}

export default new CampeonatosServico();
