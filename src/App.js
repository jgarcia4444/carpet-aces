import './App.css';

import Navigation from './components/navigation/Navigation';
import Header from './components/sections/Header';
import FloatingContactUsButton from './components/buttons/FloatingContactUsButton';
import Services from './components/sections/Services';

function App() {
  return (
    <div className="App relative ">
      <Navigation />
      <Header />
      <Services />
      <FloatingContactUsButton />
    </div>
  );
}

export default App;
