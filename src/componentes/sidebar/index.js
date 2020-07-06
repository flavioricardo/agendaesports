import React, { useState } from "react";
import Sider from "antd/lib/layout/Sider";
import { Menu } from "antd";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(state) => setCollapsed(state)}
    >
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.Item key="9">Option 3</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
