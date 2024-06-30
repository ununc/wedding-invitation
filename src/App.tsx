import { useEffect, useState } from 'react';
import './App.css';
import { Intro } from './pages/Intro';
import { Invitation } from './pages/Invitation';
import { Interview } from './pages/Interview';
import { Gallery } from './pages/Gallery';
import { Wedding } from './pages/Wedding';
import { Info } from './pages/Info';

function App() {
  const [init, setInit] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setInit(false);
    }, 1500);
  }, []);
  return (
    <div className={init ? 'h-screen overflow-y-hidden relative' : ''}>
      <Intro />
      <Invitation />
      <Interview />
      <Gallery />
      <Wedding />
      <Info />
    </div>
  );
}

export default App;
