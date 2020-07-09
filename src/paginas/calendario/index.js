import React from "react";

import { Layout, Calendar } from "antd";
const { Content } = Layout;

const Calendario = () => {
  return (
    <Layout className="site-layout">
      <Content
        className="site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 0,
        }}
      >
        <Calendar
          locale={{
            lang: {
              locale: "pt_BR",
              month: "Mês",
              year: "Ano",
              dateFormat: "DD/MM/YYYY",
              dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
            },
          }}
          style={{ padding: "0 10px" }}
        />
      </Content>
    </Layout>
  );
};

export default Calendario;
