# backend/main.py
from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
import random

app = FastAPI(title="PrePlanGo API", version="1.0.0")

# ----------------------------
# Request / Response Models
# ----------------------------
class PredictionRequest(BaseModel):
    source: str
    destination: str
    desired_arrival: str   # e.g., "2025-10-05T09:30"
    weather: Optional[str] = "clear"  # default
    event: Optional[str] = None


class PredictionResponse(BaseModel):
    congestion_level: str
    eta_minutes: int
    best_departure_time: str
    alternate_routes: list


# ----------------------------
# Endpoints
# ----------------------------
@app.get("/")
def health_check():
    return {"status": "✅ PrePlanGo API is running!"}


@app.post("/predict", response_model=PredictionResponse)
def predict(request: PredictionRequest):
    """
    Dummy prediction logic.
    Replace with your trained ML model.
    """

    # Simulate congestion levels
    congestion_options = ["Low", "Medium", "High"]
    congestion = random.choice(congestion_options)

    # Dummy ETA based on congestion
    eta = {
        "Low": random.randint(15, 25),
        "Medium": random.randint(25, 40),
        "High": random.randint(40, 60)
    }[congestion]

    # Dummy alternate routes
    routes = [
        {"route": "Route A", "eta": eta},
        {"route": "Route B", "eta": eta + random.randint(5, 15)}
    ]

    # Suggest a dummy departure time
    best_departure = "2025-10-05T09:00"

    return PredictionResponse(
        congestion_level=congestion,
        eta_minutes=eta,
        best_departure_time=best_departure,
        alternate_routes=routes
    )


@app.post("/whatif")
def what_if(request: PredictionRequest):
    """
    Simple What-if mode simulation.
    Just adds variance to ETA based on weather.
    """
    weather_effects = {
        "rain": 15,
        "snow": 20,
        "clear": 0,
        "storm": 30
    }
    extra_delay = weather_effects.get(request.weather.lower(), 0)

    return {
        "scenario": f"What if weather is {request.weather}?",
        "extra_delay_minutes": extra_delay,
        "adjusted_eta": random.randint(25, 40) + extra_delay
    }
