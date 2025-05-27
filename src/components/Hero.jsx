import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { useCart } from '../context/CartContext';

const Hero = () => {
  const { totalItems } = useCart();

  return (
    <section className="hero-section text-center position-relative">
      <div className="container position-relative z-index-1">
        <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown">
          Bem-vindo ao Café Aconchego
        </h1>
        <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
          O melhor café da cidade, feito com amor e ingredientes selecionados
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link 
            to="/cardapio" 
            className="btn btn-primary btn-lg px-4 py-2 animate__animated animate__fadeInUp animate__delay-1s"
          >
            <BiCart className="me-2" />
            Ver Cardápio {totalItems > 0 && `(${totalItems})`}
          </Link>
          <Link 
            to="/sobre" 
            className="btn btn-outline-light btn-lg px-4 py-2 animate__animated animate__fadeInUp animate__delay-1s"
          >
            Nossa História
          </Link>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;