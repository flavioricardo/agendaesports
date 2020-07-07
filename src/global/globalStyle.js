import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        background: #000;
        color: #F2F2F2;
        font-family: 'Chakra Petch', sans-serif;
    }

    .ant-layout-header.site-layout-background {
        background: #272727;
    }
    .trigger {
        color: #FFF;
        cursor: pointer;
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        transition: color 0.3s;
    }
    .trigger:hover {
        color: #F79E19;
    }

    .logo {
        background: #000;
        height: 32px;
        margin: 16px;
    }
    .ant-layout-sider {
        background: #272727;
    }
    .ant-menu.ant-menu-dark {
        background: #272727;
    }
    .ant-menu-dark .ant-menu-item {
        height: 60px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .ant-menu-dark .ant-menu-item:first-child {
        margin-top: 0;
    }
    .ant-menu-dark .ant-menu-item-selected, .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
        background: #000;
    }
    .ant-menu-dark .ant-menu-item-selected .anticon, .ant-menu-dark .ant-menu-item-selected .anticon + span {
        color: #F79E19;
    }

    .layout-background .site-layout {
        background: #000;
    }
    .site-layout-background {
        background: #272727;
    }
`;
