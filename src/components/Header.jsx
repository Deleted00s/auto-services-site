import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Блокируем прокрутку страницы при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="header">
      <h1 className="logo">Засор Канал Профи</h1>

      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        <span className={`line ${isOpen ? "open" : ""}`}></span>
        <span className={`line ${isOpen ? "open" : ""}`}></span>
        <span className={`line ${isOpen ? "open" : ""}`}></span>
      </div>

      <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Главная</Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>Услуги</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Контакты</Link>
      </nav>
    </header>
  );
}

export default Header;