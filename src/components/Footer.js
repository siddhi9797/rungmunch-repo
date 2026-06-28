
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-about">
          <p>
            Rungmunch is nonprofit organization started in 2016 with a passion for theater with the desire of giving back to the community. Within four years we raised and donated over $60,000 for various just cause. Rungmunch was awarded “Charity Organization of Year - 2016” by GITPro. It’s a platform where driven actors, directors, dancers, musicians, singers, and playwrights of Indian origin come together to produce great theater to raise funds for a worthy cause.
          </p>

          <button type="button" className="privacy-link">
  Privacy Policy
</button>

        </div>

        {/* RIGHT */}
        <div className="footer-contact">
  <h3>STAY IN TOUCH</h3>

  <ul>
    <li>
  <FaMapMarkerAlt className="contact-icon" />
  <a
    href="https://maps.google.com/?q=310+Grau+Drive,+Fremont,+CA+94536"
    target="_blank"
    rel="noopener noreferrer"
  >
    310 Grau Drive, Fremont, CA 94536, US.
  </a>
</li>

  <li>
  <FaPhoneAlt className="contact-icon" />
  <a href="tel:+15105568624">
    +1(510)55MUNCH
  </a>
</li>

 <li>
  <FaEnvelope className="contact-icon" />
  <a href="mailto:contact@rungmunch.org">
    contact@rungmunch.org
  </a>
</li>
  </ul>
</div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>(c) Rungmunch - Theater with a Cause</p>

        <div className="footer-social">
  <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
  <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
  <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
</div>
      </div>
    </footer>
  );
}

export default Footer;
