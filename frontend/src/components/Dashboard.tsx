import TrafficCharts from "./TrafficCharts";

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20 px-6 bg-gradient-to-b from-background to-navy/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI <span className="gradient-text">Insights Dashboard</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Real-time analytics and predictive insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 text-center hover-glow">
            <div className="text-5xl font-bold text-cyan mb-2">32%</div>
            <p className="text-foreground/70">Time Saved</p>
          </div>
          <div className="glass-card p-6 text-center hover-glow">
            <div className="text-5xl font-bold text-green-400 mb-2">45%</div>
            <p className="text-foreground/70">Delay Reduction</p>
          </div>
          <div className="glass-card p-6 text-center hover-glow">
            <div className="text-5xl font-bold text-purple-400 mb-2">91%</div>
            <p className="text-foreground/70">Prediction Accuracy</p>
          </div>
        </div>

        <div className="glass-card p-8 animate-fade-in">
          <TrafficCharts />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
