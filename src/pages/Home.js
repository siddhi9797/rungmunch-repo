



import ImageSlider from "../components/ImageSlider";
import visionIcon from "../assets/vision.png";
import missionIcon from "../assets/mission.png";
import valuesIcon from "../assets/values.png";
import ObjectivesSlider from "../components/ObjectivesSlider";


function Home() {
  return (
    <div className="page home-page">
      <ImageSlider />

      <section className="intro-section">
        <h2>About Rungmunch</h2>
        <p>
          Rungmunch is a cultural theatre platform that celebrates drama,
          creativity, and socially meaningful performances. It brings artists
          and communities together through the power of storytelling and stage
          expression.
        </p>
      </section>

      <section className="vmv-section">
        <div className="vmv-card">
          <img src={visionIcon} alt="Vision" className="vmv-icon-img" />
          <h3>Vision</h3>
          <p>
            To become a vibrant cultural space that inspires creativity and
            connects communities through theatre.
          </p>
        </div>

        <div className="vmv-card">
          <img src={missionIcon} alt="Mission" className="vmv-icon-img" />
          <h3>Mission</h3>
          <p>
            To promote meaningful theatre by supporting artists and nurturing
            social awareness through art.
          </p>
        </div>

        <div className="vmv-card">
          <img src={valuesIcon} alt="Values" className="vmv-icon-img" />
          <h3>Values</h3>
          <p>
            Creativity, inclusivity, collaboration, and commitment to cultural
            growth and social responsibility.
          </p>
        </div>
      </section>
      <h2 className="objectives-title">Our Objectives</h2>
      <ObjectivesSlider />

    </div>
  );
}

export default Home;
