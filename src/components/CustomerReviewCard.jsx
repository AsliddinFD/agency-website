export default function CustomerReviewCard({ review }) {
  return (
    <div className="embla__slide">
      <div className="review-img-container">
        <img src={review["avatar"]} alt="" />
      </div>
      <h4>{review["name"]}</h4>
      <p>{review["review"]}</p>
    </div>
  );
}
