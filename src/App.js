import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/Menu'
import Home from './Pages/Home';
import Models from './Pages/Models';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="models" element={<Models />} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;