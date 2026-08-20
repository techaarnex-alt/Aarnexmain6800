import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Divider() {
  return <div className="ld"/>;
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <Divider />
      <About />
      <Divider />
      <Process />
      <Divider />
      <Contact />
      <Footer />
    </>
  );
}
