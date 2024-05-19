import React from 'react';
import './App.css';
import Nav from '../src/components/Nav'; 
import Forum from '../src/components/Forum';
import Topics from './components/Topics';
import ImageGallery from './components/ImageGallery';
import CommentSection from './components/CommentSection';

function App() {
  return (
    <div className="App">
      <header>
        <Nav /> 
      <hr className="navbar-divider" />
        </header>
        <body>
          <Forum />
          <ImageGallery />
          <Topics />
          <CommentSection />
        </body>
    </div>
  );
}

export default App;
