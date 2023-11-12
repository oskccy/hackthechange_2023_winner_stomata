import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import ProductCard from "../ProductCard/ProductCard";
import ReviewCard from "../ReviewCard/ReviewCard";
import productCardsArray from "./dummyData";
import styles from "./ProductPage.module.scss";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// You might need to modify the Product component as well to handle onClick
import { Product } from "../ScrollingComponent/ScrollingComponent";

const ArrowComponent = styled.div`
  position: fixed;
  top: -2%;
  z-index: 4;
  left: 5%;
`;

const ProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const defaultProductState = {
    image: "https://picsum.photos/500",
    title: "Default Title",
    evaluation: "Default Evaluation",
    alternatives: productCardsArray,
  };
  const [product, setProduct] = useState(
    location.state?.product ?? defaultProductState,
  );
  const [productAlternativesArray, setProductAlternativesArray] = useState(
    product.alternatives,
  );
  console.log("product", product);

  const redirectToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (location.state?.product?.alternatives) {
      setProductAlternativesArray(location.state.product.alternatives);
    }
  }, [location.state]);

  // Click handler for product components
  const handleProductClick = (clickedProduct) => {
    setProduct(clickedProduct);
  };

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
      <ArrowComponent>
        <h1 onClick={redirectToHome}>←</h1>
      </ArrowComponent>

      <div className={styles.container}>
        <ProductCard
          title={product.title}
          score={
            (product.evaluation.concerns[0].overall_score +
            product.evaluation.concerns[1].overall_score +
            product.evaluation.concerns[2].overall_score) / 3
          }
          evaluations={product.evaluation || []}
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
          <h2 className={styles.title}>Recommended Products</h2>
          <div className={styles.scrollcontainer}>
            {productAlternativesArray.map((product, id) => (
              <Product
                product={product}
                key={id}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        </div>
        <ReviewCard />
      </div>
    </div>
  );
};

export default ProductPage;
