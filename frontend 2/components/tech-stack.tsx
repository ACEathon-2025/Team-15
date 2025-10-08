import { Card } from "@/components/ui/card"

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "FastAPI", icon: "⚡" },
  { name: "Scikit-learn", icon: "🤖" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Redis", icon: "🔴" },
]

export function TechStack() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-[family-name:var(--font-poppins)]">
          Built with Modern Tech
        </h2>
        <p className="text-center text-slate-400 mb-12">Scalable architecture for real-world AI integration</p>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <Card key={index} className="glass px-6 py-4 hover:scale-110 transition-transform">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{tech.icon}</span>
                <span className="font-semibold">{tech.name}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
