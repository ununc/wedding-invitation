import './App.css';
import { Intro } from './pages/Intro';
import { Invitation } from './pages/Invitation';
import { Interview } from './pages/Interview';
import { useEffect, useState } from 'react';

function App() {
  const [init, setInit] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setInit(false);
    }, 1100);
  }, []);
  return (
    <div className={init ? 'h-screen overflow-y-hidden relative' : ''}>
      {init && (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      )}
      <Intro />
      <Invitation />
      <Interview />
    </div>
  );
}

export default App;
