import './App.css';

import Navigation from './components/navigation/Navigation';
import Header from './components/sections/Header';
import FloatingContactUsButton from './components/buttons/FloatingContactUsButton';

function App() {
  return (
    <div className="App relative">
      <Navigation />
      <Header />
      <FloatingContactUsButton />
    </div>
  );
}

export default App;
