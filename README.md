# 🚦 PrePlanGo – Smarter Commutes. On Time. Every Time. 🚗

### 🧠 Problem
People waste hours stuck in traffic due to unpredictable congestion.  
Current navigation tools (like Google Maps) only show **real-time traffic**, not **future congestion patterns**.

---

### 💡 Solution
**PrePlanGo** is an AI-powered traffic predictor that combines  
🚗 **Historical traffic**, 🌦️ **Weather**, 🗓️ **Events & holidays**, and 🧠 **Predictive modeling**  
to forecast **future congestion levels**, **travel times (ETA)**, and **optimal departure times** —  
helping users plan smarter and arrive on time, every time.

---

### ✨ Key Features
- 🔮 Predicts **congestion level** → Low / Medium / High  
- ⏰ Suggests **best departure time** for your desired arrival  
- 🧭 Shows **route preview** with embedded **Google Maps**  
- 🧠 “What-if Mode” → simulate different times/weather scenarios  
- 🚦 Compare **alternate routes** with predicted ETAs  
- 🔔 Push notifications → “Leave in 20 mins to avoid 30-min delay”

---

### 🧰 Tech Stack

| Layer | Tools |
|-------|-------|
| **Frontend** | React.js (Next.js) + TailwindCSS + Google Maps Embed API |
| **Backend** | FastAPI (Python) |
| **ML Model** | Scikit-learn / XGBoost (Mock LSTM) |
| **Data Sources** | Google Maps API, OpenWeather API, Calendar API |
| **Storage** | PostgreSQL, Redis |
| **Deployment** | Docker + Render / Heroku |

---

### 🧭 System Flow
1. 🧍 User enters **source**, **destination**, and **desired arrival time**  
2. 🛰️ System fetches traffic, weather, and calendar data  
3. 🤖 ML model predicts ETA & congestion  
4. 🗺️ App displays **route map**, **predicted ETA**, and **best departure**  
5. 🔁 User feedback improves model accuracy

---

### 🎨 Frontend Highlights
- Aesthetic **Next.js + Tailwind** UI  
- Dynamic **Google Map preview**  
- Interactive **dashboard cards** for ETA, congestion, and timing  
- Fully responsive and hackathon-optimized design  

---

### 🧑‍💻 How to Run

```bash
# Clone repo
git clone <repo-link>
cd preplango
 
 ▶️ Start Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

💻 Start Frontend
cd ../frontend
npm install
npm run dev