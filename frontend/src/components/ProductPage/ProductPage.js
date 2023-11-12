import HorizontalScroll, { Product } from "../ScrollingComponent/ScrollingComponent";

import Button from "@mui/material/Button";
import ProductCard from "../ProductCard/ProductCard";
import ReviewCard from "../ReviewCard/ReviewCard";
import ScrollingComponent from "../ScrollingComponent/ScrollingComponent";
import productCardsArray from "./dummyData";
import styles from "./ProductPage.module.scss";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

// import turtle from "../../turtle.jpeg";

const ProductPage = () => {
  const location = useLocation();
  const defaultProductState = {
    imageUrl: 'https://picsum.photos/500',
    title: 'Default Title',
    evaluation: 'Default Evaluation',
    alternatives: productCardsArray, // Use a sliced array of the dummy data
  };

  // If location.state is undefined, or doesn't have a product, use defaultProductState
  const product = location.state?.product ?? defaultProductState;

  // Now you can safely use productState.alternatives
  const [productAlternativesArray, setProductAlternativesArray] = useState(product.alternatives);

  useEffect(() => {
    // Update the state if location.state.product.alternatives exists
    if(location.state?.product?.alternatives){
      setProductAlternativesArray(location.state.product.alternatives);
    }
  }, [location.state]);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0)), url(${product.imageUrl})`,
          backgroundSize: "cover",
        }}
      >
        <h2 className={styles.title}>{product.title}</h2>
      </div>
      <div className={styles.container}>
        <ProductCard
          title={product.title}
          score={7.5}
          metrics={[
            { value: 4, name: "carbonmetric", points: ["yo"] },
            { value: 5, name: "metric", points: ["yo"] },
            { value: 8.9, name: "other-metric", points: ["yo"] },
          ]}
          // imgUrl={turtle}
        />
        <div className={styles.buy}>
          <Button
            variant="contained"
            size="small"
            fullWidth
            className={styles.button}
          >
            Add to Cart
          </Button>
        </div>

        <div className={styles.scroll}>
            {/* <div className={styles.line}></div> */}

            <h2 className={styles.title}>Recommended Products</h2>
            <div className={styles.scrollcontainer}>
              {productAlternativesArray.map((product, id) => (
                <Product product={product} key={id} />
              ))}
            </div>
         {/* <div className={styles.line}></div> */}

        </div>

        <ReviewCard />
        </div>
      </div>
  )
};

export default ProductPage;
