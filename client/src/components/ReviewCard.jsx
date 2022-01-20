import React from 'react'
import "../styling/ReviewCard.css";

const ReviewCard = (props) => {
  console.log(props.review)
  return (
    <div className="comment-rating-container"> 
      <div>Comment: {props.review.comments} </div>
      <div>Rating: {props.review.rating}</div>
      </div>
  )
}

export default ReviewCard

