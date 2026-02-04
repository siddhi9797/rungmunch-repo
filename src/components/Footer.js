import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-about">
          <p>
            Rungmunch is nonprofit organization started in 2016 with a passion
            for theater with the desire of giving back to the community. Within
            four years we raised and donated over $250,000 for various noble
            causes. Rungmunch was awarded “Charity Organization of the Year –
            2016” by GITPro. It’s a platform where driven actors, directors,
            dancers, musicians, singers, and playwrights of Indian origin come
            together to produce great theater to raise funds for a worthy cause.
          </p>

          <button type="button" className="privacy-link">
  Privacy Policy
</button>

        </div>

        {/* RIGHT */}
        <div className="footer-contact">
          <h3>STAY IN TOUCH</h3>
          <ul>
            <li>310 Grau Drive, Fremont, CA 94536, UNITED STATES</li>
            <li>+1 (510) 972-9022</li>
            <li>contact@rungmunch.org</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2016–2024 Rungmunch – Theater with a Cause</p>

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
