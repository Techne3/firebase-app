import React from 'react';
import './App.css';


//components
// import Nav from './components/Nav'
//redux
import store from './store/store';
import { Provider } from 'react-redux'



function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <h2>Firebase</h2>
      </div>
    </Provider>
  );
}

export default App;
