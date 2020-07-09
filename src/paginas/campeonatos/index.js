import React, { useState, useEffect } from "react";
import campeonatosServico from "../../servicos/campeonatosServico";

import { Container } from "./style";

import { Layout, Table, Tag, Space } from "antd";
const { Content } = Layout;

const Campeonatos = () => {
  const colunas = [
    { title: "Data/Hora", dataIndex: "data", key: "data" },
    {
      title: "Tipo",
      dataIndex: "tipo",
      key: "tipo",
      render: (text) => <Tag color="orange">{text}</Tag>,
    },
    { title: "Nome", dataIndex: "titulo", key: "titulo" },
    { title: "Rodada", dataIndex: "rodada", key: "rodada" },
    {
      title: "Detalhes",
      key: "detalhes",
      render: (text, record) => <Space size="middle">Invite</Space>,
    },
  ];

  const [carregandoDados, setCarregandoDados] = useState(false);
  const [dados, setDados] = useState([]);

  const obterResultados = async () => {
    setCarregandoDados(true);
    const campeonatos = await campeonatosServico.obterCampeonatos();
    if (campeonatos && campeonatos.data) setDados(campeonatos.data);
    setCarregandoDados(false);
  };

  useEffect(() => {
    obterResultados();
  }, []);

  return (
    <Layout className="site-layout" style={{ height: "auto" }}>
      <Content
        className="site-layout-background"
        style={{
          height: "auto",
          margin: "24px 16px",
          padding: 0,
        }}
      >
        <Container>
          <Table
            rowKey="codigo"
            columns={colunas}
            dataSource={dados}
            pagination={false}
            bordered
            loading={carregandoDados}
            locale={{ emptyText: "Sem dados dos campeonatos vigentes" }}
            expandable={{
              childrenColumnName: "detalhes",
              expandedRowRender: (campeonato) =>
                `${campeonato.titulo} ${campeonato.rodada}`,
              rowExpandable: (campeonato) =>
                campeonato.detalhes && campeonato.detalhes.length,
            }}
          />
        </Container>
      </Content>
    </Layout>
  );
};

export default Campeonatos;
