import { useState } from 'react';
import { BiEnvelope, BiPhone, BiMap, BiTime } from 'react-icons/bi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-5 bg-light" id="contato">
      <div className="container">
        <h2 className="text-center mb-5">Fale Conosco</h2>
        
        <div className="row">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h3 className="h5 card-title mb-4">Informações de Contato</h3>
                
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <BiMap className="me-2 text-primary" />
                    <strong>Endereço:</strong> Rua do Café, 123 - Centro, Teresina/PI
                  </li>
                  <li className="mb-3">
                    <BiPhone className="me-2 text-primary" />
                    <strong>Telefone:</strong> (86) 99999-9999
                  </li>
                  <li className="mb-3">
                    <BiEnvelope className="me-2 text-primary" />
                    <strong>Email:</strong> contato@cafeaconchego.com.br
                  </li>
                  <li className="mb-3">
                    <BiTime className="me-2 text-primary" />
                    <strong>Horário:</strong> Seg-Sáb: 7h às 19h | Dom: 8h às 14h
                  </li>
                </ul>
                
                <div className="mt-4">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.271428693633!2d-42.803385!3d-5.0895199999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDUnMjIuMyJTIDQywrA0OCcxMi4yIlc!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Mapa de localização"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5 card-title mb-4">Envie uma mensagem</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Mensagem</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-100 py-2">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;