import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import MenuHighlights from '../components/MenuHighlights';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;