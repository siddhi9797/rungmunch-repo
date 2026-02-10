

import React, { useState } from "react";
import "../styles/events.css";
import eventsImg from "../assets/eventimg1.jpeg";
import {eventData} from "../data/eventsData";
import { useNavigate } from "react-router-dom";

function Events() {
  const [selectedLang, setSelectedLang] = useState("All");
  const [showAllUpcoming, setShowAllUpcoming] = useState(false);
  const [showAllPast, setShowAllPast] = useState(false);

  const filterEvents = (type) =>
    eventData.filter(
      (event) =>
        event.type === type &&
        (selectedLang === "All" || event.language === selectedLang)
    );

  const upcomingEvents = filterEvents("upcoming");
  const pastEvents = filterEvents("past");

  return (
    <div className="events-page">

      {/* HEADER */}
      <div className="events-header">
        <h1>EVENTS</h1>
        <p className="events-subtitle">
          Where stories unfold, voices rise, and communities connect.
        </p>
      </div>

      {/* INTRO */}
      <div className="events-card">
        <div className="events-text">
          <p>
            Rungmunch organizes theatre performances, cultural showcases,
            workshops, and creative gatherings that celebrate artistic
            expression and meaningful storytelling.
          </p>
          <p>
            Each event is crafted to bring artists and audiences together,
            creating immersive experiences that inspire dialogue, emotion,
            and community bonding.
          </p>
        </div>

        <div className="events-image">
          <img src={eventsImg} alt="Rungmunch Events" />
        </div>
      </div>

      {/* FILTER */}
      <div className="events-filter">
        {["All", "Marathi", "Hindi", "English"].map((lang) => (
          <button
            key={lang}
            className={selectedLang === lang ? "active" : ""}
            onClick={() => {
              setSelectedLang(lang);
              setShowAllUpcoming(false);
              setShowAllPast(false);
            }}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* UPCOMING */}
      <EventsSection
        title="Upcoming Events"
        events={upcomingEvents}
        showAll={showAllUpcoming}
        toggleShowAll={() => setShowAllUpcoming(!showAllUpcoming)}
      />

      {/* PAST */}
      <EventsSection
        title="Past Events"
        events={pastEvents}
        showAll={showAllPast}
        toggleShowAll={() => setShowAllPast(!showAllPast)}
      />
    </div>
  );
}

function EventsSection({ title, events, showAll, toggleShowAll }) {
    const navigate = useNavigate();
  const visibleCount = showAll ? events.length : 3;
  const visibleEvents = events.slice(0, visibleCount);

  return (
    <section className="events-section">
      <div className="events-section-header">
        <h2>{title}</h2>

        {events.length > 3 && (
          <button className="view-all-btn" onClick={toggleShowAll}>
            {showAll ? "View Less" : "View All"}
          </button>
        )}
      </div>

      <div className="events-grid">
        {visibleEvents.map((event) => (
          <div className="event-card" key={event.id}>
  <img src={event.image} alt={event.title} />
  <h3>{event.title}</h3>
  <span className="event-date">{event.date}</span>
  <p>{event.description}</p>

  <button
    className="know-more-btn"
    onClick={() => navigate(`/events/${event.id}`)}
  >
    View Details
  </button>
</div>

        ))}
      </div>
    </section>
  );
}


export default Events;
