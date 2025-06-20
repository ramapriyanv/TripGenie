import React, { useState } from 'react';
import axios from 'axios';

function TripPlanner() {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState('');
  const [budget, setBudget] = useState('Medium');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const budgetOptions = ['Low', 'Medium', 'High'];

  const handleSubmit = async () => {
    if (!destination || !days || loading) return;

    const userMessage = `Plan a ${days}-day trip to ${destination} with a ${budget} budget.`;
    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/generate-itinerary", {
        destination,
        trip_type: `${days}-day ${budget}`
      });

      setMessages(prev => [...prev, { role: "ai", content: res.data.content }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "ai", content: "Something went wrong. Try again." }]);
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Trip Planner</h2>

      <input
        type="text"
        value={destination}
        onChange={e => setDestination(e.target.value)}
        placeholder="Enter destination"
      />

      <input
        type="number"
        value={days}
        onChange={e => setDays(e.target.value)}
        placeholder="Number of days"
        min="1"
        style={{ width: '150px' }}
      />

      <div className="tab-container">
        {budgetOptions.map(option => (
          <div
            key={option}
            className={`tab ${option === budget ? 'active' : ''}`}
            onClick={() => setBudget(option)}
          >
            {option} Budget
          </div>
        ))}
      </div>

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Generating...' : 'Generate'}
      </button>

      <div>
        {messages.map((msg, idx) => (
          <div key={idx} className="chat-box">
            <strong>{msg.role === "user" ? "You" : "TripGenie"}:</strong> {msg.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TripPlanner;
