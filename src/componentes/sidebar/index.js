import React, { useEffect, useState } from "react";

import Sider from "antd/lib/layout/Sider";
import { Menu, Space } from "antd";
import {
  HomeOutlined,
  ApartmentOutlined,
  TableOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import agendaeSports from "../../assets/agendaeSports.png";
import FreeFire from "../../assets/FreeFire.png";

import { Logo, Modalidade } from "./style";
import { useLocation, NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const { collapsed } = props;
  const location = useLocation();

  const [rotaAtual, setRotaAtual] = useState();

  useEffect(() => {
    if (location && location.pathname) setRotaAtual(location.pathname);
  }, [location]);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <NavLink to="/">
        <Logo>
          {!collapsed ? (
            <img src={agendaeSports} alt="Agenda eSports" />
          ) : (
            <HomeOutlined />
          )}
        </Logo>
        {!collapsed ? (
          <Modalidade>
            <img src={FreeFire} alt="Free Fire" />
          </Modalidade>
        ) : null}
      </NavLink>
      <Menu theme="dark" mode="inline">
        <Menu.Item
          key="1"
          icon={<ApartmentOutlined />}
          style={{ height: "auto", paddingTop: 15, paddingBottom: 15 }}
          className={rotaAtual === "/" && "ant-menu-item-selected"}
        >
          <Space direction="vertical" size="large" align="center">
            <NavLink to="/">Campeonatos</NavLink>
          </Space>
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<CalendarOutlined />}
          style={{ height: "auto", paddingTop: 15, paddingBottom: 15 }}
          className={rotaAtual === "/calendario" && "ant-menu-item-selected"}
        >
          <Space direction="vertical" size="large" align="center">
            <NavLink to="/calendario">Calendário</NavLink>
          </Space>
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<TableOutlined />}
          style={{ height: "auto", paddingTop: 15, paddingBottom: 15 }}
          className={rotaAtual === "/resultados" && "ant-menu-item-selected"}
        >
          <Space direction="vertical" size="large" align="center">
            <NavLink to="/resultados">Resultados</NavLink>
          </Space>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
