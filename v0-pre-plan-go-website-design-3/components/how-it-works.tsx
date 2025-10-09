import { Card } from "@/components/ui/card"

const steps = [
  { number: "1", title: "Input Trip Details", description: "Enter your source, destination, and desired arrival time" },
  { number: "2", title: "Fetch Data", description: "System retrieves historical traffic, weather, and event data" },
  {
    number: "3",
    title: "AI Prediction",
    description: "Machine learning models analyze patterns and predict conditions",
  },
  { number: "4", title: "Output ETA & Route", description: "Receive optimized route with accurate time estimates" },
  { number: "5", title: "Feedback Loop", description: "Your journey data helps improve future predictions" },
]

export function HowItWorks() {
  return (
    <section id="docs" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-[family-name:var(--font-poppins)]">
          How It Works
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          A simple 5-step process powered by advanced AI
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <Card key={index} className="glass p-6 flex items-start gap-6 hover:scale-105 transition-transform">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-2xl font-bold text-cyan-400">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
