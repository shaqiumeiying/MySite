import React from 'react';
import { NavBar } from './component/NavBar';
import { Banner } from './component/Banner';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;

