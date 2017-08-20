import React from 'react';
import './App.css';
import Fretboard from './components/Fretboard';

function App() {
  return (
    <div className="App">
      <Fretboard frets={23}/>
    </div>
  );
}

export default App;
