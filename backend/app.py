from flask import Flask, request, jsonify
from flask_cors import CORS
from database import SessionLocal, engine
from models import Base, Itinerary
import ollama_helper

app = Flask(__name__)
CORS(app)

Base.metadata.create_all(bind=engine)

@app.route("/generate-itinerary", methods=["POST"])
def generate_itinerary():
    data = request.json
    prompt = f"Plan a 3-day {data['trip_type']} trip to {data['destination']}"
    result = ollama_helper.query_ollama(prompt)

    db = SessionLocal()
    itinerary = Itinerary(destination=data["destination"], trip_type=data["trip_type"], content=result)
    db.add(itinerary)
    db.commit()
    db.refresh(itinerary)
    db.close()

    return jsonify({
        "id": itinerary.id,
        "content": result
    })

@app.route("/itineraries", methods=["GET"])
def get_all_itineraries():
    db = SessionLocal()
    itineraries = db.query(Itinerary).all()
    db.close()
    return jsonify([{
        "id": i.id,
        "destination": i.destination,
        "trip_type": i.trip_type,
        "content": i.content
    } for i in itineraries])

if __name__ == "__main__":
    app.run(debug=True)
