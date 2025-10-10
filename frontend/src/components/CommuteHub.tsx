import { ArrowLeftRight, CloudRain, TrendingUp, AlertTriangle, Route, Lightbulb, History } from "lucide-react";

const hubItems = [
  { icon: ArrowLeftRight, title: "Route Comparison", description: "Compare multiple routes side by side" },
  { icon: Lightbulb, title: "What-if Simulation", description: "Test different departure scenarios" },
  { icon: TrendingUp, title: "Travel Time Chart", description: "Historical travel patterns" },
  { icon: CloudRain, title: "Weather Overlay", description: "Weather impact on traffic" },
  { icon: History, title: "Historical vs Predicted", description: "Accuracy comparison charts" },
  { icon: AlertTriangle, title: "Alerts & Warnings", description: "Real-time traffic alerts" },
  { icon: Route, title: "Smart Recommendations", description: "AI-powered route suggestions" },
];

const CommuteHub = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-navy/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🧠 Commute <span className="gradient-text">Optimization Hub</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Comprehensive tools for smarter journey planning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubItems.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="w-12 h-12 bg-cyan/20 rounded-xl flex items-center justify-center mb-4 glow-cyan-sm">
                <item.icon className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-foreground/70 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommuteHub;
