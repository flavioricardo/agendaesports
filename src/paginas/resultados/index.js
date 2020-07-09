import React, { useEffect, useState } from "react";
import resultadosServico from "../../servicos/resultadosServico";

import { Container, Cell, Vazio } from "./style";

import { Layout, Table } from "antd";

import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const { Content } = Layout;

const VARIACAO = {
  UP: 1,
  DOWN: 0,
};

const renderPosicao = (text, item) => {
  const style = { color: "#F2F2F2" };
  let icon = <Vazio />;

  if (item.variacao === VARIACAO.UP) {
    style.color = "#F79E19";
    style.fontSize = 20;
    icon = <ArrowUpOutlined />;
  } else if (item.variacao === VARIACAO.DOWN) {
    style.color = "#7D7F80";
    style.fontSize = 16;
    icon = <ArrowDownOutlined />;
  }

  return (
    <Cell style={style}>
      {text} {icon}
    </Cell>
  );
};

const Resultados = () => {
  const colunas = [
    {
      title: "Posicao",
      dataIndex: "posicao",
      key: "posicao",
      render: (text, item) => renderPosicao(text, item),
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Pontuação",
      dataIndex: "pontuacao",
      key: "pontuacao",
      render: (text) => <Cell>{text}</Cell>,
    },
  ];

  const [carregandoDados, setCarregandoDados] = useState(false);
  const [dados, setDados] = useState([]);

  const obterResultados = async () => {
    setCarregandoDados(true);
    const resultados = await resultadosServico.obterResultados();
    if (resultados && resultados.data) setDados(resultados.data);
    setCarregandoDados(false);
  };

  useEffect(() => {
    obterResultados();
  }, []);

  return (
    <Layout className="site-layout">
      <Content
        style={{
          margin: "24px 16px",
          padding: 0,
          minHeight: 280,
        }}
      >
        <Container>
          <Table
            rowKey="posicao"
            columns={colunas}
            dataSource={dados}
            pagination={false}
            bordered
            loading={carregandoDados}
            locale={{ emptyText: "Sem dados do campeonato" }}
          />
        </Container>
      </Content>
    </Layout>
  );
};

export default Resultados;
