import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <Router>
      <div style={{ padding: '1rem' }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <RecipeList />
      </div>
    </Router>
  );
}

export default App;
