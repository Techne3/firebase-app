import React from 'react';
import './App.css';


//components
import Routes from './components/Routes'
import Nav from './components/Nav'
//redux
import Store from './store/Store';
import { Provider } from 'react-redux'



function App() {
  return (
    <Provider store={Store}>
      <Nav />
      <Routes />
    </Provider>
  );
}

export default App;
