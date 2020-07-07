import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import Cabecalho from "./componentes/cabecalho";
import Sidebar from "./componentes/sidebar";
import Campeonatos from "./paginas/campeonatos";
import Resultados from "./paginas/resultados";
import Calendario from "./paginas/calendario";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const onTriggerCabecalho = (status) => {
    setCollapsed(status);
  };

  return (
    <Layout className="ant-layout-has-sider" style={{ minHeight: "100vh" }}>
      <Sidebar collapsed={collapsed} />
      <Layout className="layout-background">
        <Cabecalho onTrigger={onTriggerCabecalho} />
        <Switch>
          <Route path="/" component={Campeonatos} exact />
          <Route path="/resultados" component={Resultados} />
          <Route path="/calendario" component={Calendario} />
        </Switch>
      </Layout>
    </Layout>
  );
}

export default App;
