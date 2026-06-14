import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { servicesList } from "../data/services";

function Contact() {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    if (location.state?.title) {
      setSelectedService(location.state.title);
    }
  }, [location.state]);
  //entry.911813669 entry.103745988 entry.1205819379 entry.2074988492 entry.1119703185 entry.268507616 entry.2001483535

  const FORM_ID = "1FAIpQLSdBPvbba3gcXXCqU7cs7NXMCwqIfprBmu3oab3zwuh8RkjnFQ";
  const ENTRY_SERVICE = "entry.1205819379";
  
  const formUrl = `https://docs.google.com/forms/d/e/${FORM_ID}/viewform?usp=pp_url&${ENTRY_SERVICE}=${encodeURIComponent(selectedService || "")}`;

  return (
    <div className="contact-page">
      <h2>Оставить заявку</h2>
      
      {selectedService && (
        <p className="service-badge">
          ✅ Вы выбрали: <strong>{selectedService}</strong> (уже подставлено в форму)
        </p>
      )}

      <div className="form-wrapper">
        <iframe 
          src={formUrl} 
          width="100%" 
          height="750" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0"
          title="Форма заявки"
          style={{ borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
        >
          Загрузка формы…
        </iframe>
      </div>

      <p className="contact-alt">
        Или напишите напрямую: 
        <a href="https://t.me/твой_ник" target="_blank" rel="noreferrer noopener">Telegram</a> | 
        <a href="tel:+79218909501">+7 (921) 890-95-01</a>
      </p>
    </div>
  );
}

export default Contact;