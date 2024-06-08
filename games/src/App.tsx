import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Intro from './Pages/Intro/Intro';
import Intro1 from './Pages/Intro1/Intro1';
import Intro2 from './Pages/Intro2/Intro2';
import Intro3 from './Pages/Intro3/Intro3';
import Game from './Pages/Game/Game';

function App(): JSX.Element {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/intro1" element={<Intro1 />} />
          <Route path="/intro2" element={<Intro2 />} />
          <Route path="/intro3" element={<Intro3 />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
