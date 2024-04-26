import IonIcon from "@reacticons/ionicons";


export default function TourDetailsCard({ data }) {
  return (
    <div className="tour-details-card">
      <IonIcon name={data.icon} size="64"></IonIcon>
      <h4>{data.name}</h4>
    </div>
  );
}
