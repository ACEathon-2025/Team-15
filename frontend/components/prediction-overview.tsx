"use client"

import { Card } from "@/components/ui/card"
import { Clock, AlertTriangle, Calendar } from "lucide-react"

export function PredictionOverview() {
  return (
    <section id="prediction-overview" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
          <Card className="glass glow-cyan p-6 text-center space-y-4 hover:scale-105 transition-transform">
            <Clock className="w-12 h-12 text-cyan-400 mx-auto" />
            <div>
              <div className="text-4xl font-bold text-cyan-400">42 mins</div>
              <div className="text-sm text-slate-400 mt-2">Estimated Time of Arrival</div>
            </div>
          </Card>

          <Card className="glass glow-cyan p-6 text-center space-y-4 hover:scale-105 transition-transform">
            <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto" />
            <div>
              <div className="text-4xl font-bold text-yellow-400">Medium</div>
              <div className="text-sm text-slate-400 mt-2">Congestion Level</div>
            </div>
          </Card>

          <Card className="glass glow-cyan p-6 text-center space-y-4 hover:scale-105 transition-transform">
            <Calendar className="w-12 h-12 text-green-400 mx-auto" />
            <div>
              <div className="text-4xl font-bold text-green-400">08:15 AM</div>
              <div className="text-sm text-slate-400 mt-2">Best Departure Time</div>
            </div>
          </Card>
        </div>

        {/* Route Map Preview */}
        <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="aspect-video bg-slate-900/50 rounded-xl flex items-center justify-center relative overflow-hidden">
            <img
              src="/traffic-route-map-with-highlighted-path.jpg"
              alt="Route map preview"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm text-cyan-200">
                Based on AI predictions using real-time weather & past congestion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
