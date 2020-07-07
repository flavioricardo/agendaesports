import React, { useState } from "react";

import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
const { Header } = Layout;

const Cabecalho = ({ onTrigger }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onClickCabecalho = (status) => {
    setCollapsed(!collapsed);
    onTrigger(!collapsed);
  };

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => onClickCabecalho(collapsed),
      })}
    </Header>
  );
};

export default Cabecalho;
