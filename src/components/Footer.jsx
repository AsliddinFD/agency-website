import MapComponent from "./Map";
import Divider from "@mui/material/Divider";

export default function Footer() {
  return (
    <div className="footer">
      <Divider></Divider>
      <div className="footer-content">
        <div className="location">
          <h3>Location</h3>
          <p>
            123 Example Street <br /> San Francisco, CA 12345
          </p>
        </div>
        <div className="hours">
          <h3>Hours</h3>
          <p>
            Monday—Friday <br /> 8am — 6pm
          </p>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <p>
            asliddin@gmail.com <br />
            (123) 456-7890
          </p>
        </div>
      </div>
      <MapComponent></MapComponent>
    </div>
  );
}
