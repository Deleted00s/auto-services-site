import './Home.css'; 
import { Link } from "react-router-dom";
import { useRef } from 'react';

function Home() {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Компонент для элемента галереи
  const GalleryItem = ({ videoSrc, title }) => {
    const videoRef = useRef(null);
    const playPromiseRef = useRef(null);

    const handleMouseEnter = () => {
      if (videoRef.current) {
        playPromiseRef.current = videoRef.current.play();
        
        if (playPromiseRef.current !== undefined) {
          playPromiseRef.current
            .then(() => {
              // Воспроизведение успешно началось
            })
            .catch(() => {
              // Автовоспроизведение было предотвращено
            });
        }
      }
    };

    const handleMouseLeave = () => {
      if (videoRef.current) {
        if (playPromiseRef.current !== undefined) {
          playPromiseRef.current
            .then(() => {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            })
            .catch(() => {
              videoRef.current.currentTime = 0;
            });
          playPromiseRef.current = null;
        } else {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }
    };

    return (
      <div className="gallery-item">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            width: '100%',
            height: '250px',
            objectFit: 'cover',
            borderRadius: '8px',
            background: '#1a1a1a'
          }}
        >
          <source 
            src={videoSrc} 
            type="video/mp4" 
          />
        </video>
        <p>{title}</p>
      </div>
    );
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

      {/* Секция с видео-галереей */}
      <section className="gallery-section">
        <h2>Наша работа</h2>
        <div className="gallery-grid">
          <GalleryItem 
            videoSrc={`${process.env.PUBLIC_URL}/videos/work1.mp4`}
            title=""
          />
          <GalleryItem 
            videoSrc={`${process.env.PUBLIC_URL}/videos/work2.mp4`}
            title=""
          />
          <GalleryItem 
            videoSrc={`${process.env.PUBLIC_URL}/videos/work3.mp4`}
            title=""
          />
          <GalleryItem 
            videoSrc={`${process.env.PUBLIC_URL}/videos/work4.mp4`}
            title=""
          />
        </div>
      </section>

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
              src="/images/1397.jpg" 
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
            <p>Оперативное решение любой проблемы</p>
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