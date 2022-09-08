import React from 'react';
import Header from './Header/Header.js';
import Left from './Left/Left.js';
import Right from './Right/Right.js';

import './style.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="Bottom">
        <Left />
        <Right />
      </div>
    </div>
  );
}
