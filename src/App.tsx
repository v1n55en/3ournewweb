import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServicePersonal from './components/ServicePersonal';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import CallToAction from './components/CallToAction';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <ServicePersonal />
        <AboutUs />
        <Portfolio />
        <CallToAction />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;