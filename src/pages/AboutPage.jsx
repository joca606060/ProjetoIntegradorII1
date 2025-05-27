import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="mb-4">Sobre o Café Aconchego</h1>
              
              <div className="mb-5">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" 
                  alt="Equipe da cafeteria" 
                  className="img-fluid rounded mb-4"
                  loading="lazy"
                />
                <p>
                  Fundada em 2010 por dois apaixonados por café, a Café Aconchego começou 
                  como um pequeno espaço no centro de Teresina e hoje é referência em cafés 
                  especiais na região.
                </p>
                <p>
                  Nosso objetivo sempre foi oferecer mais do que um simples café - queremos 
                  proporcionar uma experiência completa, onde cada cliente se sinta em casa.
                </p>
              </div>
              
              <div className="mb-5">
                <h2 className="h4 mb-3">Nossa Filosofia</h2>
                <p>
                  Acreditamos no comércio justo e no relacionamento direto com produtores. 
                  Todos os nossos grãos são adquiridos diretamente de pequenos produtores 
                  locais, garantindo qualidade premium e preço justo para quem cultiva.
                </p>
                <p>
                  Nossa torra é artesanal, realizada em pequenos lotes para garantir a 
                  qualidade e características únicas de cada safra.
                </p>
              </div>
              
              <div className="mb-5">
                <h2 className="h4 mb-3">Nossa Equipe</h2>
                <p>
                  Contamos com uma equipe de baristas certificados e apaixonados por café. 
                  Todos passam por treinamentos constantes para garantir que cada xícara 
                  servida tenha a qualidade que nossos clientes merecem.
                </p>
              </div>
              
              <div className="text-center mt-5">
                <a href="/cardapio" className="btn btn-primary px-4 me-2">
                  Conheça nosso cardápio
                </a>
                <a href="/contato" className="btn btn-outline-secondary px-4">
                  Entre em contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;