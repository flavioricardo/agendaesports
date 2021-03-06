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
    text-align: center;
    text-transform: uppercase;
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: #000;
    color: #f2f2f2;
  }
`;

const Logo = styled.img`
  max-height: 42px;
  width: auto;
`;

export { Container, Logo };
