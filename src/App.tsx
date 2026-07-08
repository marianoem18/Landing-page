import Nav from './components/Nav';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Services from './components/Services';
import Industries from './components/Industries';
import Process from './components/Process';
import Ideas from './components/Ideas';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Industries />
        <Process />
        <Ideas />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
