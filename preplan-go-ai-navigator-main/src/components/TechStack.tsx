const techStack = [
  { name: "React", color: "text-[#61DAFB]" },
  { name: "Tailwind CSS", color: "text-[#06B6D4]" },
  { name: "FastAPI", color: "text-[#009688]" },
  { name: "Scikit-learn", color: "text-[#F7931E]" },
  { name: "PostgreSQL", color: "text-[#4169E1]" },
  { name: "Redis", color: "text-[#DC382D]" },
];

const TechStack = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-navy/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built with <span className="gradient-text">Modern Technology</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Scalable architecture for real-world AI integration
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="glass-card px-8 py-4 hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className={`text-lg font-semibold ${tech.color}`}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8 max-w-4xl mx-auto">
          <p className="text-center text-foreground/70 leading-relaxed">
            PrePlanGo leverages cutting-edge technologies to deliver accurate predictions, 
            seamless user experience, and scalable performance. From machine learning models 
            to real-time data processing, every component is optimized for reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
