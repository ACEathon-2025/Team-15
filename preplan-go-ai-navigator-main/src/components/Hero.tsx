import { Button } from "@/components/ui/button";

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src="/video-2-2.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-indigo/40 to-background/70" />
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🚗</span>
            <span className="text-2xl font-bold gradient-text">PrePlanGo</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-cyan transition-colors">Home</a>
            <a href="#features" className="hover:text-cyan transition-colors">Features</a>
            <a href="#dashboard" className="hover:text-cyan transition-colors">Dashboard</a>
            <a href="#contact" className="hover:text-cyan transition-colors">Contact</a>
          </div>
          <Button 
            onClick={() => document.getElementById("predict-form")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-cyan hover:bg-cyan-glow text-navy font-semibold glow-cyan-sm hover-glow"
          >
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Smarter Commutes. <span className="gradient-text">On Time.</span> Every Time.
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          AI-powered traffic prediction using historical, weather, and event data.
        </p>

        <Button
          onClick={() => document.getElementById("predict-form")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-cyan hover:bg-cyan-glow text-navy font-bold text-lg px-12 py-6 glow-cyan hover-glow animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Start Planning Your Route
        </Button>
      </div>
    </section>
  );
};

export default Hero;
