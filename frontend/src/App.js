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
        metrics={[{"value": 2.1, "name": "carbon", "points": ["yo", "yo", "yo"]}, {"value": 2.1, "name": "carbon", "points": ["yo", "yo", "yo"]}]}
        imgUrl={turtle}
      />
    </>
  );
}

export default App;
