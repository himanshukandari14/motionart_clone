import React from 'react';
import Home from './pages/Home';
import CursorTrailEffect from './components/CursorTrailEffect';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <CursorTrailEffect />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
