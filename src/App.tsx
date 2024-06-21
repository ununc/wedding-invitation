import './App.css';
import { Intro } from './pages/Intro';
import { Invitation } from './pages/Invitation';
import { Interview } from './pages/Interview';

function App() {
  return (
    <>
      <Intro />
      <Invitation />
      <div className="h-4"></div>
      <Interview />
    </>
  );
}

export default App;
