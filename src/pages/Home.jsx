import Layout from "./Layout";
import {
  aboutUsImages,
  customerReviewData,
  tourDataHomePage,
  whyUsData,
} from "../utils/Data";
import backgroundVideo from "../style/images/intro-video-background.mp4";
import AboutUsCard from "../components/AboutUsCard";
import CustomerReviewCard from "../components/CustomerReviewCard";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AboutUsCardCarousel from "../components/AboutUsCardCarousel";
import HomePageToursCard from "../components/HomePageToursCard";
import WhyUsCard from "../components/WhyUsCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  const [emblaRefAlt, embla] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  const navigate = useNavigate();
  return (
    <Layout>
      <div>
        <div className="intro-video">
          <video
            src={backgroundVideo}
            autoPlay={true}
            muted={true}
            loop={true}
          ></video>
          <div className="video-overlay"></div>
          <div className="intro-video-text">
            <h2>DreamTour</h2>
            <p>
              Unlock Your Wanderlust: Begin Your Journey with Our Premier Travel
              Agency for Unforgettable Adventures and Experiences
            </p>
            <button
              onClick={() => {
                navigate("/contact");
              }}
            >
              Submit application
            </button>
          </div>
        </div>
        <div className="about-us">
          <div className="about-us-text">
            <h2>We are DreamTour</h2>
            <p>
              DreamTour turns dreams into reality, specializing in crafting
              unforgettable journeys. From Bangkok's bustling streets to Bali's
              serene beaches, our expert team curates unique experiences
              tailored to your desires. With personalized service and attention
              to detail, let us be your trusted partner in creating lasting
              memories. Embark on a journey of discovery with DreamTour.
            </p>
            <button
              onClick={() => {
                navigate("/tours");
              }}
            >
              Start your journey
            </button>
          </div>
          <div className="about-us-photos">
            {aboutUsImages.map((country, index) => (
              <AboutUsCard
                image={country["image"]}
                name={country["name"]}
                key={index}
              />
            ))}
          </div>
          <div className="about-us-photos-carousel">
            <div ref={emblaRefAlt}>
              <div className="embla__container">
                {aboutUsImages.map((country, index) => (
                  <AboutUsCardCarousel image={country["image"]} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="reviews">
          <div className="reviews-title">
            <span>What they say</span>
            <h2>What our customer said about us</h2>
          </div>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {customerReviewData.map((review, index) => (
                <CustomerReviewCard review={review} key={index} />
              ))}
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
        <div className="tours">
          <h2>Tours</h2>
          <div className="tours-data">
            {tourDataHomePage.map((tour, index) => (
              <HomePageToursCard tour={tour} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
