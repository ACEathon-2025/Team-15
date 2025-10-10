"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, Clock, Target } from "lucide-react"

const data = [
  { hour: "6 AM", time: 35 },
  { hour: "7 AM", time: 45 },
  { hour: "8 AM", time: 55 },
  { hour: "9 AM", time: 42 },
  { hour: "10 AM", time: 38 },
  { hour: "11 AM", time: 40 },
  { hour: "12 PM", time: 43 },
]

export function RouteAnalytics() {
  return (
    <section id="dashboard" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-[family-name:var(--font-poppins)]">
          AI Insights Dashboard
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Real-time analytics and predictions to optimize your commute
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="glass p-6 space-y-2">
            <TrendingUp className="w-8 h-8 text-cyan-400" />
            <div className="text-3xl font-bold text-cyan-400">23%</div>
            <div className="text-sm text-slate-400">Time Saved</div>
          </Card>

          <Card className="glass p-6 space-y-2">
            <Clock className="w-8 h-8 text-green-400" />
            <div className="text-3xl font-bold text-green-400">18%</div>
            <div className="text-sm text-slate-400">Delay Reduction</div>
          </Card>

          <Card className="glass p-6 space-y-2">
            <Target className="w-8 h-8 text-purple-400" />
            <div className="text-3xl font-bold text-purple-400">94%</div>
            <div className="text-sm text-slate-400">Prediction Accuracy</div>
          </Card>
        </div>

        <Card className="glass p-8">
          <h3 className="text-2xl font-semibold mb-6">Travel Time Variation by Hour</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="hour" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="time" fill="#22d3ee" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <div className="flex gap-4 mt-6">
            <Button variant="outline" className="border-slate-700 bg-transparent">
              Weekday
            </Button>
            <Button variant="outline" className="border-slate-700 bg-transparent">
              Weekend
            </Button>
            <Button variant="outline" className="border-slate-700 bg-transparent">
              Weather Filter
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
