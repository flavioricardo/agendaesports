import React from "react";

import { Container, Cell } from "./style";

import { Layout, Table } from "antd";
const { Content } = Layout;

const columns = [
  {
    title: "Posicao",
    dataIndex: "posicao",
    key: "posicao",
    render: (text) => <Cell>{text}</Cell>,
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

const data = [
  {
    posicao: "1",
    time: "Vivo Keyd",
    pontuacao: "543 pts",
  },
  {
    posicao: "2",
    time: "INTZ",
    pontuacao: "533 pts",
  },
  {
    posicao: "3",
    time: "Corinthians Free Fire",
    pontuacao: "408 pts",
  },
  {
    posicao: "4",
    time: "B4",
    pontuacao: "404 pts",
  },
  {
    posicao: "5",
    time: "RED Canids Kalunga",
    pontuacao: "386 pts",
  },
  {
    posicao: "6",
    time: "LOUD",
    pontuacao: "342 pts",
  },
  {
    posicao: "7",
    time: "Santos HotForex e-Sports",
    pontuacao: "341 pts",
  },
  {
    posicao: "8",
    time: "Fear",
    pontuacao: "331 pts",
  },
  {
    posicao: "9",
    time: "Los Grandes",
    pontuacao: "321 pts",
  },
  {
    posicao: "10",
    time: "FURIA",
    pontuacao: "290 pts",
  },
  {
    posicao: "11",
    time: "Black Dragons",
    pontuacao: "272 pts",
  },
  {
    posicao: "12",
    time: "God E-Sports",
    pontuacao: "272 pts",
  },
  {
    posicao: "13",
    time: "Team Liquid",
    pontuacao: "253 pts",
  },
  {
    posicao: "14",
    time: "Cruzeiro eSports",
    pontuacao: "247 pts",
  },
  {
    posicao: "15",
    time: "paiN Gaming",
    pontuacao: "226 pts",
  },
  {
    posicao: "16",
    time: "KaBuM! e-Sports",
    pontuacao: "222 pts",
  },
  {
    posicao: "17",
    time: "Team Rush",
    pontuacao: "213 pts",
  },
  {
    posicao: "18",
    time: "SS E-Sports",
    pontuacao: "202 pts",
  },
];

const Resultados = () => {
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
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered={false}
          />
        </Container>
      </Content>
    </Layout>
  );
};

export default Resultados;
