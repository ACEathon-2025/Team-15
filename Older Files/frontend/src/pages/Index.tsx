import { useState } from "react";
import Hero from "@/components/Hero";
import PredictForm from "@/components/PredictForm";
import PredictionOverview from "@/components/PredictionOverview";
import Dashboard from "@/components/Dashboard";
import Features from "@/components/Features";
import TechStack from "@/components/TechStack";
import HowItWorks from "@/components/HowItWorks";
import CommuteHub from "@/components/CommuteHub";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [showPrediction, setShowPrediction] = useState(false);
const [predictionData, setPredictionData] = useState<any>(null);

const handlePredict = (data?: any) => {
  if (data) {
    setPredictionData(data);
  }
  setShowPrediction(true);
  setTimeout(() => {
    document.getElementById("prediction")?.scrollIntoView({ behavior: "smooth" });
  }, 100);
};


  return (
    <div className="min-h-screen">
      <Hero />
      <PredictForm onPredict={handlePredict} />
      <div id="prediction">
        <PredictionOverview show={showPrediction} />
      </div>
      <Dashboard />
      <Features />
      <TechStack />
      <HowItWorks />
      <CommuteHub />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
