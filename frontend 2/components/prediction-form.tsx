"use client"

import type React from "react"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CalendarClock, MapPin } from "lucide-react"

export default function PredictionForm() {
  const [source, setSource] = useState("")
  const [destination, setDestination] = useState("")
  const [arrivalAt, setArrivalAt] = useState<string>("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    document.getElementById("prediction-overview")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="planner" className="relative py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="neon-text text-2xl md:text-3xl font-semibold">Plan your trip</h2>

        <form
          onSubmit={handleSubmit}
          className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4 md:p-6 supports-[backdrop-filter]:backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.08)]"
        >
          {/* Source */}
          <div className="md:col-span-4">
            <Label htmlFor="source" className="text-left block">
              Source
            </Label>
            <div className="relative mt-1 group">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-300/80 pointer-events-none" />
              <Input
                id="source"
                placeholder="Start typing a location..."
                list="source-suggestions"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="pl-10 bg-slate-900/50 border-slate-700 transition-all focus:ring-2 focus:ring-cyan-400/60 hover:border-cyan-400/40"
              />
              <datalist id="source-suggestions">
                <option value="Mangalore City" />
                <option value="Mangalore Airport" />
                <option value="Mangalore Station" />
                <option value="Surathkal" />
              </datalist>
            </div>
          </div>

          {/* Destination */}
          <div className="md:col-span-4">
            <Label htmlFor="destination" className="text-left block">
              Destination
            </Label>
            <div className="relative mt-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-300/80 pointer-events-none" />
              <Input
                id="destination"
                placeholder="Where to?"
                list="destination-suggestions"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="pl-10 bg-slate-900/50 border-slate-700 transition-all focus:ring-2 focus:ring-cyan-400/60 hover:border-cyan-400/40"
              />
              <datalist id="destination-suggestions">
                <option value="Udupi" />
                <option value="Manipal" />
                <option value="Surathkal" />
                <option value="Moodabidri" />
              </datalist>
            </div>
          </div>

          {/* Desired arrival (datetime) */}
          <div className="md:col-span-4">
            <Label htmlFor="arrival-at" className="text-left block">
              Desired arrival
            </Label>
            <div className="relative mt-1">
              <CalendarClock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-300/80 pointer-events-none" />
              <Input
                id="arrival-at"
                type="datetime-local"
                value={arrivalAt}
                onChange={(e) => setArrivalAt(e.target.value)}
                className="pl-10 bg-slate-900/50 border-slate-700 transition-all focus:ring-2 focus:ring-cyan-400/60 hover:border-cyan-400/40"
              />
            </div>
          </div>

          <div className="md:col-span-12 pt-2">
            <Button
              type="submit"
              className="w-full md:w-auto bg-cyan-500 text-black hover:bg-cyan-400 font-semibold rounded-xl px-6 py-5 transition-all glow-cyan-hover"
            >
              Get Started
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
