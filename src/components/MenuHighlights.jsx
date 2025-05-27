import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { BiCart, BiStar } from 'react-icons/bi';

const MenuHighlights = () => {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('bebidas');

  const highlights = {
    bebidas: [
      {
        id: 1,
        name: 'Expresso Premium',
        description: 'Café puro com grãos especiais da Colômbia',
        price: 8.90,
        isFeatured: true
      },
      {
        id: 2,
        name: 'Cappuccino Artesanal',
        description: 'Com chocolate ralado e canela',
        price: 12.50,
        isFeatured: true
      }
    ],
    doces: [
      {
        id: 3,
        name: 'Bolo de Chocolate Belga',
        description: 'Fatia generosa com cobertura de ganache',
        price: 14.90,
        isFeatured: true
      },
      {
        id: 4,
        name: 'Torta de Limão',
        description: 'Massa crocante com recheio cremoso',
        price: 12.50,
        isFeatured: true
      }
    ]
  };

  return (
    <section className="py-5 bg-light" id="destaques">
      <div className="container">
        <h2 className="text-center mb-5">Nossos Destaques</h2>
        
        <ul className="nav nav-tabs justify-content-center mb-4">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'bebidas' ? 'active' : ''}`}
              onClick={() => setActiveTab('bebidas')}
            >
              Bebidas
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'doces' ? 'active' : ''}`}
              onClick={() => setActiveTab('doces')}
            >
              Doces
            </button>
          </li>
        </ul>
        
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {highlights[activeTab].map(item => (
            <div key={item.id} className="col">
              <div className="card h-100 border-0 shadow-sm hvr-grow">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <h3 className="h5 card-title mb-2">{item.name}</h3>
                    {item.isFeatured && <BiStar className="text-warning" />}
                  </div>
                  <p className="card-text text-muted mb-3">{item.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 text-primary mb-0">R$ {item.price.toFixed(2)}</span>
                    <button 
                      onClick={() => addToCart(item)} 
                      className="btn btn-sm btn-outline-primary"
                    >
                      <BiCart className="me-1" /> Adicionar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <Link to="/cardapio" className="btn btn-primary">
            Ver Cardápio Completo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;