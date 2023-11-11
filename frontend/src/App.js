import logo from "./logo.svg";
import Card, {
  RecommendedProductCard,
} from "./components/ProductCards/RecommendedProductCard";
import "./App.css";
import turtle from "./turtle.jpeg";

function App() {
  return (
    <>
      <RecommendedProductCard
        title={"Product Title"}
        metrics={[{"value": 4, "name": "carbon-1-metric", "points": ["yo", "yo", "yo"]}, {"value": 5, "name": "carbon-2 metric", "points": ["yo", "yo", "yo"]}, {"value": 8.9, "name": "other-metric", "points": ["yo", "yo", "yo"]}]}
        imgUrl={turtle}
      />
    </>
  );
}

export default App;
