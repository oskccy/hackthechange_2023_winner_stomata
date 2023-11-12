import React from 'react';
import styled from 'styled-components';

const ScrollContainer = styled.div`
  height: 30px;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none; 
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: black;
`;

const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  height: 40px;
  width: 40px;
  margin: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  background-color: #fff;
`;

const CardImage = styled.img`
  max-width: 40px;
  max-height: 40px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  margin: 10px 0;
`;

const CardScore = styled.p`
  font-weight: bold;
`;

const MetricList = styled.div`
  text-align: left;
`;

const Metric = styled.div`
  margin-bottom: 5px;
`;

// Takes in an array of products
const HorizontalScroll = ({ products }) => {
  return (
    <ScrollContainer id="COMPONENT">
      {products.map((product, index) => (
        <Card key={index}>
          <CardImage src={product.image} alt={product.title} />
          <CardTitle>{product.title}</CardTitle>
          <CardScore>Score: {product.score}</CardScore>
          <MetricList>
            {product.metrics.map((metric, idx) => (
              <Metric key={idx}>
                <strong>{metric.name}: </strong>
                <span>{metric.value}</span>
                <ul>
                  {metric.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </Metric>
            ))}
          </MetricList>
        </Card>
      ))}
    </ScrollContainer>
  );
};

export default HorizontalScroll;
