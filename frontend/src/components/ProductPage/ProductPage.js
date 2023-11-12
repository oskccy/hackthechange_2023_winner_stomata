import Button from "@mui/material/Button";
import ProductCard from "../ProductCard/ProductCard";
import ReviewCard from "../ReviewCard/ReviewCard";
import styles from "./ProductPage.module.scss";
import ScrollingComponent from "../ScrollingComponent/ScrollingComponent";
import productCardsArray from "./dummyData";
// import turtle from "../../turtle.jpeg";

const ProductPage = ({ product }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0)), url(${product.imageUrl})`,
            backgroundSize: "cover",
          }}
        >
          <h2 className={styles.title}>{product.title}</h2>
        </div>
        <div style={{
          margin:"0 1rem"
        }}>
          <ProductCard
            title={"Product Title"}
            score={7.5}
            metrics={[
              { value: 4, name: "carbon-1-metric", points: ["yo", "yo", "yo"] },
              { value: 5, name: "carbon-2 metric", points: ["yo", "yo", "yo"] },
              { value: 8.9, name: "other-metric", points: ["yo", "yo", "yo"] },
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
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
