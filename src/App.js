import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Fretboard from './components/Fretboard';
import ActionBar from './components/ActionBar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Fretboard frets={23}/>
        <ActionBar />
      </div>
    </Provider>
  );
}

export default App;
