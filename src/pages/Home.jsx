import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h2>Комплексные сантехнические работы</h2>
      <p>
        Качественные услуги, честные цены и гарантия на все виды работ. 
        Посмотрите мои <Link to="/services" className="highlight-link">услуги</Link> или свяжитесь со мной напрямую.
      </p>
      <Link to="/services" className="cta-button">Выбрать услугу</Link>
    </div>
  );
}

export default Home;