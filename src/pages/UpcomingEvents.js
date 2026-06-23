import React, { useState, useEffect } from "react";
import "../styles/upcomingEvents.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpcomingEvents() {
  const [selectedLang, setSelectedLang] = useState("All");
  const [events, setEvents] = useState([]);

  const navigate = useNavigate();

useEffect(() => {
  axios
    .get("https://rungmunch-backend.onrender.com/api/events")
    .then((res) => {

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const upcoming = res.data.filter(
        (event) => new Date(event.date) >= today
      );

      setEvents(upcoming);
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
      <div className="events-header">
        <h1>Upcoming Events</h1>
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
              {event.date}
            </span>

            <p>{event.description}</p>

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

export default UpcomingEvents;