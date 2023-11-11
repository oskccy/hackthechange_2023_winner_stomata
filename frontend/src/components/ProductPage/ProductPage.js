import Button from '@mui/material/Button';
import { RecommendedProductCard } from "../ProductCards/RecommendedProductCard";
import styles from "./ProductPage.module.css";
// import turtle from "../../turtle.jpeg";

const ProductPage = ({product}) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.image}>
            <img src="https://picsum.photos/200" alt="image" />
         </div>
         <RecommendedProductCard
            title={"Product Title"}
            score={7.5}
            metrics={[{"value": 4, "name": "carbon-1-metric", "points": ["yo", "yo", "yo"]}, {"value": 5, "name": "carbon-2 metric", "points": ["yo", "yo", "yo"]}, {"value": 8.9, "name": "other-metric", "points": ["yo", "yo", "yo"]}]}
            // imgUrl={turtle}
         />
         <Button variant="contained" className={styles.button}>Add to Cart</Button>
      </div>
   );
};

export default ProductPage;
