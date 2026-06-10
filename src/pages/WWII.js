import { useNavigate } from "react-router-dom";
import { wwiiEvents } from "../data/eventsData";
import { motion } from "framer-motion";
import "../styles/wwii.css";
import e1 from "../assets/e1.jpg";
import e2 from "../assets/e2.jpg";
import e3 from "../assets/slider1.jpg";
import CompetitionSlider from "../components/CompetitionSlider";

function WWII() {
  const navigate = useNavigate();

  return (
    <div className="wwii-page">

      {/* HERO SECTION */}
      <section className="wwii-hero">

        <div className="hero-overlay"></div>

        <div className="floating-circle circle1"></div>
        <div className="floating-circle circle2"></div>
        <div className="floating-circle circle3"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="hero-badge">
            Global Talent Platform
          </span>

          <h1 className="hero-main-title">
  Discover The
  <span>Next Global Star</span>
</h1>

<p className="hero-desc">
  World Wide Indian Idol is a global platform that discovers,
  nurtures, and celebrates extraordinary talent while connecting
  artists and communities through creativity.
</p>

<div className="hero-buttons">
  <button
    onClick={() =>
      document
        .getElementById("competitions")
        .scrollIntoView({ behavior: "smooth" })
    }
  >
    Explore Competitions
  </button>

  <button
    onClick={() =>
      document
        .getElementById("activities")
        .scrollIntoView({ behavior: "smooth" })
    }
  >
    Our Activities
  </button>
</div>
        </motion.div>
      </section>

<section className="vision-section">

  <div className="vision-heading">
    <h2>It's A Global Effort</h2>

    <p>
      Empowering artists, creating opportunities and building
      meaningful connections through art.
    </p>
  </div>

  <div className="vision-grid">

    <div className="vision-card">
      <h3>⭐ Hidden Stars</h3>
      <p>
        To search for hidden stars and bring them in front of
        a global audience.
      </p>
    </div>

    <div className="vision-card">
      <h3>🎨 Inspire Artists</h3>
      <p>
        To create awareness and inspire passionate artists
        through art.
      </p>
    </div>

    <div className="vision-card">
      <h3>🤝 Artist Support</h3>
      <p>
        To create a support platform for artists to seek
        guidance, help and resources.
      </p>
    </div>

    <div className="vision-card">
      <h3>❤️ Community Connect</h3>
      <p>
        To create a support platform for the community to
        reach passionate artists.
      </p>
    </div>

  </div>

</section>

      {/* MISSION */}
      <section className="mission-section">

        <div className="mission-image">
          <img
            src={e3}
            alt="Talent"
          />
        </div>

        <div className="mission-content">

          <h2>
            Our Mission,
            <span>Your Talent</span>
          </h2>

          <div className="mission-cards">

            <div className="mission-card">
              <h4>🎤 Hidden Stars</h4>
              <p>Finding talented artists globally.</p>
            </div>

            <div className="mission-card">
              <h4>🌎 Global Reach</h4>
              <p>Connecting artists with audiences worldwide.</p>
            </div>

            <div className="mission-card">
              <h4>🤝 Artist Support</h4>
              <p>Providing resources and guidance.</p>
            </div>

            <div className="mission-card">
              <h4>❤️ Community Impact</h4>
              <p>Using art for social good.</p>
            </div>

          </div>
        </div>

      </section>

      {/* COMPETITIONS */}
 <section id="competitions">
  <CompetitionSlider />
</section>

      {/* ACTIVITIES */}
      <section id="activities" className="activities-section">

  <div className="activities-wrapper">

    {/* LEFT SIDE */}

    <div className="activities-left">

      <h2>Our Activities</h2>

      <p className="activities-intro">
        Through talent discovery, community engagement,
        and cultural awareness initiatives, WWII creates
        opportunities for artists to shine on a global stage.
      </p>

      <div className="activities-features">

        {wwiiEvents.map((event) => (

          <div key={event.id} className="feature-item">

            <div className="feature-icon">
              0{event.id}
            </div>

            <div>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>

          </div>

        ))}

      </div>

    </div>

    {/* RIGHT SIDE */}

    <div className="activities-right">

<div className="activity-image-card">
  <img
    src={e1}
    alt="Talent Discovery"
  />

  <div className="image-title">
    Talent Discovery
  </div>
</div>

<div className="activity-image-card">
  <img
    src={e2}
    alt="Global Community"
  />

  <div className="image-title">
    Global Community
  </div>
</div>

    </div>

  </div>

</section>

    </div>
  );
}

export default WWII;