import React, { useState, useEffect } from "react";
import "../styles/upcomingEvents.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PastEvents() {
  const [selectedLang, setSelectedLang] = useState("All");
  const [events, setEvents] = useState([]);
  const [expanded, setExpanded] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://rungmunch-backend.onrender.com/api/events")
      .then((res) => {
const today = new Date();
today.setHours(0, 0, 0, 0);

const past = res.data.filter((event) =>
  event.shows.every((show) => new Date(show.date) < today)
);



setEvents(past);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredEvents = events.filter(
    (event) =>
      selectedLang === "All" ||
      event.language === selectedLang
  );

  return (
    <div className="events-page">
      <div className="page-banner events-header">
        <h1>Past Events</h1>
      </div>

      <div className="events-filter">
        {["All", "Marathi", "Hindi", "English"].map((lang) => (
          <button
            key={lang}
            className={selectedLang === lang ? "active" : ""}
            onClick={() => setSelectedLang(lang)}
          >
            {lang}
          </button>
        ))}
      </div>

      <div className="events-grid">
        {filteredEvents.map((event) => (
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
    </div>
  );
}

export default PastEvents;