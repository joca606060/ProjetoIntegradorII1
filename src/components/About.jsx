import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-5" id="sobre">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5" 
              alt="Interior da cafeteria" 
              className="img-fluid rounded shadow-lg w-100"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="mb-4">Nossa História</h2>
            <p className="lead">
              Fundada em 2010, a Café Aconchego nasceu do sonho de trazer para nossa cidade 
              um espaço acolhedor onde as pessoas pudessem desfrutar de cafés especiais e 
              momentos de tranquilidade.
            </p>
            <p>
              Nossos grãos são cuidadosamente selecionados de pequenos produtores locais, 
              garantindo qualidade e sustentabilidade em cada xícara. Trabalhamos com 
              torra própria para garantir o sabor único que nos diferencia.
            </p>
            <div className="d-flex gap-3 mt-4">
              <Link to="/sobre" className="btn btn-primary px-4">
                Conheça mais
              </Link>
              <Link to="/cardapio" className="btn btn-outline-secondary px-4">
                Ver Cardápio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;