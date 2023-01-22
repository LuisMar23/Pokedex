import React from 'react';
import {BrowserRouter as Router}from 'react-router-dom';
import { Route,Routes} from 'react-router-dom';
import './App.css';
import Listado from './pages/listado';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/'element={<Listado></Listado>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
