import { useState, useEffect } from "react";
import { vistaEvents } from "../data/eventsData";
import "../styles/initiatives.css";
import Registration from "../components/Registration";

function Vista() {
  const [video, setVideo] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [user, setUser] = useState(null);

  const visibleEvents = showAll ? vistaEvents : vistaEvents.slice(0, 3);

  // ✅ Get logged-in user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("rungmunchUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // ✅ Upload handler
  const handleSubmit = async () => {
    if (!video) {
      alert("Please upload a video first!");
      return;
    }

    if (!user) {
      alert("Please login first!");
      return;
    }

    // ❌ Only virtual users allowed
    if (user.mode !== "Virtual") {
      alert("Only virtual participants can upload videos!");
      return;
    }

    const formData = new FormData();
    formData.append("video", video);
    formData.append("userId", user.id);

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/auth/upload-video`,
        {
          method: "POST",
          body: formData
        }
      );

      const data = await res.json();
      alert(data.message);

      setVideo(null); // reset after upload

    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="page">

      {/* HEADER */}
      <div className="page-header">
        <h1>VISTA</h1>
        <p className="initiative-subtitle">
          Virtual Stage – Participate in cultural events from anywhere
        </p>
      </div>

      {/* ================= ROADMAP ================= */}
      <div className="initiative-section">
        <h2>How to Participate</h2>

        <div className="roadmap">

          <div
            className="roadmap-step"
            onClick={() => setOpenModal("registration")}
          >
            <div className="circle">1</div>
            <div className="step-box">
              <h3>Register</h3>
              <p>Create your account on the platform</p>
            </div>
          </div>

          <div className="arrow">➜</div>

          <div className="roadmap-step">
            <div className="circle">2</div>
            <div className="step-box">
              <h3>Choose Category</h3>
              <p>Select your performance category</p>
            </div>
          </div>

          <div className="arrow">➜</div>

          <div className="roadmap-step">
            <div className="circle">3</div>
            <div className="step-box">
              <h3>Upload Video</h3>
              <p>Submit your performance video</p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= UPLOAD SECTION ================= */}
      <div className="initiative-section">
        <h2>Upload Performance</h2>

        {!user ? (
          <p>Please login first to upload your video.</p>
        ) : user.mode !== "Virtual" ? (
          <p>Only virtual participants can upload videos.</p>
        ) : (
          <div className="upload-box">
            <p>Select your performance video</p>

            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0])}
            />

            {video && <p>Selected: {video.name}</p>}

            {/* 🎥 Preview */}
            {video && (
              <video width="300" controls style={{ marginTop: "10px" }}>
                <source src={URL.createObjectURL(video)} />
              </video>
            )}

            <button className="initiative-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}
      </div>

      {/* ================= EVENTS ================= */}
      <div className="initiative-section">
        <h2>Past Virtual Events</h2>

        {vistaEvents.length > 3 && (
          <div className="events-btn-row">
            <button
              className="initiative-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less" : "View All"}
            </button>
          </div>
        )}

        <div className="initiative-cards">
          {visibleEvents.map((event) => (
            <div key={event.id} className="initiative-card">
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-language">{event.language}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {openModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <span
              className="close-btn"
              onClick={() => setOpenModal(null)}
            >
              &times;
            </span>

            {openModal === "registration" && <Registration />}
          </div>
        </div>
      )}

    </div>
  );
}

export default Vista;