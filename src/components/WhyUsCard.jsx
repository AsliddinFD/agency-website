import IonIcon from "@reacticons/ionicons"

export default function WhyUsCard({ data }) {
  return (
    <div className="why-us-card">
      <IonIcon name={data["icon"]} className="why-us-icon" size="64"></IonIcon>
      <h3>{data["title"]}</h3>
      <p>{data["description"]}</p>
    </div>
  );
}
