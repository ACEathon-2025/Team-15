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
              {/* Route Preview Section */}
              <div className="mt-6 space-y-2">
                <h3 className="text-white text-sm opacity-90">
                  Route Preview (Predicted Path)
                </h3>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    title="Route preview"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15557.960069156497!2d74.84376710059614!3d12.876181667117299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3ba35bb399771a07%3A0xeb2856bb79d6e5ff!2sMangalore%20Central%20Railway%20Station!3m2!1d12.8633417!2d74.843251!4m5!1s0x3ba35ba4fa92feed%3A0x88d5f9ac7cd17769!2sKadri%20Park!3m2!1d12.888980199999999!2d74.8562231!5e0!3m2!1sen!2sin!4v1759801822419!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
                <p className="text-gray-300 text-xs mt-2">
                  Predicted route visualization using AI model — not live traffic
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
