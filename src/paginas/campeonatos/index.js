import React, { useState, useEffect } from "react";
import campeonatosServico from "../../servicos/campeonatosServico";

import { Container } from "./style";

import { UpCircleFilled, DownCircleFilled } from "@ant-design/icons";

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
    <Layout className="site-layout">
      <Content
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
              expandIconColumnIndex: 4,
              expandedRowRender: (campeonato) =>
                `${campeonato.titulo} ${campeonato.rodada}`,
              rowExpandable: (campeonato) =>
                (campeonato &&
                  campeonato.detalhes &&
                  campeonato.detalhes.length) === true,
              expandIcon: ({ aberto, onExpand, record }) =>
                aberto ? (
                  <Space>
                    <UpCircleFilled
                      style={{ color: "#F79E19" }}
                      onClick={(e) => onExpand(record, e)}
                    />
                  </Space>
                ) : (
                  <Space>
                    <DownCircleFilled
                      style={{ color: "#F79E19" }}
                      onClick={(e) => onExpand(record, e)}
                    />
                  </Space>
                ),
            }}
          />
        </Container>
      </Content>
    </Layout>
  );
};

export default Campeonatos;
