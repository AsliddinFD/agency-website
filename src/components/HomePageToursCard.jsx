export default function HomePageToursCard({ tour }) {
  return (
    <div className="homepage-tour-card">
      <div className="tour-img-container">
        <img src={tour["image"]} alt="" />
      </div>
      <div className="text">
        <h1>{tour["name"]}</h1>
        <h4>{tour["price"]}</h4>
        <p>{tour["description"]}</p>
      </div>
    </div>
  );
}
