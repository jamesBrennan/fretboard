import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Controls from './components/Controls';
import Fretboard from './components/Fretboard';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Controls/>
        <Fretboard frets={23}/>
      </div>
    </Provider>
  );
}

export default App;
