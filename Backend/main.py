# backend/main.py
from fastapi import FastAPI
from pydantic import BaseModel
import random
import requests
from datetime import datetime

app = FastAPI(title="PrePlanGo API", version="2.0.0")

# ----------------------------
# Request / Response Models
# ----------------------------
class PredictionRequest(BaseModel):
    source: str
    destination: str
    desired_arrival: str   # e.g. "2025-10-05T09:30"


class PredictionResponse(BaseModel):
    congestion_level: str
    eta_minutes: int
    best_departure_time: str
    alternate_routes: list
    weather: str
    event: str


# ----------------------------
# External Data Fetchers (mocked for demo)
# ----------------------------
def get_weather(city: str) -> str:
    """
    Normally fetch from OpenWeather API.
    Example API call:
    http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}
    """
    # Mock logic for demo
    options = ["clear", "rain", "storm", "cloudy"]
    return random.choice(options)


def get_event(date: str, city: str) -> str:
    """
    Normally check a calendar/events API or DB.
    For demo, return festival/holiday occasionally.
    """
    special_dates = {
        "2025-10-05": "festival",
        "2025-12-25": "christmas",
        "2025-01-01": "new year"
    }
    return special_dates.get(date, "normal_day")


# ----------------------------
# Endpoints
# ----------------------------
@app.get("/")
def health_check():
    return {"status": "✅ PrePlanGo API is running!"}


@app.post("/predict", response_model=PredictionResponse)
def predict(request: PredictionRequest):
    """
    Predict ETA, congestion, and best departure time using
    historical traffic + contextual (weather, events).
    """

    # Extract date from desired arrival
    arrival_date = request.desired_arrival.split("T")[0]

    # Fetch contextual factors automatically
    weather = get_weather(request.source)
    event = get_event(arrival_date, request.source)

    # Dummy congestion logic (replace with ML later)
    if weather in ["storm", "rain"] or event != "normal_day":
        congestion = "High"
        eta = random.randint(40, 60)
    else:
        congestion = random.choice(["Low", "Medium"])
        eta = random.randint(20, 40)

    # Suggest a dummy best departure time (30 min buffer)
    try:
        dt = datetime.fromisoformat(request.desired_arrival)
        best_departure = (dt.replace(minute=dt.minute - 30)).isoformat()
    except:
        best_departure = "N/A"

    # Dummy alternate routes
    routes = [
        {"route": "Route A", "eta": eta},
        {"route": "Route B", "eta": eta + random.randint(5, 15)}
    ]

    return PredictionResponse(
        congestion_level=congestion,
        eta_minutes=eta,
        best_departure_time=best_departure,
        alternate_routes=routes,
        weather=weather,
        event=event
    )
