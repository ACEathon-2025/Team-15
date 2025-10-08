"use client"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { Car, Menu, X } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handlePlan = () => {
    document.getElementById("planner")?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  return (
    <section id="home" className="relative flex flex-col">
      {/* Fixed header, static background (no blur/transition effects) */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-black/60" role="navigation" aria-label="Main">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-bold text-xl">
            <Car className="w-6 h-6 text-cyan-400" />
            <span className="font-[family-name:var(--font-poppins)]">PrePlanGo</span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#dashboard">Dashboard</a>
            <a href="#docs">Docs</a>
            <a href="#contact">Contact</a>
            <LiquidButton onClick={handlePlan} className="rounded-full text-white">
              Get Started
            </LiquidButton>
          </div>

          {/* Mobile toggle (no layout shift) */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu overlay (static styles) */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/70">
            <div className="container mx-auto px-4 py-3 flex flex-col gap-2">
              <a onClick={() => setMobileOpen(false)} href="#home" className="py-2">
                Home
              </a>
              <a onClick={() => setMobileOpen(false)} href="#features" className="py-2">
                Features
              </a>
              <a onClick={() => setMobileOpen(false)} href="#dashboard" className="py-2">
                Dashboard
              </a>
              <a onClick={() => setMobileOpen(false)} href="#docs" className="py-2">
                Docs
              </a>
              <a onClick={() => setMobileOpen(false)} href="#contact" className="py-2">
                Contact
              </a>
              <LiquidButton onClick={handlePlan} className="mt-2 text-white">
                Plan your route
              </LiquidButton>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to avoid jump since header is fixed */}
      <div className="h-16 md:h-20" />

      <div className="relative z-0">
        <div className="container mx-auto px-4 py-20 md:py-28 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-semibold">Predict Traffic. Plan Smarter Trips.</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg opacity-90">
            Smarter commutes, on time—every time.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <LiquidButton onClick={handlePlan} className="text-white">
              Get Started
            </LiquidButton>
            <a href="#features" className="border border-white/40 rounded-full px-5 py-2">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
