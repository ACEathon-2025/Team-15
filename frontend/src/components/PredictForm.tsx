import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock } from "lucide-react";

const PredictForm = ({ onPredict }: { onPredict: () => void }) => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [time, setTime] = useState("");

  const handlePredict = () => {
    if (source && destination && time) {
      onPredict();
    }
  };

  return (
    <section id="predict-form" className="py-20 px-6 bg-gradient-to-b from-background to-navy/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Plan Your <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-foreground/80">
            Enter your trip details to get AI-powered traffic predictions
          </p>
        </div>

        <div className="glass-card p-8 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Select value={source} onValueChange={setSource}>
              <SelectTrigger className="glass border-white/20 text-foreground">
                <SelectValue placeholder="Source" />
              </SelectTrigger>
              <SelectContent className="bg-card border-white/20">
                <SelectItem value="mangalore">Mangalore City</SelectItem>
                <SelectItem value="kulshekar">Kulshekar</SelectItem>
                <SelectItem value="pumpwell">Pumpwell</SelectItem>
              </SelectContent>
            </Select>

            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger className="glass border-white/20 text-foreground">
                <SelectValue placeholder="Destination" />
              </SelectTrigger>
              <SelectContent className="bg-card border-white/20">
                <SelectItem value="kadri">Kadri</SelectItem>
                <SelectItem value="airport">Airport</SelectItem>
                <SelectItem value="bejai">Bejai</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative">
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full glass border-white/20 rounded-lg px-4 py-2 bg-transparent text-foreground focus:ring-2 focus:ring-cyan outline-none"
              />
              <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan pointer-events-none" />
            </div>
          </div>

          <Button
            onClick={handlePredict}
            className="w-full bg-cyan hover:bg-cyan-glow text-navy font-bold text-lg py-6 glow-cyan hover-glow"
          >
            Predict Route
          </Button>

          <p className="text-sm text-foreground/60 mt-4 text-center">
            Plan ahead. Save time. Travel stress-free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PredictForm;
