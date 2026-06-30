
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
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    axios
      .get("https://rungmunch-backend.onrender.com/api/events")
      .then((res) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

const upcoming = res.data
  .map((event) => ({
    ...event,
    shows: [...event.shows].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    ),
  }))
  .filter((event) =>
    event.shows.some((show) => new Date(show.date) >= today)
  )
  .sort(
    (a, b) =>
      new Date(a.shows[0].date) - new Date(b.shows[0].date)
  )
  .slice(0, 3);

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
  {new Date(event.shows[0].date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })}
  {" • "}
  {event.shows[0].time}
</span>

<p className="event-venue">
  📍 {event.shows[0].venue}
</p>

      <p>{event.description}</p>

      {event.shows.length > 1 && (
  <>
    <p
      className="more-shows"
      onClick={() =>
        setExpanded({
          ...expanded,
          [event._id]: !expanded[event._id],
        })
      }
    >
      {expanded[event._id]
        ? "Show Less"
        : `More Shows (${event.shows.length - 1})`}
    </p>

    {expanded[event._id] &&
      event.shows.slice(1).map((show, index) => (
        <div key={index} className="extra-show">
          <p>
            {new Date(show.date).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
            {" • "}
            {show.time}
          </p>

          <p>📍 {show.venue}</p>
        </div>
      ))}
  </>
)}

      <button
              className="know-more-btn"
              onClick={() =>
                navigate(`/events/${event._id}`)
              }
            >
              View Details
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
