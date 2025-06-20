# 🌍 TripGenie — AI-Powered Itinerary Planner

TripGenie is a full-stack web app that generates personalized travel itineraries using a local AI model. Users can input a destination, number of days, and budget, and get a chat-style response powered by a locally running LLM via Ollama. All trips are saved to a PostgreSQL database for later viewing.

---

## ✨ Features

- 🔮 AI-generated itineraries based on destination, days, and budget
- 💬 Chat-style planner interface
- 🔄 Dark mode toggle
- 💾 Save generated trips to PostgreSQL
- 📖 View previously saved trips
- 🧠 Runs on local LLMs using Ollama (e.g., Mistral)
- 🧼 Clean and modern UI built with React

---

## 📂 Project Structure

```
TripGenie/
│
├── backend/         # Flask backend + PostgreSQL + Ollama integration
│   ├── app.py
│   ├── database.py
│   ├── models.py
│   ├── ollama_helper.py
│   ├── requirements.txt
│   └── .env
│
└── frontend/        # React frontend with dark mode + chat interface
    ├── App.js
    ├── App.css
    ├── TripPlanner.js
    ├── SavedTrips.js
    ├── DarkModeToggle.js
    └── index.js
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/TripGenie.git
cd TripGenie
```

---

## ⚙️ Backend Setup (Flask + PostgreSQL + Ollama)

### 2. Install Backend Dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 3. Create `.env` File

```env
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/tripgenie
```

Make sure you have PostgreSQL installed and a database named `tripgenie` created.

### 4. Start the Flask Server

```bash
python app.py
```

The backend will run at:  
`http://localhost:5000`

---

## 🤖 Run Ollama (Local LLM)

Make sure [Ollama](https://ollama.com) is installed.

```bash
ollama run mistral
```

The Ollama server should be available at:  
`http://localhost:11434`

---

## 💻 Frontend Setup (React)

### 5. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 6. Start the React App

```bash
npm start
```

The frontend will be available at:  
`http://localhost:3000`

---

## 🛠️ Future Enhancements

- 🧭 Add map preview using Leaflet or Google Maps
- 🗺️ Filter itineraries by activities (e.g., Food, Nature, Shopping)
- ✅ User authentication for saved trips
- 🧳 Export trip as PDF or download


---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
