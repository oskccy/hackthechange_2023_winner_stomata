import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import styled from "styled-components";
import styles from "./ReviewCard.module.scss";

const ReviewContainer = styled.div`
  margin-top: 2.5rem;
  // margin: 20px;
`;

const StarRatingContainer = styled.div`
  display: flex;
  align-items: center;
  // margin-bottom: 20px;
  font-size: 1.5rem;
  
`;

const Star = styled.span`
  cursor: pointer;
  color: ${(props) => (props.selected ? "#ffc107" : "#585a37")};
`;

const ReviewInput = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ReviewDisplay = styled.div`
  margin-top: 20px;
  padding: 1rem 1.5rem;
  // border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f8f8f8;
`;

const SubmitButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`;

const defaultReviews = [
  {
    "rating": 5,
    "text": "The sustainable product exceeded my expectations by seamlessly integrating eco-friendly principles without compromising its functionality. The attention to detail in ensuring sustainability while maintaining a high standard of quality is truly commendable."
  },
  {
    "rating": 4,
    "text": "Impressed by the sustainability and quality of the product, it's a valuable choice for those seeking eco-friendly solutions. Minor enhancements could elevate it, but it's definitely a step in the right direction for sustainable products."
  },
  {
    "rating": 5,
    "text": "This product isn't just sustainable; it's high-performing. The blend of sustainability and functionality is admirable, making it a solid recommendation for anyone looking for an eco-conscious yet efficient solution."
  },
  {
    "rating": 4,
    "text": "The sustainable design is efficient and doesn't compromise functionality. A smart purchase for those prioritizing eco-friendly solutions without sacrificing practicality. Some tweaks could further enhance its appeal."
  },
  {
    "rating": 5,
    "text": "This product beautifully showcases the seamless blend of sustainability and quality. It's a testament to the dedication to environmental responsibility while delivering an excellent product."
  }
]

const ReviewCard = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [submittedReviews, setSubmittedReviews] = useState(defaultReviews);
  const [averageRating, setAverageRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index);
  };

  const handleSubmit = () => {
    const newReview = { rating, text: review };
    setSubmittedReviews([...submittedReviews, newReview]);
    setRating(0); 
    setReview(""); 
  };

  useEffect(() => {
    let avgRating = 0;
    submittedReviews.forEach((review) => {
      avgRating += review.rating;
    });
    setAverageRating(avgRating / submittedReviews.length);
  }, [submittedReviews]);

  return (
    <ReviewContainer>
      {/* line */}
      <div className={styles.line}></div>
      <div className={styles.writeReview}>
        <div className={styles.reviewStats}>
          <div className={styles.avgContainer}>
            <h2 className={styles.avg}>{averageRating.toFixed(2)}</h2>
            <h3 className={styles.total}>{submittedReviews.length} reviews</h3>
          </div>
          <StarRatingContainer>
              {[1, 2, 3, 4, 5].map((index) => (
                <Star
                  key={index}
                  selected={index <= rating}
                  onClick={() => handleStarClick(index)}
                >
                  ★
                </Star>
              ))}
            </StarRatingContainer>
        </div>
        
        
        <ReviewInput
          placeholder="What's your experience?"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>
      
      <Button className={styles.button} fullWidth variant="contained" onClick={handleSubmit}>Submit</Button>

      {submittedReviews.map((submittedReview, index) => (
        <ReviewDisplay className={styles.ReviewDisplay} key={index}>
          <span>{submittedReview.rating}.0 <span style={{color:'gold'}}>{"★".repeat(submittedReview.rating)}</span></span>
          <div className={styles.review}>{submittedReview.text}</div>
        </ReviewDisplay>
      ))}
    </ReviewContainer>
  );
};

export default ReviewCard;
