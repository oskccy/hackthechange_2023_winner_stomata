import styled from "styled-components";

export const CardWrapper = styled.div`
  // max-width: 500px;
  // width: 100%;
  flex: 1;
  padding: 0 1.5rem;
  box-sizing: border-box;
  margin: 1rem auto;
  min-width: 290px;
  // height: 575px;
  display: flex;
  flex-flow: column nowrap;
  // grid-template-columns: 300px;
  // grid-template-rows: 210px 210px 80px;
  // grid-template-areas: "image" "text" "stats";
  border-radius: 10px;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  text-align: center;
  align-items: center;
  justify-content: center;
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
  width:100%;
`;

export const CardTextDate = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 1.5rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: rgb(255, 255, 255);
  background-clip: text;
  -webkit-background-clip: text;
  color: black;
`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
  width:100%;
`;

export const MetricPointsContainer = styled.div`
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align:left;
  /* white-space: nowrap; */
`;

export const MetricItem = styled.div`
  display: flex;
  align-items: left;
  margin-bottom: 20px;
  justify-content: flex-start;
  width:100%;
`;

export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CircleContainer = styled.div`
  margin-top: 10px;
  margin-right: 20px;
`;

export const DataFlexbox = styled.div`
width:100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
