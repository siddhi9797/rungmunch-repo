import { wwiiEvents } from "../data/eventsData";
import "../styles/initiatives.css";

function WWII() {
  return (
    <div className="page">

      <div className="initiative-hero">
        <h1>WWII Initiative</h1>
        <p>Programs focused on cultural and community development.</p>
      </div>

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