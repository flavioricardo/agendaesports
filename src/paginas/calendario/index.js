import React from "react";

import { Layout } from "antd";
const { Content } = Layout;

const Calendario = () => {
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
        Calendário
      </Content>
    </Layout>
  );
};

export default Calendario;
