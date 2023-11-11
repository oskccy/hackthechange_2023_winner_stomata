import "./App.css";

import ProductPage from "./components/ProductPage/ProductPage";

function App() {
  return (
    <div className="App">
      <ProductPage
        product={{
          imageUrl:"https://picsum.photos/500",
          title:"Product Title"
        }}
      />
    </div>
  );
}

export default App;
