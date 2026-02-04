
import React, { useState } from "react";


import "../styles/contactus.css";

import emailIcon from "../assets/email.png";
import phoneIcon from "../assets/phone.png";
import locationIcon from "../assets/location.png";

function ContactUs() {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const contactData = { name, email, phone, message };

  try {
    const res = await fetch("http://localhost:5000/api/auth/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData),
    });

    const result = await res.json();
    alert(result.message || "Message sent successfully!");

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  } catch (err) {
    console.error(err);
    alert("Failed to send message.");
  } finally {
    setLoading(false);
  }
};



  const faqs = [
  {
    question: "How can I contact Rungmunch?",
    answer: "You can email us, call us, or use the contact form on this page."
  },
  {
    question: "How long does it take to get a response?",
    answer: "We usually respond within 24 to 48 hours."
  },
  {
    question: "Can I volunteer with Rungmunch?",
    answer: "Yes, visit the Get Involved page to apply as a volunteer."
  },
  {
    question: "Where is Rungmunch located?",
    answer: "We are based in Pune, India."
  },
  {
    question: "Do you organize cultural events?",
    answer: "Yes, we organize and support various cultural activities."
  },
  {
    question: "How can I collaborate?",
    answer: "Send us a message with your idea and details."
  }
];

const [page, setPage] = useState(0);

const itemsPerPage = 3;
const totalPages = Math.ceil(faqs.length / itemsPerPage);

const startIndex = page * itemsPerPage;
const visibleFaqs = faqs.slice(startIndex, startIndex + itemsPerPage);


  return (
    <div className="contact-page">

     
      <div className="contact-banner">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Feel free to reach out anytime.</p>
      </div>

      
      <div className="contact-content">
        <div className="contact-form-box">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Your Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
  />
  <input
    type="email"
    placeholder="Email Address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
  <input
    type="tel"
    placeholder="Phone Number"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    required
  />
  <textarea
    placeholder="Your Message"
    rows="5"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    required
  ></textarea>

  <button type="submit" disabled={loading}>
  {loading ? "Sending..." : "Send Message"}
</button>

</form>

        </div>

        
        <div className="contact-info-box">

          <a
            href="mailto:rungmunch@gmail.com"
            className="contact-info-card"
          >
            <img src={emailIcon} alt="Email" />
            <h3>Email</h3>
            <p>rungmunch@gmail.com</p>
          </a>

          <a
            href="tel:+919999999999"
            className="contact-info-card"
          >
            <img src={phoneIcon} alt="Phone" />
            <h3>Phone</h3>
            <p>+91 99999 99999</p>
          </a>

          <a
            href="https://www.google.com/maps?q=Pune"
            target="_blank"
            rel="noreferrer"
            className="contact-info-card"
          >
            <img src={locationIcon} alt="Location" />
            <h3>Location</h3>
            <p>Pune, India</p>
          </a>

        </div>

      </div>
  
<div className="faq-section">

  <h2 className="faq-title">Frequently Asked Questions</h2>

  <div className="faq-slider">
    {visibleFaqs.map((faq, i) => (
      <div className="faq-card" key={i}>
        <h3>{faq.question}</h3>
        <p>{faq.answer}</p>
      </div>
    ))}
  </div>

  
  <div className="faq-dots">
    {[...Array(totalPages)].map((_, i) => (
      <span
        key={i}
        className={page === i ? "dot active" : "dot"}
        onClick={() => setPage(i)}
      ></span>
    ))}
  </div>

</div>



    </div>
  );
}

export default ContactUs; 

