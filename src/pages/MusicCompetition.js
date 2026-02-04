import React, { useState } from "react";
import "../styles/competition.css";

import timelineIcon from "../assets/timeline.png";
import registerIcon from "../assets/register.png";
import categoryIcon from "../assets/categories.png";
import rulesIcon from "../assets/rules.png";
import avIcon from "../assets/avguide.png";
import Registration from "../components/Registration";


function MusicCompetition() {

  const [openModal, setOpenModal] = useState(null);
  const [openRule, setOpenRule] = useState(null);

  return (
    <div className="music-page">

      {/* HEADER */}
      <div className="music-banner">
        <h1>Music Competition</h1>
        <p>Explore guidelines, registration, and participation details</p>
      </div>

      {/* CARDS */}
      <div className="music-cards">

        {/* Timeline */}
        <div className="music-card">
          <img src={timelineIcon} alt="Timeline" />
          <h3>Timeline</h3>
          <p>Check important dates and competition schedule.</p>
          <button onClick={() => setOpenModal("timeline")}>Read More</button>
        </div>

        {/* Registration */}
        <div className="music-card">
          <img src={registerIcon} alt="Registration" />
          <h3>Registration</h3>
          <p>Register to participate in the competition.</p>
          <button onClick={() => setOpenModal("registration")}>Register</button>
        </div>

        {/* Categories */}
        <div className="music-card">
          <img src={categoryIcon} alt="Categories" />
          <h3>Categories</h3>
          <p>Explore different categories and age groups.</p>
          <button onClick={() => setOpenModal("categories")}>Read More</button>
        </div>

        {/* Rules */}
        <div className="music-card">
          <img src={rulesIcon} alt="Rules" />
          <h3>Rules</h3>
          <p>Read rules and regulations.</p>
          <button onClick={() => setOpenModal("rules")}>Read More</button>
        </div>

        {/* A/V Guide */}
        <div className="music-card">
          <img src={avIcon} alt="AV Guide" />
          <h3>A/V Guide</h3>
          <p>Audio and video submission guidelines.</p>
          <button onClick={() => setOpenModal("av")}>Read More</button>
        </div>

      </div>

      {/* MODAL */}
      {openModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            <span
              className="close-btn"
              onClick={() => setOpenModal(null)}
            >
              &times;
            </span>

            {openModal === "timeline" && (
  <>
    <h2>Competition Timeline</h2>

    <div className="timeline-container">

      <div className="timeline-item left">
        <div className="content">
          <h4>November 14, 2020</h4>
          <p>Registration Opens</p>
          <p>USA: $18</p>
          <p>India: ₹750</p>
        </div>
      </div>

      <div className="timeline-item right">
        <div className="content">
          <h4>January 8, 2021</h4>
          <p>Registration Closes</p>
          <p>Before midnight (USA Pacific Time)</p>
        </div>
      </div>

      <div className="timeline-item left">
        <div className="content">
          <h4>January 10, 2021</h4>
          <p>Competition Begins</p>
        </div>
      </div>

    </div>
  </>
)}

            {openModal === "registration" && (
  <Registration/>
)}



           {openModal === "categories" && (
  <>
    <h2 className="modal-title">Competition Categories</h2>

    {/* CLASSICAL */}
    <div className="category-box">
      <img src="/images/event1.jpg" alt="Classical" />
      <h3>Classical</h3>
      <p>
        Hindustani classical bandish in the form of Chhota Khayal, Tarana or
        Dhrupad.
      </p>
      <p><strong>Time Allowed:</strong> 6 Minutes Maximum</p>

      <ul>
        <li>Junior (Ages 12 and under)</li>
        <li>Youth (Ages 13 to 20)</li>
        <li>Adult (Ages 21 to 59)</li>
      </ul>
    </div>

    {/* SEMI CLASSICAL */}
    <div className="category-box">
      <img src="/images/event2.jpg" alt="Semi Classical" />
      <h3>Semi Classical</h3>
      <p>
        Bhajan, Ghazal, Tappa, Thumri, Sufi, Natya-Sangeet etc.
        <br />
        <strong>(NON-BOLLYWOOD SONGS)</strong>
      </p>
      <p><strong>Time Allowed:</strong> 6 Minutes Maximum</p>

      <ul>
        <li>Junior (Ages 12 and under)</li>
        <li>Youth (Ages 13 to 20)</li>
        <li>Adult (Ages 21 to 59)</li>
      </ul>
    </div>

    {/* BOLLYWOOD */}
    <div className="category-box">
      <img src="/images/event3.jpg" alt="Bollywood" />
      <h3>Bollywood</h3>
      <p>Any Hindi song from Bollywood movies.</p>
      <p><strong>Time Allowed:</strong> 5 Minutes Maximum</p>

      <ul>
        <li>Junior (Ages 12 and under)</li>
        <li>Youth (Ages 13 to 20)</li>
        <li>Adult (Ages 21+)</li>
      </ul>
    </div>
  </>
)}


           {openModal === "rules" && (
  <>
    <h2 className="modal-title">Competition Rules</h2>

    <div className="rules-container">

      {/* GENERAL */}
      <div className="rule-section">
        <div
          className="rule-header"
          onClick={() =>
            setOpenRule(openRule === "general" ? null : "general")
          }
        >
          General Rules
        </div>

        {openRule === "general" && (
          <ul className="rule-content">
            <li>Only one entry per participant.</li>
            <li>Video must be clear with no editing.</li>
            <li>Participants must follow time limits.</li>
            <li>Judges’ decision will be final.</li>
          </ul>
        )}
      </div>

      {/* CLASSICAL */}
      <div className="rule-section">
        <div
          className="rule-header"
          onClick={() =>
            setOpenRule(openRule === "classical" ? null : "classical")
          }
        >
          Classical
        </div>

        {openRule === "classical" && (
          <ul className="rule-content">
            <li>Only Hindustani Classical compositions allowed.</li>
            <li>Chhota Khayal, Tarana or Dhrupad permitted.</li>
            <li>No Bollywood-based classical songs.</li>
          </ul>
        )}
      </div>

      {/* SEMI CLASSICAL */}
      <div className="rule-section">
        <div
          className="rule-header"
          onClick={() =>
            setOpenRule(openRule === "semiclassical" ? null : "semiclassical")
          }
        >
          Semi Classical
        </div>

        {openRule === "semiclassical" && (
          <ul className="rule-content">
            <li>Bhajan, Ghazal, Thumri, Sufi, Natya-Sangeet allowed.</li>
            <li>Bollywood songs are NOT allowed.</li>
            <li>Lyrics must be appropriate.</li>
          </ul>
        )}
      </div>

      {/* BOLLYWOOD */}
      <div className="rule-section">
        <div
          className="rule-header"
          onClick={() =>
            setOpenRule(openRule === "bollywood" ? null : "bollywood")
          }
        >
          Bollywood
        </div>

        {openRule === "bollywood" && (
          <ul className="rule-content">
            <li>Only Hindi Bollywood movie songs allowed.</li>
            <li>Time limit must not exceed 5 minutes.</li>
            <li>No remix or mashups.</li>
          </ul>
        )}
      </div>

    </div>
  </>
)}


            {openModal === "av" && (
  <>
    <h2 className="modal-title">A/V Submission Guidelines</h2>

    <div className="av-guidelines">
      <p>
        Please read these instructions carefully before recording and uploading
        your performance video.
      </p>

      <ul>
        <li>The file size should not exceed <strong>100 MB</strong>.</li>

        <li>
          The video should be recorded using a good smartphone, DSLR camera, or
          handycam in <strong>landscape format</strong> (hold your phone
          horizontally).
        </li>

        <li>
          The recording quality should be <strong>720p minimum</strong>.
          Higher quality is acceptable as long as the file size limit is not
          exceeded.
        </li>

        <li>
          Sound quality must be clear and audible with no background noise.
          Using a good quality external microphone is recommended.
        </li>

        <li>
          Ensure proper camera angle and lighting so that your face is clearly
          visible. A plain and clean background is preferred.
        </li>

        <li>
          Make sure there is enough space to cover your movements, and that the
          audio track is clearly audible throughout the recording.
        </li>

        <li>
          The video <strong>MUST NOT</strong> be edited. It should be a single,
          continuous recording with no cuts, transitions, or enhancements.
        </li>

        <li>
          Videos containing advertisements, logos, or banners will
          <strong>not</strong> be accepted.
        </li>

        <li>
          Accepted file formats:
          <strong>
            MP4, MOV, M4V, MKV, AVI, WMV, M4P, MPG
          </strong>
        </li>
      </ul>
    </div>
  </>
)}


          </div>
        </div>
      )}

    </div>
  );
}

export default MusicCompetition;
