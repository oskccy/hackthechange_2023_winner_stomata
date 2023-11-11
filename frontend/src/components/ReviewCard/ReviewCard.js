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
  color: ${(props) => (props.selected ? "#ffc107" : "#e4e5e9")};
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

const ReviewCard = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [submittedReviews, setSubmittedReviews] = useState([]);

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
          <div>Rating: {"★".repeat(submittedReview.rating)}</div>
          <div>Review: {submittedReview.text}</div>
        </ReviewDisplay>
      ))}
    </ReviewContainer>
  );
};

export default ReviewCard;
