import Layout from "./Layout";
import { tourDetailsData } from "../utils/Data";
import { useParams } from "react-router-dom";
import { Divider } from "@mui/material";
import TourDetailsCard from "../components/TourDetailsCard";

export default function TourDetails() {
  const { name } = useParams();
  var filteredTour = tourDetailsData.find((tour) => tour.name.includes(name));
  return (
    <Layout>
      <div className="header-video">
        <video src={filteredTour["video"]} autoPlay={true} loop={true}></video>
        <div className="overlay">
          <h1>{filteredTour["name"]}</h1>
          <p>{filteredTour["description"]}</p>
        </div>
      </div>
      <div className="tour-details">
        <h1 style={{ marginTop: "50px" }}>{`${name} Tour Checklist:`}</h1>
        <div className="facilities">
          {filteredTour["facilities"].map((facility, index) => (
            <TourDetailsCard data={facility} key={index} />
          ))}
        </div>

        <Divider orientation="vertical"></Divider>
      </div>
    </Layout>
  );
}
