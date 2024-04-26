import IonIcon from "@reacticons/ionicons";

export default function Facility({ facility }) {
  return (
    <div className="facility">
      <IonIcon name="checkmark-outline"></IonIcon>
      <h4> {facility} </h4>
    </div>
  );
}
