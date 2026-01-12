import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

import About from './components/About';
import Approach from './components/Approach';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Approach />
        <Services />
        <Contact />


      </main>

      <Footer />
    </div>
  )
}

export default App;
