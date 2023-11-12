import React, { useState } from "react";

import styled from "styled-components";

const ReviewContainer = styled.div`
  margin-top: 100px;
  margin: 20px;
`;

const StarRatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Star = styled.span`
  cursor: pointer;
  color: ${(props) => (props.selected ? "#ffc107" : "#3A3B3C")};
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
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
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

  const handleStarClick = (index) => {
    setRating(index);
  };

  const handleSubmit = () => {
    const newReview = { rating, text: review };
    setSubmittedReviews([...submittedReviews, newReview]);
    setRating(0); 
    setReview(""); 
  };

  return (
    <ReviewContainer>
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
      <ReviewInput
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <SubmitButton onClick={handleSubmit}>Submit Review</SubmitButton>

      {submittedReviews.map((submittedReview, index) => (
        <ReviewDisplay key={index}>
          <span>{submittedReview.rating}.0 <span style={{color:'gold'}}>{"★".repeat(submittedReview.rating)}</span></span>
          <div>{submittedReview.text}</div>
        </ReviewDisplay>
      ))}
    </ReviewContainer>
  );
};

export default ReviewCard;
