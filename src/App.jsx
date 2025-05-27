import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MenuHighlights from '../components/MenuHighLights';
import './styles/main.css';

function Main() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Menu />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default Main;