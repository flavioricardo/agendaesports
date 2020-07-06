import React from "react";

import { Layout } from "antd";
const { Content } = Layout;

const Campeonatos = () => {
  return (
    <Layout className="site-layout">
      <Content>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          Campeonatos
        </div>
      </Content>
    </Layout>
  );
};

export default Campeonatos;
