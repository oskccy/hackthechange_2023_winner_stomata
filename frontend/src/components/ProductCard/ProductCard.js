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

import CircleWithNumber from "../CircleWithNumber/CricleWithNumber";
import ScoreCard from "../Score/ScoreCard";

//import ReviewCard from "../ReviewCard/ReviewCard";

const ProductCard = ({ title, evaluations, score }) => {
  console.log("e", evaluations);
  return (
    <CardWrapper
      style={{
        width: "100%",
      }}
    >
      {/* <CardImage background={imgUrl} /> */}
      <CardTextWrapper>
        <CardTextTitle>{title}</CardTextTitle>
        <ScoreCard score={score} />
        <CardTextBody>
          {evaluations.concerns.map((evaluation, index) => (
            <MetricItem key={index}>
              <CircleContainer>
                <CircleWithNumber number={evaluation.overall_score} />
              </CircleContainer>
              <DataFlexbox>
                <div>
                  <b> {evaluation.name}</b>
                </div>
                <MetricPointsContainer>
                  {evaluation?.points?.map((point, pointIndex) => (
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

export default ProductCard;
