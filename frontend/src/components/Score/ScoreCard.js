import "react-circular-progressbar/dist/styles.css";

import {
  ScoreCategory,
  ScoreText,
  ScoreValueWrapper,
  ScoreWrapper,
} from "./ScoreStyles";
import { useEffect, useState } from "react";

import { CircularProgressbar } from "react-circular-progressbar";

function getScoreCategory(score) {
  if (score < 4) {
    return "low";
  } else if (score < 7) {
    return "medium";
  } else {
    return "high";
  }
}

function getColor(score) {
  if (score < 4) {
    return "#690300";
  } else if (score < 7) {
    return "#db7100";
  } else {
    return "#00a832";
  }
}

function ScoreCard({ score }) {
  const [loaded, setLoaded] = useState(false);
  const color = getColor(score); 

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, []);

  return (
    <ScoreWrapper>
      <CircularProgressbar
        value={loaded ? score * 10 : 0}
        strokeWidth={9.5}
        styles={{
          path: {
            stroke: `${color}`,
          },
        }}
      />
      <ScoreValueWrapper>
        <ScoreText color={color}>{score}</ScoreText>
        <ScoreCategory color={color}>{getScoreCategory(score)}</ScoreCategory>
      </ScoreValueWrapper>
    </ScoreWrapper>
  );
}

export default ScoreCard;
