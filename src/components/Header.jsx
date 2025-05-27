import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { BiCart, BiCoffeeTogo } from 'react-icons/bi';

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <BiCoffeeTogo className="me-2" />
          Café Aconchego
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Início</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cardapio">Cardápio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sobre">Sobre Nós</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contato">Contato</NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/carrinho">
                <BiCart size={20} />
                {cartItems.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItems.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;