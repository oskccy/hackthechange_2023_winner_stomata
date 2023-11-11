import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
  MetricItem,
  CircleContainer,
  DataFlexbox,
  MetricPointsContainer,
} from "./CardStyles";

import CircleWithNumber from "../CircleWithNumber/CricleWithNumber";
//import ReviewCard from "../ReviewCard/ReviewCard";

export const RecommendedProductCard = ({ title, metrics, imgUrl }) => {
  return (

    <CardWrapper>
      <CardImage background={imgUrl} />
      <CardTextWrapper>
        <CardTextTitle>{title}</CardTextTitle>
        <CardTextBody>
          {metrics.map((metric, index) => (
            <MetricItem key={index}>
              <CircleContainer>
                <CircleWithNumber number={metric.value} />
              </CircleContainer>
              <DataFlexbox>
                <div>
                  <b>Metric:</b> {metric.name}
                </div>
                <MetricPointsContainer>
                  {metric.points.map((point, pointIndex) => (
                    <div key={pointIndex}>• {point}</div>
                  ))}
                </MetricPointsContainer>
              </DataFlexbox>
            </MetricItem>
          ))}
        </CardTextBody>
      </CardTextWrapper>
    </CardWrapper>

  );
};
