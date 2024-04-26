import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function ToursCard({ tour }) {
  const navigate = useNavigate();
  const name = tour['name']
  return (
    <div
      className="tour-card"
      onClick={() => navigate(`/tourDetails/${name}`)}
    >
      <div className="tour-card-img-container">
        <img src={tour["image"]} alt="" />
        <div className="img-overlay">
          <button>Read more</button>
        </div>
      </div>
      <h2> {tour["name"]}</h2>
      <p>{`📍 ${tour["location"]}`}</p>
      <button>{tour["price"]}</button>
    </div>
  );
}
