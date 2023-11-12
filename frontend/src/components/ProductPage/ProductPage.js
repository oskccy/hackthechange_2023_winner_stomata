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
    location.state?.product ?? defaultProductState
  );
  const [productAlternativesArray, setProductAlternativesArray] = useState(
    product.alternatives
  );

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
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0)), url(${product.image})`,
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
          score={product.score || 2.3}
          metrics={
            Array.isArray(product.metrics) && product.metrics.length > 0
              ? [
                  {
                    value: product.metrics[0]?.value || 2.3,
                    name: product.metrics[0]?.name || "N/A",
                    points: product.metrics[0]?.points || [],
                  },
                  {
                    value: product.metrics[1]?.value || 2.4,
                    name: product.metrics[1]?.name || "N/A",
                    points: product.metrics[1]?.points || [],
                  },
                  {
                    value: product.metrics[2]?.value || 2.2,
                    name: product.metrics[2]?.name || "N/A",
                    points: product.metrics[2]?.points || [],
                  },
                ]
              : [
                  { value: 2.3, name: "N/A", points: [] },
                  { value: 2.2, name: "N/A", points: [] },
                  { value: 2.4, name: "N/A", points: [] },
                ] // Fallback if metrics is not an array or is empty
          }
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
