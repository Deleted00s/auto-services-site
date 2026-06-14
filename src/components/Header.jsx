import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <h1 className="logo">Засор Канал Профи</h1>

      {/* Кнопка-бургер */}
      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        <span className={`line ${isOpen ? "open" : ""}`}></span>
        <span className={`line ${isOpen ? "open" : ""}`}></span>
        <span className={`line ${isOpen ? "open" : ""}`}></span>
      </div>

      {/* Навигация */}
      <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Главная</Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>Услуги</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Контакты</Link>
      </nav>
    </header>
  );
}

export default Header;