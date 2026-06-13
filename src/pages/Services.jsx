import { useNavigate } from 'react-router-dom';
import { servicesList } from '../data/services';

function Services() {
  const navigate = useNavigate();

  const handleOrderClick = (service) => {
    // Этот вызов правильный - он внутри обработчика события
    navigate('/contact', { 
      state: { 
        title: service.title,
        price: service.priceValue,
        priceText: service.price,
        description: service.desc
      } 
    });
  };

  return (
    <div className="services">
      <h2>Мои услуги</h2>
      <div className="services-grid">
        {servicesList.map(service => (
          <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p className="price">{service.price}</p>
            <p>{service.desc}</p>
            <button 
              className="order-btn"
              onClick={() => handleOrderClick(service)}  // Правильно
            >
              Заказать
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;