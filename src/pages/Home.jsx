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
          Посмотрите наши
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

      
      {/* <section className="gallery-section">
        <h2>Наши работы</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img 
              src="/images/plumbing-work-1.jpg" 
              alt="Устранение засора" 
              loading="lazy"
            />
            <p>Устранение засоров</p>
          </div>
          <div className="gallery-item">
            <img 
              src="/images/plumbing-work-2.jpg" 
              alt="Монтаж сантехники" 
              loading="lazy"
            />
            <p>Монтаж сантехники</p>
          </div>
          <div className="gallery-item">
            <img 
              src="/images/plumbing-work-3.jpg" 
              alt="Ремонт труб" 
              loading="lazy"
            />
            <p>Ремонт труб</p>
          </div>
          <div className="gallery-item">
            <img 
              src="/images/plumbing-work-4.jpg" 
              alt="Диагностика систем" 
              loading="lazy"
            />
            <p>Диагностика систем</p>
          </div>
        </div>
      </section> */}

      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h1>
              О нас
            </h1>
            <p>
              «Засор Канал Профи» — профессиональная команда сантехников в Санкт-Петербурге. Специализируемся на коммерческих объектах: от офисов и магазинов до ресторанов и производств. Работаем оперативно, используем современное оборудование для устранения засоров любой сложности и ремонта инженерных систем. Надежно, качественно, с гарантией результата.
            </p>
          </div>
          <div className="about-image">
            <img 
              src="/images/about-team.png" 
              alt="Команда Засор Канал Профи" 
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Секция с преимуществами и изображениями */}
      <section className="features-section">
        <h2>Почему выбирают нас</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <img src="/icons/guarantee.svg" alt="Гарантия" />
            </div>
            <h3>Гарантия 2 года</h3>
            <p>На все виды сантехнических работ</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src="/icons/quick.svg" alt="Быстро" />
            </div>
            <h3>Выезд в день обращения</h3>
            <p>Оперативное решение любой проблемы</p>=
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src="/icons/equipment.svg" alt="Оборудование" />
            </div>
            <h3>Современное оборудование</h3>
            <p>Гидродинамическое и электромеханическое</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src="/icons/contract.svg" alt="Договор" />
            </div>
            <h3>Работа по договору</h3>
            <p>Все услуги официально оформляются</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;