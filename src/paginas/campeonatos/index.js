import React, { useState, useEffect } from "react";
import moment from "moment";
import campeonatosServico from "../../servicos/campeonatosServico";

import { Container, Logo } from "./style";
import Detalhes from "./detalhes";

import { UpCircleFilled, DownCircleFilled } from "@ant-design/icons";

import { Layout, Table, Tag, Space } from "antd";
const { Content } = Layout;

moment.locale("pt-br");

const renderCampeonato = (text, item) => {
  return (
    <>
      <Logo src={item.imagem} /> {text}
    </>
  );
};

const Campeonatos = () => {
  const colunas = [
    {
      title: "Data/Hora",
      dataIndex: "data",
      key: "data",
      render: (text) => moment(text).format("DD/MM/YYYY HH:mm"),
      sorter: (inicio, fim) => {
        return moment(inicio.data) > moment(fim.data);
      },
      sortDirections: ["descend"],
    },
    {
      title: "Tipo",
      dataIndex: "tipo",
      key: "tipo",
      render: (text) => (
        <Tag
          color="orange"
          style={{ borderColor: "#F79E19", color: "#F79E19" }}
        >
          {text}
        </Tag>
      ),
    },
    {
      title: "Nome",
      dataIndex: "titulo",
      key: "titulo",
      render: (text, item) => renderCampeonato(text, item),
    },
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
            size="large"
            loading={carregandoDados}
            locale={{ emptyText: "Sem dados dos campeonatos vigentes" }}
            expandable={{
              expandIconColumnIndex: 4,
              expandedRowRender: (campeonato) => (
                <Detalhes campeonato={campeonato} />
              ),
              rowExpandable: (campeonato) =>
                campeonato?.detalhes?.length > 0 ?? false,
              expandIcon: ({ expanded, onExpand, record }) =>
                expanded ? (
                  <Space>
                    <UpCircleFilled
                      style={{ color: "#FFF" }}
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
