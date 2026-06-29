
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import ImageSlider from "../components/ImageSlider";
import visionIcon from "../assets/vision.png";
import missionIcon from "../assets/mission.png";
import valuesIcon from "../assets/values.png";
import ObjectivesSlider from "../components/ObjectivesSlider";
import "../styles/upcomingEvents.css";

function Home() {

    const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://rungmunch-backend.onrender.com/api/events")
      .then((res) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const upcoming = res.data
          .filter((event) => new Date(event.date) >= today)
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .slice(0, 3); // Show only first 3 upcoming events

        setEvents(upcoming);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="page home-page">
      <ImageSlider />

      <section className="intro-section">
        <h2>About Rungmunch</h2>
        <p>
          Rungmunch is a cultural theatre platform that celebrates drama,
          creativity, and socially meaningful performances. It brings artists
          and communities together through the power of storytelling and stage
          expression.
        </p>
      </section>

      <section className="vmv-section">
        <div className="vmv-card">
          <img src={visionIcon} alt="Vision" className="vmv-icon-img" />
          <h3>Vision</h3>
          <p>
            To become a vibrant cultural space that inspires creativity and
            connects communities through theatre.
          </p>
        </div>

        <div className="vmv-card">
          <img src={missionIcon} alt="Mission" className="vmv-icon-img" />
          <h3>Mission</h3>
          <p>
            To promote meaningful theatre by supporting artists and nurturing
            social awareness through art.
          </p>
        </div>

        <div className="vmv-card">
          <img src={valuesIcon} alt="Values" className="vmv-icon-img" />
          <h3>Values</h3>
          <p>
            Creativity, inclusivity, collaboration, and commitment to cultural
            growth and social responsibility.
          </p>
        </div>
      </section>
      <h2 className="objectives-title">Our Objectives</h2>
      <ObjectivesSlider />

      <h2 className="objectives-title">Upcoming Events</h2>

<div className="events-grid">
  {events.map((event) => (
    <div className="event-card" key={event._id}>
      <img src={event.image} alt={event.title} />

      <h3>{event.title}</h3>

      <span className="event-date">
  {new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })}
  {" • "}
  {event.time}
</span>

      <p className="event-venue">
        📍 {event.venue}
      </p>

      <p>{event.description}</p>

     <button
  className="know-more-btn"
  onClick={() => {
    navigate("/events/upcoming");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
>
  View All Events
</button>
    </div>
  ))}
</div>

<div style={{ textAlign: "center", margin: "30px 0 50px" }}>
  <button
    className="know-more-btn"
    onClick={() => navigate("/events/upcoming")}
  >
    View All Events
  </button>
</div>

    </div>
  );
}

export default Home;
