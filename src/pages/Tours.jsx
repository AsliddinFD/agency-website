import Layout from "./Layout";
import { tourScreenData } from "../utils/Data";
import ToursCard from "../components/ToursCard";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Tours() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  


  return (
    <Layout>
      <div className="tour-container">
        <h1>Dream. Explore. Discover </h1>
        <div className="carousel" ref={emblaRef}>
          <div className="tour-cards-carousel-container">
            {tourScreenData.map((tour, index) => (
              <ToursCard tour={tour} key={index} />
            ))}
          </div>
        </div>
        <div className="tour-cards">
          {tourScreenData.map((tour, index) => (
            <ToursCard tour={tour} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
