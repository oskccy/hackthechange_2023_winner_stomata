import styled from "styled-components";

export const ScoreWrapper = styled.div`
   width: 10rem;
   display: flex;
   text-align: center;
   position: relative;
`;

export const ScoreValueWrapper = styled.div`
   position: absolute;
   display: flex;
   flex-flow: column;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;

export const ScoreText = styled.div`
   font-size: 2rem;
   font-weight: 1000;
   color: ${(props) => props.color};
   filter: brightness(0.5);
`;

export const ScoreCategory = styled.div`
   font-size: 1.2rem;
   font-weight: 900;
   color: ${(props) => props.color};
   opacity: 0.5;
   filter: brightness(0.45);
`;