import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 300px;
  height: 600px;
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
`;

export const CardImage = styled.div`
  grid-area: image;
  width: inherit;
  background-image: url(${(props) => props.background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const CardTextDate = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: rgb(255, 255, 255);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`;

export const MetricPointsContainer = styled.div`
  margin-left: -50px;
`;

export const MetricItem = styled.div`
  display: flex;
  align-items: left;
  margin-bottom: 20px;
`;

export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CircleContainer = styled.div`
  margin-right: 20px;
`;

export const DataFlexbox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: left;
`;
