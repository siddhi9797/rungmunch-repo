import { useNavigate } from "react-router-dom";
import { wwiiEvents } from "../data/eventsData";
import "../styles/initiatives.css";

function WWII() {
  const navigate = useNavigate();

  return (
    <div className="page">

      {/* ===== NEW HERO SECTION ===== */}
      <div className="wwii-hero">

        <h1 className="wwii-title">
          WWII <span>– World Wide Indian Idol</span>
        </h1>

        <p className="wwii-tagline">
          It's a Global Effort
        </p>

        <div className="wwii-content">
          <p>
            To search for hidden stars and bring them in front of a global audience
          </p>

          <p>
            To create awareness and inspire passionate artists to contribute to the betterment of the community through art.
          </p>

          <p>
            To create a support platform for artists to seek guidance, help, and resources.
          </p>

          <p>
            To create a support platform for the community to reach the passionate artist for the cause.
          </p>
        </div>

      </div>

      {/* ===== COMPETITION SECTION ===== */}
      <div className="competition-section">
        <h2>Competitions</h2>

        <div className="competition-cards">

          <div
            className="competition-card"
            onClick={() => navigate("/competition/dance")}
          >
            <h3>Dance</h3>
          </div>

          <div
            className="competition-card"
            onClick={() => navigate("/competition/music")}
          >
            <h3>Music</h3>
          </div>

          <div
            className="competition-card"
            onClick={() => navigate("/competition/instrumental")}
          >
            <h3>Instrumental</h3>
          </div>

        </div>
      </div>

      {/* ===== EXISTING ACTIVITIES ===== */}
      <div className="initiative-section">
        <h2>Our Activities</h2>

        <div className="initiative-cards">
          {wwiiEvents.map((event) => (
            <div key={event.id} className="initiative-card">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default WWII;