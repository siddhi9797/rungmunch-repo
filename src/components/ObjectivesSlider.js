import { useEffect, useState } from "react";
import obj1 from "../assets/objective1.jpg";
import obj2 from "../assets/objective2.jpg";
import obj3 from "../assets/objective3.jpg";

const objectives = [
  {
    image: obj1,
    title: "Promote Theatre Arts",
    text:
      "To encourage theatre and drama as a powerful medium for storytelling, cultural expression, and social awareness."
  },
  {
    image: obj2,
    title: "Support Artists",
    text:
      "To provide a platform for emerging and experienced artists to showcase their talent and grow creatively."
  },
  {
    image: obj3,
    title: "Community Engagement",
    text:
      "To bring communities together through meaningful performances and culturally enriching events."
  }
];

function ObjectivesSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % objectives.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + objectives.length) % objectives.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % objectives.length);
  };

  return (
    <section className="objectives-section">
      <div className="objectives-card">
        <img
          src={objectives[index].image}
          alt="Objective"
          className="objectives-image"
        />

        <div className="objectives-content">
          <h3>{objectives[index].title}</h3>
          <p>{objectives[index].text}</p>
        </div>

        {/* Navigation */}
        <button className="obj-btn prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="obj-btn next" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </section>
  );
}

export default ObjectivesSlider;
