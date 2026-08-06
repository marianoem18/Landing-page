import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Industries from './components/Industries';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Industries />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
