from sqlalchemy import Column, Integer, String, Text
from database import Base

class Itinerary(Base):
    __tablename__ = 'itineraries'
    id = Column(Integer, primary_key=True, index=True)
    destination = Column(String(100))
    trip_type = Column(String(50))
    content = Column(Text)
