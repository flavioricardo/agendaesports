import React from "react";
import { Card, Space, Badge, Tag, Row, Col } from "antd";

const Detalhes = ({ campeonato }) => {
  return campeonato?.detalhes?.length ? (
    <Row gutter={16}>
      {campeonato.detalhes.map((detalhe, d) => (
        <Col key={d} span={8}>
          <Card
            title={detalhe.round}
            headStyle={{ backgroundColor: "#202020" }}
            bodyStyle={{
              textAlign: detalhe?.times?.length ? "left" : "center",
            }}
          >
            {detalhe?.times?.length
              ? detalhe.times.map((time, t) => (
                  <Space
                    key={t}
                    style={{ display: "flex", paddingTop: 5, paddingBottom: 5 }}
                  >
                    <Badge
                      count={t + 1}
                      style={{
                        backgroundColor: "#F79E19",
                        borderColor: "#F79E19",
                      }}
                    />
                    <Tag>{time}</Tag>
                  </Space>
                ))
              : `Queda em andamento`}
          </Card>
        </Col>
      ))}
    </Row>
  ) : (
    `Sem dados da rodada`
  );
};

export default Detalhes;
