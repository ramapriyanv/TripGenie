import React from 'react';
import TripPlanner from './TripPlanner';
import SavedTrips from './SavedTrips';
import DarkModeToggle from './DarkModeToggle';
import './App.css';

function App() {
  return (
    <div className="App">
      <DarkModeToggle />
      <h1>🌍 TripGenie</h1>
      <TripPlanner />
      <SavedTrips />
    </div>
  );
}

export default App;
