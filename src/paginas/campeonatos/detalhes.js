import React from "react";
import { Card, Space, Badge, Tag } from "antd";

const Detalhes = ({ campeonato }) => {
  return campeonato?.detalhes?.length
    ? campeonato.detalhes.map((detalhe, d) => (
        <Card
          key={d}
          title={detalhe.round}
          style={{ width: 300 }}
          headStyle={{ backgroundColor: "#202020" }}
          bodyStyle={{ textAlign: "left" }}
        >
          {detalhe.times.map((time, t) => (
            <Space key={t} style={{ paddingTop: 5, paddingBottom: 5 }}>
              <Badge
                count={t + 1}
                style={{
                  backgroundColor: "#7A6F6F",
                  borderColor: "#7A6F6F",
                }}
              />
              <Tag>{time}</Tag>
            </Space>
          ))}
        </Card>
      ))
    : null;
};

export default Detalhes;
