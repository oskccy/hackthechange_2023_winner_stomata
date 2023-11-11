import "./App.css";

import Card, {
  RecommendedProductCard,
} from "./components/ProductCards/RecommendedProductCard";

import ScoreCard from "./components/Score/ScoreCard";
import logo from "./logo.svg";
import turtle from "./turtle.jpeg";

function App() {
  return (
    <>
      <RecommendedProductCard
        title={"Product Title"}
        metrics={[{"value": 2.1, "name": "carbon", "points": ["yo", "yo", "yo"]}, {"value": 2.1, "name": "carbon", "points": ["yo", "yo", "yo"]}]}
        imgUrl={turtle}
      />

      <ScoreCard score={1}/>
    </>
  );
}

export default App;
