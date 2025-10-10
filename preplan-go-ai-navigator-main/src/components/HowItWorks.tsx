const steps = [
  { number: "1️⃣", title: "Input Your Trip", description: "Enter source, destination, and arrival time" },
  { number: "2️⃣", title: "Fetch Data", description: "System retrieves weather, traffic, and event data" },
  { number: "3️⃣", title: "AI Prediction", description: "Machine learning models analyze patterns" },
  { number: "4️⃣", title: "Output ETA & Route", description: "Receive optimized route and timing" },
  { number: "5️⃣", title: "Feedback Loop", description: "Your data improves future predictions" },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-navy/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="gradient-text">PrePlanGo</span> Works
          </h2>
          <p className="text-xl text-foreground/70">
            Five simple steps to smarter commuting
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan via-indigo to-cyan opacity-30" />

          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } animate-fade-in`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                <div className="glass-card p-6 hover-glow inline-block max-w-md">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-cyan/20 rounded-full flex items-center justify-center text-3xl glow-cyan animate-pulse-glow">
                  {step.number}
                </div>
              </div>

              <div className="flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
