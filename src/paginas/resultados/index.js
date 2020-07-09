import React, { useEffect, useState } from "react";
import resultadosServico from "../../servicos/resultadosServico";

import { Container, Cell, Vazio, Logo } from "./style";

import { Layout, Table, Select } from "antd";

import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Option } from "antd/lib/mentions";

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

const renderTime = (text, item) => {
  return (
    <>
      <Logo src={item.imagem} /> {text}
    </>
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
      render: (text, item) => renderTime(text, item),
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

  const campeonatos = [{ codigo: 1, titulo: "C.O.P.A. FREE FIRE" }];

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
          <Select
            placeholder="Selecione um campeonato"
            style={{ marginBottom: 15 }}
          >
            {campeonatos.map((campeonato) => (
              <Option key={campeonato.codigo}>{campeonato.titulo}</Option>
            ))}
          </Select>
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
