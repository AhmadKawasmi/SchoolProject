
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { useState } from 'react';

function App() {
  return (
    <div className="schoolApp">
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
