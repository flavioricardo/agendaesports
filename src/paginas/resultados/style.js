import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #272727;

  .ant-table-thead > tr > th {
    background: #000;
    border-color: #272727;
    border-radius: 0 !important;
    color: #f2f2f2;
    text-align: center;
  }

  .ant-table-tbody > tr > td {
    background: #272727;
    border-color: #000;
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

export { Container, Cell };
