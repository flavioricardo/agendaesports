import React from "react";

import "antd/dist/antd.css";
import { Layout } from "antd";

import Sidebar from "./componentes/sidebar";
import Campeonatos from "./paginas/campeonatos";

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Campeonatos />
    </Layout>
  );
}

export default App;
