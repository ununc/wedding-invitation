import { useEffect, useState } from 'react';
import './App.css';
import { Intro } from './pages/Intro';
import { Invitation } from './pages/Invitation';
import { Interview } from './pages/Interview';
import { Gallery } from './pages/Gallery';
import { Wedding } from './pages/Wedding';
import { Info } from './pages/Info';
import { AnswerModal } from './components/AnswerModal';

function App() {
  const [init, setInit] = useState(true);
  const [modalIndex, setModalIndex] = useState(0);

  const closeModal = () => {
    setModalIndex(0);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    setTimeout(() => {
      setInit(false);
    }, 1500);
  }, []);
  return (
    <div className={init ? 'h-screen overflow-y-hidden relative' : ''}>
      <Intro />
      <Invitation />
      <Interview setModalIndex={setModalIndex} />
      <Gallery />
      <AnswerModal modalIndex={modalIndex} close={closeModal} />
      <Wedding />
      <Info />
    </div>
  );
}

export default App;
