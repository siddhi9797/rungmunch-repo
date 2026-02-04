import "../styles/events.css";

function EventCard({ event }) {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} />
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <span>{event.type} | {event.mode}</span>
    </div>
  );
}

export default EventCard;
