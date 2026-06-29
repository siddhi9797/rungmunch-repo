import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/admin.css";

function AdminPage() {
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);

  const [editId, setEditId] = useState(null);

const [form, setForm] = useState({
  title: "",
  date: "",
  time: "",
  venue: "",
  description: "",
  language: "English",
  type: "upcoming"
});

  const [image, setImage] = useState(null);

  // ✅ FETCH EVENTS
  const fetchEvents = () => {
    axios
      .get("https://rungmunch-backend.onrender.com/api/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(form).forEach((key) => {
      data.append(key, form[key]);
    });

    if (image) {
      data.append("image", image);
    }

    try {
      if (editId) {

        // ✅ UPDATE EVENT
        await axios.put(
          `https://rungmunch-backend.onrender.com/api/events/${editId}`,
          data
        );

        alert("Event Updated ✅");

      } else {

        // ✅ CREATE EVENT
        await axios.post(
          "https://rungmunch-backend.onrender.com/api/events/create",
          data
        );

        alert("Event Added ✅");
      }

      resetForm();
      fetchEvents();

    } catch (err) {
      console.error(err);
      alert("Error ❌");
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {

    if (!window.confirm("Delete this event?")) return;

    try {

      await axios.delete(
        `https://rungmunch-backend.onrender.com/api/events/${id}`
      );

      alert("Deleted ✅");

      fetchEvents();

    } catch (err) {
      console.error(err);
    }
  };

  // ================= EDIT =================
  const handleEdit = (event) => {

setForm({
  title: event.title,
  date: event.date,
  time: event.time,
  venue: event.venue,
  description: event.description,
  language: event.language,
  type: event.type
});

    setEditId(event._id);

    setShowModal(true);
  };

  // RESET
  const resetForm = () => {

setForm({
  title: "",
  date: "",
  time: "",
  venue: "",
  description: "",
  language: "English",
  type: "upcoming"
});

    setImage(null);
    setEditId(null);
    setShowModal(false);
  };

  return (
    <div className="admin-wrapper">

      {/* SIDEBAR */}
      <div className="admin-sidebar">
        <h2 className="logo">Rungmunch</h2>

        <ul>
          <li className="active">Events</li>
        </ul>
      </div>

      {/* CONTENT */}
      <div className="admin-content">

        <div className="events-header-admin">
          <h2>Events</h2>

          <button onClick={() => setShowModal(true)}>
            + Add Event
          </button>
        </div>

        {/* EVENTS LIST */}
        <div className="admin-events-grid">

          {events.map((event) => (

            <div className="admin-event-card" key={event._id}>

              <img src={event.image} alt="" />

              <h3>{event.title}</h3>

             <p className="event-date">
  {new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })}{" "}
  • {event.time}
</p>

              <p className="event-venue">📍 {event.venue}</p>

              <p className="event-desc">{event.description}</p>

              <div className="admin-actions">

                <button onClick={() => handleEdit(event)}>
                  Edit
                </button>

                <button onClick={() => handleDelete(event._id)}>
                  Delete
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">

          <div className="modal-box">

            <button className="close-btn" onClick={resetForm}>
              ✖
            </button>

            <h2>{editId ? "Edit Event" : "Add Event"}</h2>

            <form onSubmit={handleSubmit} className="admin-form">

              <input
                type="text"
                name="title"
                placeholder="Event Title"
                value={form.title}
                onChange={handleChange}
              />

           <input
  type="date"
  name="date"
  value={form.date}
  onChange={handleChange}
/>

<input
  type="time"
  name="time"
  value={form.time}
  onChange={handleChange}
/>

<input
  type="text"
  name="venue"
  placeholder="Venue"
  value={form.venue}
  onChange={handleChange}
/>
              <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
              />

              <label>Language</label>

              <select
                name="language"
                value={form.language}
                onChange={handleChange}
              >
                <option value="English">English</option>
                <option value="Marathi">Marathi</option>
                <option value="Hindi">Hindi</option>
              </select>

              <label>Event Type</label>

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
              >
                <option value="upcoming">Upcoming</option>
                <option value="past">Past</option>
              </select>

              <label>Upload Image</label>

              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />

              <button type="submit">
                {editId ? "Update Event" : "Add Event"}
              </button>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPage;