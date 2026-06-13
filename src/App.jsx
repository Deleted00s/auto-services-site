import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

function App() {
  useEffect(() => {
  // Проверка, что ключи загрузились
  console.log('🔑 Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  console.log('📧 Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
  console.log('📄 Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  
  emailjs.init({
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  });
}, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;