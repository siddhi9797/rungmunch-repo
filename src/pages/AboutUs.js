/*import React from "react";
import "../styles/aboutus.css"; // Import the CSS file

function AboutUs() {
  return (
    <div className="aboutus-page">

    
      <div className="aboutus-hero">
        <img src="/images/aboutimg.jpg" alt="About Us" />
        <div className="hero-text">
          <h1>Welcome to Rungmunch</h1>
          <p>Empowering communities through action and passion</p>
        </div>
      </div>

     
      <div className="vision-mission-values">
        <div className="vmv-card">
          <h3>Vision</h3>
          <p>To build a stronger, inclusive society</p>
        </div>
        <div className="vmv-card">
          <h3>Mission</h3>
          <p>Engage and empower every community member</p>
        </div>
        <div className="vmv-card">
          <h3>Values</h3>
          <p>Integrity, Passion, Collaboration</p>
        </div>
      </div>

     
      <div className="our-team">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/team1.jpg" alt="Member" />
            <h4>Jenny Doe</h4>
            <p>President</p>
          </div>
          <div className="team-member">
            <img src="/images/team2.webp" alt="Member" />
            <h4>Jane Smith</h4>
            <p>Coordinator</p>
          </div>
          <div className="team-member">
            <img src="/images/team3.webp" alt="Member" />
            <h4>Mike Johnson</h4>
            <p>Volunteer Lead</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
*/




import React from "react";
import "../styles/aboutus.css";
import aboutIcon from "../assets/who.png";
import aboutimg from "../assets/objective1.jpg";
import whatwedo from "../assets/whatwedo.png";
import start from "../assets/start.png";
import event from "../assets/event.png";
import expand from "../assets/expand.png";
import community from "../assets/community.png";
import artistsicon from "../assets/artistsicon.png";
import eventsicon from "../assets/eventsicon.png";
import audienceicon from "../assets/audienceicon.png";
import donationicon from "../assets/donationicon.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";



function AboutUs() {
  return (
    <div className="about-page">

      {/* ABOUT US HEADER */}
      <div className="about-header">
        <h1>ABOUT US</h1>
        <p className="about-subtitle">Celebrating culture, community, and creativity through every step of our journey.</p>
      </div>

      {/* WHITE CONTENT CARD */}
      <div className="about-card">

        {/* LEFT TEXT */}
        <div className="about-text">
  {/* ICON stays at top */}
  <img src={aboutIcon} alt="About Symbol" className="about-icon" />

  {/* TEXT BLOCK moves down */}
  <div className="about-text-content">
    <h2>WHO WE ARE</h2>

    <p>
      Rungmunch is a vibrant theatre platform dedicated to promoting
      creativity, culture, and meaningful storytelling through powerful
      stage performances and artistic events.
    </p>

    <p>
      We aim to nurture talent, connect communities, and preserve the
      essence of theatre by creating spaces where art inspires dialogue,
      emotion, and social awareness.
    </p>
  </div>
</div>


        {/* RIGHT IMAGE */}
        <div className="about-image">
      
          <img src={aboutimg} alt="About Rungmunch" />
        </div>

      </div>
      {/* WHAT WE DO SECTION */}
<div className="what-we-do">
  <div className="what-we-do-image">
    <img src={whatwedo} alt="About what we do" />
  </div>

  <div className="what-we-do-text">
    <h2>What We Do</h2>
    <p>
      Our mission is to celebrate the Maharashtrian culture, traditions
      and customs amongst the community in Sacramento and surrounding
      areas. We achieve this by organizing regular activities and events
      that reflect the spirit of our community. Typically in a calendar
      year, MMSAC celebrates following events (but can be subject to change).
    </p>
    <p>
      MMSAC provides a platform for local artists to showcase their
      talent. It is also a platform for the next generation to understand
      and preserve our customs and traditions and foster pride for our
      common language, culture and history. MMSAC conducts various
      workshops throughout the year for kids.
    </p>
  </div>
</div>


<div className="journey-section">
  <h2 className="journey-title">Our Journey</h2>

  <div className="journey-line">

    <div className="journey-step">
      <span className="journey-year">2019</span>
      <img src={start} alt="start" />
      <div className="journey-dot"></div>
      <p>Rungmunch founded</p>
    </div>

    <div className="journey-step">
      <span className="journey-year">2020</span>
      <img src={event} alt="Events" />
      <div className="journey-dot"></div>
      <p>First major cultural event</p>
    </div>

    <div className="journey-step">
      <span className="journey-year">2022</span>
      <img src={expand} alt="Expanded Program" />
      <div className="journey-dot"></div>
      <p>Expanded program</p>
    </div>

    <div className="journey-step">
      <span className="journey-year">2024</span>
      <img src={community} alt="Community" />
      <div className="journey-dot"></div>
      <p>Community outreach initiatives</p>
    </div>

  </div>
</div>

{/* OUR TEAM SECTION */}
<div className="our-team">
  <h2>Our Team</h2>

  <div className="team-grid">
    <div className="team-member">
      <img src="/images/team1.jpg" alt="Member" />
      <h4>Jenny Doe</h4>
      <p>President</p>
      <div className="team-socials">
    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/jenny-doe"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={linkedinIcon} alt="LinkedIn" />
    </a>

    {/* Email */}
    <a href="mailto:jenny@example.com">
      <img src={emailIcon} alt="Email" />
    </a>
  </div>
    </div>

    <div className="team-member">
      <img src="/images/team2.webp" alt="Member" />
      <h4>Jane Smith</h4>
      <p>Coordinator</p>
      <div className="team-socials">
    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/jenny-doe"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={linkedinIcon} alt="LinkedIn" />
    </a>

    {/* Email */}
    <a href="mailto:jenny@example.com">
      <img src={emailIcon} alt="Email" />
    </a>
  </div>
    </div>

    <div className="team-member">
      <img src="/images/team3.webp" alt="Member" />
      <h4>Mike Johnson</h4>
      <p>Volunteer Lead</p>
      <div className="team-socials">
    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/jenny-doe"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={linkedinIcon} alt="LinkedIn" />
    </a>

    {/* Email */}
    <a href="mailto:jenny@example.com">
      <img src={emailIcon} alt="Email" />
    </a>
  </div>
    </div>
  </div>
</div>

{/* IMPACT STATS SECTION */}
<div className="impact-section">
  <div className="impact-card">
    <img src={artistsicon} alt="Artists Supported" />
    <h3>120+</h3>
    <p>Artists Supported</p>
  </div>

  <div className="impact-card">
    <img src={eventsicon} alt="Cultural Events" />
    <h3>45+</h3>
    <p>Cultural Events</p>
  </div>

  <div className="impact-card">
    <img src={audienceicon} alt="Audience Reached" />
    <h3>25,000+</h3>
    <p>Audience Reached</p>
  </div>

  <div className="impact-card">
    <img src= {donationicon} alt="Donations" />
    <h3>₹10L+</h3>
    <p>Donations</p>
  </div>
</div>


    </div>
  );
}

export default AboutUs;


