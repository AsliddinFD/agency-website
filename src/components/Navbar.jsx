import { Link } from "react-router-dom";
import logo from "../style/images/agency_logo.png";
import IonIcon from "@reacticons/ionicons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const handleOpen = () => {
    setIsOpened(true);
  };
  const handlemenu = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    setIsOpened(false);
  }, [menu]);

  const location = useLocation().pathname;
  const [color, setColor] = useState(false);

  function changeColor() {
    window.scrollY >= 100 ? setColor(true) : setColor(false);
  }

  window.addEventListener(
    "scroll",
    function () {
      changeColor();
    },
    true
  );

  return (
    <header className={color ? "header header-bg" : "header"}>
      <div className="img-container">
        <div className="img-container">
          <img src={logo} alt="agency-logo" />

          <Link
            to={"/"}
            className={
              color
                ? "link-bg"
                : location === "/tours" || location === "/contact"
                ? "link-black"
                : "link"
            }
          >
            <h2>DreamTour</h2>
          </Link>
        </div>
      </div>
      <div className="sections">
        <Link
          to="/about"
          style={{ color: location === "/about" ? "#ef5350" : "" }}
          className={
            color
              ? "link-bg"
              : location === "/tours" || location === "/contact"
              ? "link-black"
              : "link"
          }
        >
          <h4>About</h4>
        </Link>
        <Link
          to="/contact"
          style={{ color: location === "/contact" ? "#ef5350" : "" }}
          className={
            color
              ? "link-bg"
              : location === "/tours" || location === "/contact"
              ? "link-black"
              : "link"
          }
        >
          <h4>Contact</h4>
        </Link>
        <Link
          to="/tours"
          style={{ color: location === "/tours" ? "#ef5350" : "" }}
          className={
            color
              ? "link-bg"
              : location === "/tours" || location === "/contact"
              ? "link-black"
              : "link"
          }
        >
          <h4>Tours</h4>
        </Link>
      </div>

      <div
        style={{ color: color ? "black" : "" }}
        className={
          location === "/tours" || location === "/contact"
            ? "drawer-icon-black"
            : "drawer-icon"
        }
      >
        <IonIcon name="menu-outline" onClick={handleOpen}></IonIcon>
      </div>
      <aside
        className={
          isOpened
            ? "sidebar-expanded"
            : menu
            ? "sidebar-collapsed"
            : "sidebar-hidden"
        }
      >
        <div className="close-icon">
          <IonIcon name="close-outline" onClick={handlemenu}></IonIcon>
        </div>
        <Link
          to="/about"
          style={{ color: location === "/about" ? "#ef5350" : "" }}
          className="link"
        >
          <h4>About</h4>
        </Link>
        <Link
          to="/contact"
          style={{ color: location === "/contact" ? "#ef5350" : "" }}
          className="link"
        >
          <h4>Contact</h4>
        </Link>
        <Link
          to="/tours"
          style={{ color: location === "/tours" ? "#ef5350" : "" }}
          className="link"
        >
          <h4>Tours</h4>
        </Link>
      </aside>
    </header>
  );
}
