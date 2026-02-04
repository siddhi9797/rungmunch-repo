import React from "react";
import { Link } from "react-router-dom";
import "../styles/getinvolved.css";

import donateIcon from "../assets/donationicon.png";
import volunteerIcon from "../assets/volunteer.png";
import participateIcon from "../assets/participate.png";

function GetInvolved() {
  return (
    <div className="getinvolved-page">

      {/* FULL WIDTH BANNER */}
      <div className="getinvolved-banner">
        <h1>Get Involved with Rungmunch</h1>
        <p>Be a part of culture, creativity, and community</p>
      </div>

      <div className="getinvolved-content">

        {/* WHY JOIN */}
        <div className="why-join">
          <h2>Why Join Rungmunch?</h2>
          <p>
            Rungmunch is a vibrant platform that nurtures creativity, culture,
            and talent. By joining us, you become part of a growing community
            that supports art, encourages participation, and creates meaningful
            cultural experiences.
          </p>
        </div>

        {/* CARDS */}
        <div className="involve-cards">

          <div className="involve-card">
            <img src={donateIcon} alt="Donate" />
            <h3>Want to Donate</h3>
            <p>
              Support artists and cultural initiatives by contributing to
              events and programs that promote creativity and social impact.
            </p>
            <Link to="/donate" className="action-btn">
              Yes, I’m Starting
            </Link>
          </div>

          <div className="involve-card">
            <img src={volunteerIcon} alt="Volunteer" />
            <h3>Be a Volunteer</h3>
            <p>
              Join our team and help organize events, manage programs,
              and bring cultural experiences to life.
            </p>
            <Link to="/volunteer" className="action-btn">
              Yes, I’m Starting
            </Link>
          </div>

          <div className="involve-card">
            <img src={participateIcon} alt="Participate" />
            <h3>Participate</h3>
            <p>
              Take part in competitions, performances, and creative
              showcases to express your talent on a bigger stage.
            </p>
            <Link to="/register-competition" className="action-btn">
              Yes, I’m Starting
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default GetInvolved;
