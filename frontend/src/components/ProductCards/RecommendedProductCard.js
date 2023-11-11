import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
} from "./CardStyles";

export const RecommendedProductCard = ({ title, metrics, imgUrl }) => {
  return (
    <CardWrapper>
      <CardImage background={imgUrl} />
      <CardTextWrapper>
        <CardTextTitle>{title}</CardTextTitle>
        <CardTextBody>
          {metrics.map((metric, index) => (
            <div key={index}>
              <div>
                <b>Name:</b> {metric.name}
              </div>
              <div>
                <b>Value:</b> {metric.value}
              </div>
              <div>
                <b>Points:</b>
                {metric.points.map((point, pointIndex) => (
                  <div key={pointIndex}>{point}</div>
                ))}
              </div>
            </div>
          ))}
        </CardTextBody>
      </CardTextWrapper>
    </CardWrapper>
  );
};
