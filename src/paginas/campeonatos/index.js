import React from "react";

import { Layout } from "antd";
const { Content } = Layout;

const Campeonatos = () => {
  return (
    <Layout className="site-layout">
      <Content
        className="site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        Campeonatos
      </Content>
    </Layout>
  );
};

export default Campeonatos;
