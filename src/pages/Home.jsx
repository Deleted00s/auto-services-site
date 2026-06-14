import { Link } from "react-router-dom";

function Home() {

  const scrollToAbout = (e) => {
    e.preventDefault();
    const AboutSection = document.getElementById("about");
    if (AboutSection) {
      AboutSection.scrollIntoView({behavior : "smooth", block : "start"});
    }
  };


  return (
    <div className="home">
      <section className="home">

        <h2>Комплексные сантехнические работы</h2>
        <p>
          Качественные услуги, честные цены и гарантия на все виды работ.
          Посмотрите наши{" "}
          <Link to="/services" className="highlight-link">
            услуги
          </Link>{" "}
          или свяжитесь напрямую.
        </p>
        <div className="buttons">
          <Link to="/services" className="cta-button">
            Выбрать услугу
          </Link>
          <a href="#about" className="cta-button secondary" onClick={scrollToAbout}>
            О нас
          </a>
        </div>
        
      </section>



      <section id="about" className="about-section">
          <h2>О нас</h2>


      </section>
    </div>
  );
}

export default Home;