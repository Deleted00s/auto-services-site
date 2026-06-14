import './Home.css'; 
import { Link } from "react-router-dom";

function Home() {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="home">
      <section className="hero">
        <h2>Комплексные сантехнические работы</h2>
        <p>
          Качественные услуги, честные цены и гарантия на все виды работ.
          Посмотрите напишите
            услуги
          или свяжитесь напрямую.
        </p>
        <div className="button-group">
          <Link to="/services" className="btn btn-primary">
            Выбрать услугу
          </Link>
          <a href="#about" className="btn btn-outline" onClick={scrollToAbout}>
            О нас
          </a>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>О нас</h2>
        <p>
          Мы — команда профессиональных сантехников с опытом работы более 10 лет.
          Выполняем работы любой сложности: от замены смесителя до полного
          ремонта ванной комнаты под ключ.
        </p>
        <ul>
          <li>✅ Гарантия на все виды работ — 2 года</li>
          <li>✅ Выезд мастера в день обращения</li>
          <li>✅ Честные цены без скрытых доплат</li>
          <li>✅ Работаем по договору</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;