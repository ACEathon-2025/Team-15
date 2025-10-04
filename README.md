# 🚗 PrePlanGo – Smarter Commutes. On Time. Every Time.

### 🧠 Problem
People waste hours stuck in traffic due to unpredictable congestion.
Current maps (like Google Maps) only show real-time traffic, not future patterns.

### 💡 Solution
An AI-based traffic predictor that combines **historical traffic**, **weather**, and **events**
to predict **congestion levels**, **travel time (ETA)**, and **best departure time**.

### ✨ Key Features
- Predicts congestion level (Low/Medium/High)
- Suggests best departure time for desired arrival
- Simulates different times/weather ("What-if Mode")
- Alternate routes with comparative ETAs
- Push notifications: “Leave in 20 mins to avoid 30-min delay”

### 🧰 Tech Stack
| Layer | Tools |
|-------|-------|
| **Frontend** | React.js + TailwindCSS + Google Maps API |
| **Backend** | FastAPI (Python) |
| **ML Model** | Scikit-learn / XGBoost (Mock LSTM) |
| **Data** | Google Maps API, OpenWeather API, Calendar APIs |
| **Storage** | PostgreSQL, Redis |
| **Deployment** | Docker, Render/Heroku |

### 🧭 System Flow
1. User enters source, destination, and desired arrival time  
2. System fetches traffic, weather, and calendar data  
3. ML model predicts ETA & congestion  
4. App shows best departure + alternate routes  
5. User feedback improves model

### 🧑‍💻 How to Run
```bash
# clone repo
git clone <repo-link>
cd preplango

# start backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

# start frontend
cd ../frontend
npm install
npm start
