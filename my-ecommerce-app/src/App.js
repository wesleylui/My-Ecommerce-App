import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./component/Homepage.js";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;