import styled from "styled-components";

const Container = styled.div`
  .ant-table-thead > tr > th {
    background: #000;
    border-radius: 0;
    color: #f2f2f2;
    text-align: center;
  }

  .ant-table-container table > thead > tr:first-child th:first-child,
  .ant-table-container table > thead > tr:first-child th:last-child {
    border-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .ant-table-tbody > tr > td {
    background: #272727;
    color: #f2f2f2;
    text-transform: uppercase;
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: #000;
    color: #f2f2f2;
  }
`;

const Cell = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const Vazio = styled.span``;

export { Container, Cell, Vazio };
