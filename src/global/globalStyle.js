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
    .ant-menu-item {
        border-bottom: 1px solid #000;
        margin: 0 !important;
    }
    .ant-menu-item a, .ant-menu-item a:hover {
        color: #FFFFFFA6;
    }
    .ant-menu-item-selected {
        border-bottom: 1px solid #272727;
    }
    .ant-menu-dark .ant-menu-item-selected, .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
        background: #000;
        color: #F79E19;
    }
    .ant-menu-item-selected a, .ant-menu-item-selected a:hover, .ant-menu-dark .ant-menu-item-selected .anticon {
        color: #F79E19;
    }

    .layout-background .site-layout {
        background: #000;
    }
    .site-layout-background {
        background: #272727;
    }

    .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {
        border-color: #F79E19;
        border-right-color: #F79E19;
        color: #F79E19;
    }
    .ant-radio-button-wrapper:hover {
        color: #F79E19;
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled), .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
        border-color: #F79E19;
        border-left-color: #F79E19;
        color: #F79E19;
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
        border-color: #F79E19;
        color: #F79E19;
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
        background-color: #F79E19;
    }
    .ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-today {
        border-color: #F79E19;
    }
`;
