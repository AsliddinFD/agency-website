import Layout from "./Layout";
import backgrounVideo from "../style/images/about-us-intro-video.mp4";
import { whyUsData, customerReviewData } from "../utils/Data";
import WhyUsCard from "../components/WhyUsCard";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import CustomerReviewCard from "../components/CustomerReviewCard";
export default function AboutUs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  const [emblaRefAlt, embla] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);
  return (
    <Layout>
      <div className="about-us-intro">
        <div className="intro-video">
          <video
            src={backgrounVideo}
            autoPlay={true}
            muted={true}
            loop={true}
          ></video>
          <div className="video-overlay"></div>
          <div className="intro-video-text">
            <h2>About Us</h2>
            <p>
              Unlock Your Wanderlust: Begin Your Journey with Our Premier Travel
              Agency. Explore a World of Unforgettable Adventures and
              Experiences Awaits, Where Every Destination is a Doorway to New
              Discoveries
            </p>
          </div>
        </div>
      </div>
      <div className="why-us">
        <div className="why-us-title">
          <span>What we offer</span>
          <h2>Why choose DreamTour</h2>
        </div>
        <div className="why-us-cards">
          {whyUsData.map((data, index) => (
            <WhyUsCard data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="reviews">
        <div className="reviews-title">
          <span>What they say</span>
          <h2>What our customer said about us</h2>
        </div>
        <div className="embla" ref={emblaRefAlt}>
          <div className="embla__container">
            {customerReviewData.map((review, index) => (
              <CustomerReviewCard review={review} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
