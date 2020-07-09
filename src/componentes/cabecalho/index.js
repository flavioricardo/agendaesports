import React, { useState } from "react";

import { Layout, Row, Col } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import { Data } from "./style";
const { Header } = Layout;

const Cabecalho = ({ onTrigger }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onClickCabecalho = (status) => {
    setCollapsed(!collapsed);
    onTrigger(!collapsed);
  };

  const now = new Date();

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <Row>
        <Col span={12}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => onClickCabecalho(collapsed),
            }
          )}
        </Col>
        <Data span={12}>
          {`${now.toLocaleDateString("pt-BR", {
            weekday: "long",
          })}, ${now.getDate()} de ${now.toLocaleDateString("pt-BR", {
            month: "long",
          })} de ${now.getFullYear()}`}
        </Data>
      </Row>
    </Header>
  );
};

export default Cabecalho;
