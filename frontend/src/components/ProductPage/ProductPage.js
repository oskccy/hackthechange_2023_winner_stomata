import HorizontalScroll, { Product } from "../ScrollingComponent/ScrollingComponent";

import Button from "@mui/material/Button";
import ProductCard from "../ProductCard/ProductCard";
import ReviewCard from "../ReviewCard/ReviewCard";
import ScrollingComponent from "../ScrollingComponent/ScrollingComponent";
import styles from "./ProductPage.module.scss";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

// import turtle from "../../turtle.jpeg";

const ProductPage = () => {
  const location = useLocation();
  const { product } = location.state || { imageUrl: 'default_image_url', title: 'Default Title', evaluation: 'Default Evaluation', alternatives: 'Default Alternatives'};
  // take the top 3 alternatives
  const [productCardsArray, setProductCardsArray] = useState(product.alternatives.slice(0, 3));
  // console.log(product.evaluation);
  console.log(product.alternatives);

  useEffect(() => {
    // If the product state updates, update the product cards
    setProductCardsArray(product.alternatives);
  }, [product.alternatives]);
  
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
              {productCardsArray.map((product, id) => (
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
