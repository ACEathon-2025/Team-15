import { Clock, AlertCircle, Calendar } from "lucide-react";

const PredictionOverview = ({ show }: { show: boolean }) => {
  if (!show) return null;

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-navy/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
          {/* ETA Card */}
          <div className="glass-card p-8 hover-glow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-cyan/20 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-cyan" />
              </div>
              <span className="text-2xl font-bold">⏱</span>
            </div>
            <h3 className="text-4xl font-bold text-cyan mb-2">42 mins</h3>
            <p className="text-foreground/70">Estimated Time of Arrival</p>
          </div>

          {/* Congestion Card */}
          <div className="glass-card p-8 hover-glow" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-2xl font-bold">🚦</span>
            </div>
            <h3 className="text-4xl font-bold text-yellow-400 mb-2">Medium</h3>
            <p className="text-foreground/70">Traffic Congestion Level</p>
          </div>

          {/* Best Departure Card */}
          <div className="glass-card p-8 hover-glow" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-2xl font-bold">🕒</span>
            </div>
            <h3 className="text-4xl font-bold text-green-400 mb-2">08:15 AM</h3>
            <p className="text-foreground/70">Recommended Departure Time</p>
          </div>
        </div>

        {/* Route Map Preview */}
        <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h3 className="text-2xl font-bold mb-6">Predicted Route</h3>
          <div className="bg-primary/50 rounded-xl h-64 flex items-center justify-center border border-cyan/30">
            <div className="text-center">
              <div className="text-6xl mb-4 animate-pulse">🗺️</div>
              <p className="text-foreground/70">Interactive map visualization</p>
              <p className="text-sm text-cyan mt-2">Route optimized based on current predictions</p>
            </div>
          </div>
          <p className="text-sm text-foreground/60 mt-6 text-center">
            Based on AI predictions using real-time weather & past congestion data
          </p>
        </div>
      </div>
    </section>
  );
};

export default PredictionOverview;
