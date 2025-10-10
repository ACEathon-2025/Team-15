import { Brain, Clock, Cloud, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    emoji: "🔮",
    title: "Predict Congestion",
    description: "Advanced AI algorithms analyze historical patterns to predict traffic congestion with high accuracy.",
  },
  {
    icon: Clock,
    emoji: "🕒",
    title: "Smart Departure Suggestions",
    description: "Get optimal departure time recommendations to avoid delays and reach on time consistently.",
  },
  {
    icon: Cloud,
    emoji: "🌦",
    title: "Context Awareness",
    description: "Real-time weather conditions, holidays, and special events factored into predictions.",
  },
  {
    icon: Sparkles,
    emoji: "🧠",
    title: "What-if Mode Simulation",
    description: "Test different scenarios and routes to find the perfect journey plan for your schedule.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-b from-navy/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powered by <span className="gradient-text">AI Intelligence</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Experience the future of commute planning with cutting-edge features
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-cyan/20 rounded-2xl flex items-center justify-center glow-cyan-sm">
                  <feature.icon className="w-8 h-8 text-cyan" />
                </div>
                <span className="text-4xl">{feature.emoji}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
