import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SavedTrips() {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/itineraries").then(res => {
      setItineraries(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Saved Trips</h2>
      {itineraries.map((trip) => (
        <div key={trip.id} className="chat-box">
          <h4>{trip.destination} ({trip.trip_type})</h4>
          <p>{trip.content}</p>
        </div>
      ))}
    </div>
  );
}

export default SavedTrips;
