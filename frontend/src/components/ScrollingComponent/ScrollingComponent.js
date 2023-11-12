import React from 'react';
import styled from 'styled-components';
import styles from './Scrolling.module.scss'

// Takes in an array of products
const HorizontalScroll = ({ products }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;


export function Product({product}){
  return(
    <div className={styles.product}>
      <div className={styles.productTitle}>
        {product.title}
      </div>
      <div className={styles.productImage}>
        <img src={product.image} alt={product.title}/>
      </div>
      {/* <div className={styles.price}>
        ${product.price}
      </div> */}
      <div className={styles.productScore}>
        {product.score}
        <h1 className={styles.productScoreTitle}>/10</h1>
      </div>
      
      {/* <div className={styles.productMetrics}>
        {product.metrics.map((metric) => (
          <div className={styles.metric}>
            <div className={styles.metricName}>
              {metric.name}
            </div>
            <div className={styles.metricValue}>
              {metric.value}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  )
}