import './App.css';

import Navigation from './components/navigation/Navigation';
import Header from './components/sections/Header';
import FloatingContactUsButton from './components/buttons/FloatingContactUsButton';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="App relative ">
      <Navigation />
      <Header />
      <Services />
      <Gallery />
      <Contact />
      <FloatingContactUsButton />
    </div>
  );
}

export default App;
