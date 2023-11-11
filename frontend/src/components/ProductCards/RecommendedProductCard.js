import {
  CardImage,
  CardTextBody,
  CardTextTitle,
  CardTextWrapper,
  CardWrapper,
  CircleContainer,
  DataFlexbox,
  MetricItem,
  MetricPointsContainer,
} from "./CardStyles";

import { CircleWithNumber } from "../CircleWithNumber/CricleWithNumber";
import ScoreCard from "../Score/ScoreCard";

export const RecommendedProductCard = ({ title, metrics, score }) => {
  return (
    <CardWrapper>
      {/* <CardImage background={imgUrl} /> */}
      <CardTextWrapper>
        <CardTextTitle>{title}</CardTextTitle>
        <ScoreCard score={score}/>
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
