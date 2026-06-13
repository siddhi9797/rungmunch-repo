import React, { useState, useEffect } from "react";
import "../styles/events.css";
import eventsImg from "../assets/eventimg1.jpeg";
import eventsImg3 from "../assets/e3.jpg";
import s1 from "../assets/slider1.jpg";
import s2 from "../assets/slider2.jpg";
import s3 from "../assets/slider3.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Events() {
const [selectedLang, setSelectedLang] = useState("All");
const [eventData, setEventData] = useState([]);

const [showAllUpcoming, setShowAllUpcoming] = useState(false);
const [showAllPast, setShowAllPast] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://rungmunch-backend.onrender.com/api/events")
      .then((res) => setEventData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filterEvents = (type) =>
    eventData.filter(
      (event) =>
        event.type === type &&
        (selectedLang === "All" || event.language === selectedLang)
    );

const upcomingEvents = filterEvents("upcoming");
const pastEvents = filterEvents("past");

const visibleUpcoming = showAllUpcoming
  ? upcomingEvents
  : upcomingEvents.slice(0, 3);

const visiblePast = showAllPast
  ? pastEvents
  : pastEvents.slice(0, 3);

  return (
    <div className="events-page">

      {/* HERO SECTION */}

     <section className="events-hero">


  <div className="hero-box">

    <span className="hero-tag">
      RUNGMUNCH CULTURAL EVENTS
    </span>

    <h1>
      Where Stories
      <br />
      Come Alive
    </h1>

    <p>
      Theatre performances, workshops,
      cultural showcases and community
      gatherings.
    </p>

<button
  className="hero-btn"
  onClick={() =>
    document
      .getElementById("events-section")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
>
  Explore Events
</button>

  </div>
</section>

      {/* ABOUT + CARDS */}

      <section className="events-overview">

        <div className="overview-left">

          <span>ABOUT EVENTS</span>

          <h2>
            Celebrating Art,
            Culture & Community
          </h2>

          <p>
            Rungmunch hosts meaningful events that
            connect people through storytelling,
            performances, workshops and creative
            experiences.
          </p>

          <p>
            Our events are designed to inspire,
            educate and build stronger communities.
          </p>

        </div>

        <div className="overview-right">

          <div className="category-card">
            <img src={eventsImg} alt="" />
            <div className="card-overlay">
              <h3>Theatre</h3>
            </div>
          </div>

          <div className="category-card">
            <img src={s1} alt="" />
            <div className="card-overlay">
              <h3>Workshops</h3>
            </div>
          </div>

          <div className="category-card">
            <img src={s2} alt="" />
            <div className="card-overlay">
              <h3>Cultural Shows</h3>
            </div>
          </div>

          <div className="category-card">
            <img src={s3} alt="" />
            <div className="card-overlay">
              <h3>Community</h3>
            </div>
          </div>

        </div>

      </section>

      {/* STORY SECTION */}

      <section className="story-section">

        <div className="story-content">

          <span>OUR JOURNEY</span>

          <h2>
            Every Event
            Tells A Story
          </h2>

          <p>
            Through performances, workshops and
            cultural celebrations, we create
            memorable experiences that inspire
            dialogue and bring communities together.
          </p>

        </div>

        <div className="story-image">
          <img src={eventsImg3} alt="" />
        </div>

      </section>

      {/* FILTER */}

      <section className="events-filter-section">

        <h2 id="events-section">
          Explore Events
        </h2>

        <div className="events-filter">

          {["All", "Marathi", "Hindi", "English"].map(
            (lang) => (
              <button
                key={lang}
                className={
                  selectedLang === lang
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelectedLang(lang)
                }
              >
                {lang}
              </button>
            )
          )}

        </div>

      </section>

      {/* FEATURED UPCOMING EVENTS */}

     <section className="events-section">

  <div className="section-header">
    <h2>Upcoming Events</h2>
  </div>

  <div className="events-grid">

    {visibleUpcoming.map((event) => (
      <div className="event-card" key={event._id}>

        <img
          src={event.image}
          alt={event.title}
        />

        <div className="event-content">

          <span>{event.date}</span>

          <h3>{event.title}</h3>

          <p>{event.description}</p>

          <button
            onClick={() =>
              navigate(`/events/${event._id}`)
            }
          >
            View Details
          </button>

        </div>

      </div>
    ))}

  </div>
  {upcomingEvents.length > 3 && (
  <div className="view-more-wrapper">
    <button
      className="view-more-btn"
      onClick={() =>
        setShowAllUpcoming(!showAllUpcoming)
      }
    >
      {showAllUpcoming
        ? "View Less"
        : "View All"}
    </button>
  </div>
)}

</section>


      {/* PAST EVENTS */}

     <section className="events-section">

  <div className="section-header">
    <h2>Past Events</h2>
  </div>

  <div className="events-grid">

   {visiblePast.map((event) => (
      <div className="event-card" key={event._id}>

        <img
          src={event.image}
          alt={event.title}
        />

        <div className="event-content">

          <span>{event.date}</span>

          <h3>{event.title}</h3>

          <p>{event.description}</p>

          <button
            onClick={() =>
              navigate(`/events/${event._id}`)
            }
          >
            View Details
          </button>

        </div>

      </div>
    ))}

  </div>
  {pastEvents.length > 3 && (
  <div className="view-more-wrapper">
    <button
      className="view-more-btn"
      onClick={() =>
        setShowAllPast(!showAllPast)
      }
    >
      {showAllPast
        ? "View Less"
        : "View All"}
    </button>
  </div>
)}

</section>

      {/* CTA */}

      <section className="events-cta">

  <div className="events-cta-content">

    <h2>Be Part Of Our Next Event</h2>

    <p>
      Join us and experience the power of theatre,
      culture and community.
    </p>

    <button
      onClick={() =>
        document
          .getElementById("events-section")
          ?.scrollIntoView({
            behavior: "smooth",
          })
      }
    >
      View Events
    </button>

  </div>

</section>
    </div>
  );
}

export default Events;