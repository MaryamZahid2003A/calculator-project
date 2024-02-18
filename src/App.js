import React from 'react';
import './App.css';
import Home from './Home.js';

function App() {
  return (
    <main className="App ">
      <div>
        <p className="text-center text-cyan-50 pt-10 text-3xl font-sans ">CALCULATOR <span className="text-green-300 pt-10 text-3xl font-san text-center"> APP</span></p>
        <div>
          <Home/>
        </div>
      </div>
    </main>
  );
}


export default App;