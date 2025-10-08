import { Hero } from "@/components/hero"
import { PredictionOverview } from "@/components/prediction-overview"
import { RouteAnalytics } from "@/components/route-analytics"
import { Features } from "@/components/features"
import { TechStack } from "@/components/tech-stack"
import { HowItWorks } from "@/components/how-it-works"
import { CommuteHub } from "@/components/commute-hub"
import { Footer } from "@/components/footer"
import PredictionForm from "@/components/prediction-form"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PredictionForm />
      <PredictionOverview />
      <RouteAnalytics />
      <Features />
      <TechStack />
      <HowItWorks />
      <CommuteHub />
      <Footer />
    </main>
  )
}
