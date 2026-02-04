import { useParams } from "react-router-dom";
import { eventData, musicTeam, choreographersTeam } from "../data/eventsData";
import { FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import "../styles/eventDetails.css";
import { useState } from "react";

function EventDetails() {
  const { id } = useParams();
  const event = eventData.find((e) => e.id === Number(id));
  const [showAllMusic, setShowAllMusic] = useState(false);
 const [showAllChoreographers, setShowAllChoreographers] = useState(false);


  if (!event) return <h2>Event not found</h2>;

  return (
    <div className="event-details-page">

      {/* HERO */}
      <div
        className="event-hero"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div className="hero-overlay">
          <h1>{event.title}</h1>
          <p>{event.date} | Friday | 7:30 PM</p>
        </div>
      </div>

      {/* NAV BUTTONS */}
      <div className="event-nav">
        {[
          "about",
          "music",
          "choreographers",
          "actors",
          "backstage",
        ].map((sec) => (
          <a key={sec} href={`#${sec}`}>
            {sec.replace("-", " ").toUpperCase()}
          </a>
        ))}
      </div>

      {/* ABOUT */}
      <section id="about" className="event-section">
        <h2>About the Show</h2>
        <p className="event-description">
  This musical evening is a celebration of rhythm, melody, and cultural expression,
  bringing together passionate performers and music lovers under one roof. The event
  is designed to showcase a diverse range of musical styles, blending traditional and
  contemporary performances to create an engaging experience for the audience.
  Each performance reflects dedication, creativity, and the spirit of collaboration.
  The show aims to encourage emerging talent while also honoring experienced artists.
  Through music, we strive to build connections, evoke emotions, and create lasting
  memories for everyone attending. This event is not just a performance, but a journey
  through sound, culture, and artistic expression.
</p>

      </section>

      {/* MUSIC TEAM */}
      <section id="music" className="event-section">
         <div className="section-header">
  <div className="title-wrapper">
    <h2>Music Team</h2>
    <p className="section-subtitle">
      Some of the Bay Area's most talented singers & musicians
    </p>
  </div>

  <button onClick={() => setShowAllMusic(!showAllMusic)}>
    {showAllMusic ? "View Less" : "View All"}
  </button>
</div>


        <div className="team-grid">
          {(showAllMusic ? musicTeam : musicTeam.slice(0, 3)).map((m) => (
            <div className="team-card" key={m.name}>
              <img src={m.image} alt={m.name} />
              <h3>{m.name}</h3>

              <div className="social-icons">
  <a href={m.linkedin} target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={20} color="#0A66C2" />
  </a>
  <a href={`mailto:${m.email}`}>
    <FaEnvelope size={20} color="#D44638" />
  </a>
  <a href={m.facebook} target="_blank" rel="noopener noreferrer">
    <FaFacebook size={20} color="#1877F2" />
  </a>
</div>


              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHOREOGRAPHERS */}
<section id="choreographers" className="event-section">
  <div className="section-header">
  <div className="title-wrapper">
    <h2>Choreographers</h2>
    <p className="section-subtitle">
      Meet Our Esteemed Choreographers
    </p>
  </div>

  <button onClick={() => setShowAllChoreographers(!showAllChoreographers)}>
    {showAllChoreographers ? "View Less" : "View All"}
  </button>
</div>




  <div className="team-grid">
    {(showAllChoreographers
      ? choreographersTeam
      : choreographersTeam.slice(0, 3)
    ).map((c) => (
      <div className="team-card" key={c.name}>
        <img src={c.image} alt={c.name} />
        <h3>{c.name}</h3>

        <div className="social-icons">
          <a href={c.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} color="#0A66C2" />
          </a>
          <a href={`mailto:${c.email}`}>
            <FaEnvelope size={20} color="#D44638" />
          </a>
          <a href={c.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} color="#1877F2" />
          </a>
        </div>

        <p>{c.role}</p>
      </div>
    ))}
  </div>
</section>


    </div>
  );
}

export default EventDetails;
