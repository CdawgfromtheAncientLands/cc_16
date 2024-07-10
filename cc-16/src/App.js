//U94140233
import React from 'react';
import Gallery from './Gallery';
import './App.css';
//FINAL NOTES: Don't really understand why I don't have a left-facing arrow, OR why my arrow is so far to the right. Otherwise, all's well.
const App = () => {
  return (
    <div className="app">
      <header className="app-header">
      </header>
      <Gallery />
    </div>
  );
};

export default App;