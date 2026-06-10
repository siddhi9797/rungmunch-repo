import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import danceImg from "../assets/e1.jpg";
import musicImg from "../assets/e2.jpg";
import instrumentalImg from "../assets/e3.jpg";

const competitions = [
  {
    title: "Dance",
    path: "/competition/dance",
    image: danceImg,
    subtitle: "Express Through Movement",
  },
  {
    title: "Music",
    path: "/competition/music",
    image: musicImg,
    subtitle: "Let Your Voice Shine",
  },
  {
    title: "Instrumental",
    path: "/competition/instrumental",
    image: instrumentalImg,
    subtitle: "Master The Melody",
  },
];

function CompetitionSlider() {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % competitions.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setActive(
      (active - 1 + competitions.length) % competitions.length
    );
  };

  const nextSlide = () => {
    setActive((active + 1) % competitions.length);
  };

return (
  <section className="competition-slider-section">

    <div className="competition-heading">
      <h2>Our Competitions</h2>
      <p>
        Showcase your talent and compete on a global stage.
      </p>
    </div>

    <button className="slider-arrow left" onClick={prevSlide}>
      ❮
    </button>

    <div className="slider-container">
      {competitions.map((item, index) => {
        let position = "next";

        if (index === active) position = "active";
        else if (
          index ===
          (active - 1 + competitions.length) %
            competitions.length
        )
          position = "prev";

        return (
          <div
            key={index}
            className={`slide-card ${position}`}
            onClick={() => navigate(item.path)}
          >
            <img src={item.image} alt={item.title} />

            <div className="slide-overlay">
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>

    <button className="slider-arrow right" onClick={nextSlide}>
      ❯
    </button>

  </section>
);
}

export default CompetitionSlider;