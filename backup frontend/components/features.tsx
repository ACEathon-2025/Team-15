import { Card } from "@/components/ui/card"
import { Brain, Clock, Cloud, Lightbulb } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Predict Congestion",
    description: "Advanced AI algorithms analyze traffic patterns to predict congestion before it happens.",
  },
  {
    icon: Clock,
    title: "Smart Departure Suggestions",
    description: "Get personalized recommendations for the best time to leave based on your destination.",
  },
  {
    icon: Cloud,
    title: "Context Awareness",
    description: "Factors in weather conditions, holidays, and special events for accurate predictions.",
  },
  {
    icon: Lightbulb,
    title: '"What-if" Mode Simulation',
    description: "Explore different scenarios and routes to find the optimal path for your journey.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-[family-name:var(--font-poppins)]">
          Powerful Features
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Everything you need for a stress-free commute
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="glass p-8 hover:scale-105 transition-transform space-y-4">
              <feature.icon className="w-12 h-12 text-cyan-400" />
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
