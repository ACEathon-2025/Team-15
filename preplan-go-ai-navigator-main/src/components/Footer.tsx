import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy/80 border-t border-cyan/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🚗</span>
              <span className="text-2xl font-bold gradient-text">PrePlanGo</span>
            </div>
            <p className="text-foreground/70 text-sm">
              AI-powered traffic prediction for smarter commutes
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-cyan">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="#home" className="block text-foreground/70 hover:text-cyan transition-colors">Home</a>
              <a href="#features" className="block text-foreground/70 hover:text-cyan transition-colors">Features</a>
              <a href="#dashboard" className="block text-foreground/70 hover:text-cyan transition-colors">Dashboard</a>
              <a href="#contact" className="block text-foreground/70 hover:text-cyan transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-cyan">Connect</h3>
            <div className="space-y-2 text-sm text-foreground/70">
              <p>Email: info@preplango.com</p>
              <p>Support: support@preplango.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan/20 pt-8 text-center">
          <p className="text-foreground/70 text-sm flex items-center justify-center gap-2">
            © 2025 PrePlanGo. Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> by 
            <span className="text-cyan font-semibold">Logic Bros</span> — 
            <span className="text-cyan">Vishwas Sharma</span> and 
            <span className="text-cyan">Thushar Suvarna</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
