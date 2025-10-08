"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Car } from "lucide-react"

export function Hero() {
  const [source, setSource] = useState("mangalore-city")
  const [destination, setDestination] = useState("")
  const [arrivalTime, setArrivalTime] = useState("")

  const handlePredict = () => {
    // Scroll to prediction overview section
    document.getElementById("prediction-overview")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 -z-10">
        <img src="/images/hero-traffic.jpg" alt="Traffic highway at night" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/60 via-[#1e1b4b]/50 to-[#164e63]/40" />
      </div>

      {/* Navbar */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Car className="w-6 h-6 text-cyan-400" />
          <span className="font-[family-name:var(--font-poppins)]">PrePlanGo</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-cyan-400 transition-colors">
            Home
          </a>
          <a href="#features" className="hover:text-cyan-400 transition-colors">
            Features
          </a>
          <a href="#dashboard" className="hover:text-cyan-400 transition-colors">
            Dashboard
          </a>
          <a href="#docs" className="hover:text-cyan-400 transition-colors">
            Docs
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </div>

        <Button className="glow-cyan rounded-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold">
          Get Started
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 container mx-auto px-4 flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-poppins)] text-balance">
          Smarter Commutes. <br />
          On Time. Every Time.
        </h1>

        <p className="text-xl md:text-2xl text-cyan-100 mb-12 max-w-3xl text-balance">
          AI-powered traffic prediction using historical, weather, and event data.
        </p>

        {/* Glassmorphic Input Card */}
        <div className="glass glow-cyan rounded-2xl p-8 max-w-2xl w-full space-y-6 animate-fade-in">
          <div className="space-y-2">
            <Label htmlFor="source" className="text-left block">
              Source
            </Label>
            <Select value={source} onValueChange={setSource}>
              <SelectTrigger id="source" className="bg-slate-900/50 border-slate-700">
                <SelectValue placeholder="Select source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mangalore-city">Mangalore City</SelectItem>
                <SelectItem value="mangalore-airport">Mangalore Airport</SelectItem>
                <SelectItem value="mangalore-station">Mangalore Station</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="destination" className="text-left block">
              Destination
            </Label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger id="destination" className="bg-slate-900/50 border-slate-700">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="udupi">Udupi</SelectItem>
                <SelectItem value="manipal">Manipal</SelectItem>
                <SelectItem value="surathkal">Surathkal</SelectItem>
                <SelectItem value="moodabidri">Moodabidri</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="arrival-time" className="text-left block">
              Desired Arrival Time
            </Label>
            <Input
              id="arrival-time"
              type="time"
              value={arrivalTime}
              onChange={(e) => setArrivalTime(e.target.value)}
              className="bg-slate-900/50 border-slate-700"
            />
          </div>

          <Button
            onClick={handlePredict}
            className="w-full glow-cyan-hover bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold text-lg py-6 rounded-xl transition-all"
          >
            Predict Route
          </Button>
        </div>

        <p className="mt-8 text-cyan-200/80 text-sm">Plan ahead. Save time. Travel stress-free.</p>
      </div>
    </section>
  )
}
