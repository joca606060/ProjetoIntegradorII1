import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import MenuItem from '../components/MenuItem';
import CategoryFilter from '../components/CategoryFilter';
import '../styles/pages/menu.css';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('todos');
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulando chamada API
    const fetchMenuItems = async () => {
      try {
        // Em um projeto real, substituir por uma chamada real à API
        const mockData = [
          { id: 1, name: 'Expresso', description: 'Café puro e intenso', price: 5.90, category: 'bebidas', image: 'expresso.jpg' },
          { id: 2, name: 'Cappuccino', description: 'Café com leite vaporizado e espuma', price: 8.50, category: 'bebidas', image: 'cappuccino.jpg' },
          { id: 3, name: 'Bolo de Chocolate', description: 'Fatia generosa de bolo caseiro', price: 7.90, category: 'doces', image: 'bolo-chocolate.jpg' },
          // ... mais itens
        ];
        setMenuItems(mockData);
      } catch (error) {
        console.error('Erro ao carregar cardápio:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const filteredItems = filter === 'todos' 
    ? menuItems 
    : menuItems.filter(item => item.category === filter);

  if (loading) return <div className="text-center my-5">Carregando cardápio...</div>;

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Nosso Cardápio</h1>
      
      <CategoryFilter currentFilter={filter} onFilterChange={setFilter} />
      
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredItems.map(item => (
          <MenuItem 
            key={item.id} 
            item={item} 
            onAddToCart={() => addToCart(item)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;