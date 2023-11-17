import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Header, Info } from './containers';
import { Navbar } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
    </div>
  );
}

export default App;
