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
    }, 1000);
  }, []);
  return (
    <>
      {init && (
        <div className="h-screen flex justify-center items-center">
          <div className="loader"></div>
        </div>
      )}
      <Intro />
      <Invitation />
      <Interview />
    </>
  );
}

export default App;
