
import { useEffect, useState } from "react";
import img1 from "../assets/slider1.jpg";
import img2 from "../assets/slider2.jpg";
import img3 from "../assets/slider3.jpg";

function ImageSlider() {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <img src={images[index]} alt="Slider" className="slider-image" />

      {/* Overlay */}
      <div className="slider-overlay">
        <h1>Welcome to Rungmunch</h1>
        <p>A space where theatre meets community</p>
      </div>
    </div>
  );
}

export default ImageSlider;

