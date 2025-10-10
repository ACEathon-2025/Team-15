import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-background to-navy/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            💡 Meet the Team Behind <span className="gradient-text">PrePlanGo</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto glass-card p-12 border-2 border-cyan/30 animate-pulse-glow">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Backend Developer */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-cyan">
                <span className="text-4xl">⚙️</span>
              </div>
              <div className="text-cyan text-sm font-semibold tracking-wider uppercase">
                Backend Developer
              </div>
              <div className="text-3xl font-bold">Vishwas Sharma</div>
              <a
                href="mailto:v2802sharma@gmail.com"
                className="inline-flex items-center gap-2 text-foreground/70 hover:text-cyan transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">v2802sharma@gmail.com</span>
              </a>
            </div>

            {/* Frontend Developer */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-cyan">
                <span className="text-4xl">🎨</span>
              </div>
              <div className="text-cyan text-sm font-semibold tracking-wider uppercase">
                Frontend Developer
              </div>
              <div className="text-3xl font-bold">Thushar Suvarna</div>
              <a
                href="mailto:thusharyadav054@gmail.com"
                className="inline-flex items-center gap-2 text-foreground/70 hover:text-cyan transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">thusharyadav054@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-foreground/80">
              ✨ Together we built PrePlanGo — <span className="text-cyan font-semibold">Smarter Commutes. On Time. Every Time.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
