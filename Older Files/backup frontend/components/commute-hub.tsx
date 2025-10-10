import { Card } from "@/components/ui/card"
import { Route, Zap, TrendingUp, CloudRain, BarChart3, Bell, Sparkles } from "lucide-react"

const components = [
  { icon: Route, title: "Route Comparison", description: "Compare multiple routes side-by-side" },
  { icon: Zap, title: "What-if Simulation", description: "Test different departure times" },
  { icon: TrendingUp, title: "Travel Time Chart", description: "Visualize historical patterns" },
  { icon: CloudRain, title: "Weather Overlay", description: "See weather impact on traffic" },
  { icon: BarChart3, title: "Historical vs Predicted", description: "Compare accuracy metrics" },
  { icon: Bell, title: "Alerts Card", description: "Get notified of delays" },
  { icon: Sparkles, title: "Recommendations", description: "AI-powered suggestions" },
]

export function CommuteHub() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-[family-name:var(--font-poppins)]">
          Commute Optimization Hub
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Comprehensive tools for complete journey planning
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {components.map((component, index) => (
            <Card key={index} className="glass p-6 space-y-4 hover:scale-105 transition-transform">
              <component.icon className="w-10 h-10 text-cyan-400" />
              <h3 className="text-xl font-semibold">{component.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{component.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
