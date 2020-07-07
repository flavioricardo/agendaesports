import React from "react";

import Sider from "antd/lib/layout/Sider";
import { Menu } from "antd";
import {
  HomeOutlined,
  ApartmentOutlined,
  TableOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import agendaeSports from "../../assets/agendaeSports.png";
import FreeFire from "../../assets/FreeFire.png";

import { Logo, Modalidade } from "./style";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const { collapsed } = props;

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
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
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<ApartmentOutlined />}>
          <NavLink to="/">Campeonatos</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<CalendarOutlined />}>
          <NavLink to="/calendario">Calendário</NavLink>
        </Menu.Item>
        <Menu.Item key="3" icon={<TableOutlined />}>
          <NavLink to="/resultados">Resultados</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
