import 'react-circular-progressbar/dist/styles.css';

import {
   ScoreCategory,
   ScoreText,
   ScoreValueWrapper,
   ScoreWrapper
} from './ScoreStyles';
import { useEffect, useState } from 'react'

import { CircularProgressbar } from 'react-circular-progressbar';
import { getColor } from "../CircleWithNumber/CricleWithNumber";

const categories = {
   0: "low",
   1: "medium",
   2: "high",
}

function ScoreCard({score}) {
   const [scoreCategory, setScoreCategory] = useState("low");
   const [color, setColor] = useState("ff0000");

   function getScoreCategory(score) {
      if (score < 4) {
         return categories[0];
      } else if (score < 7) {
         return categories[1];
      } else {
         return categories[2];
      }
   }

   useEffect(() => {
      setScoreCategory(getScoreCategory(score));
      setColor(getColor(score));
   }, [score]);

   return (
      <ScoreWrapper>
         <CircularProgressbar 
            value={score*10} 
            strokeWidth={9.5}
            styles={{
               path:{
                  stroke: `${color}`,
               },
            }}
         />
         <ScoreValueWrapper>
            <ScoreText color={color}>{score}</ScoreText>
            <ScoreCategory color={color}>{scoreCategory}</ScoreCategory>
         </ScoreValueWrapper>
      </ScoreWrapper>
   )
}

export default ScoreCard