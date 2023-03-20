import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from './Menu';
import HomePage from './pages/HomePage';
import DriftPage from './pages/DriftPage';
import TimeAttackPage from './pages/TimeAttackPage';
import ForzaPage from './pages/ForzaPage';


export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}