import { useNavigate } from 'react-router-dom';
import { servicesList } from '../data/services';
import './Services.css'; // Убедитесь, что импорт есть

function Services() {
  const navigate = useNavigate();

  const handleOrderClick = (service) => {
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
            <div className="service-image-wrapper">
              <img 
                src={service.image} 
                alt={service.title}
                className="service-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x250/1e3c72/ffffff?text=Сантехника';
                }}
              />
              <div className="service-image-overlay"></div>
            </div>
            
            <div className="service-content">
              <h3>{service.title}</h3>
              <p className="price">{service.price}</p>
              
              <p className="service-description">{service.desc}</p>
              
              <div className="service-footer">
                <button 
                  className="order-btn"
                  onClick={() => handleOrderClick(service)}
                >
                  Заказать →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;