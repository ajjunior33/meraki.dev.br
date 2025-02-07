import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function Projects() {
  const projects = [
    { name: "Project A", description: "E-commerce platform", image: "/placeholder.svg?height=200&width=300" },
    { name: "Project B", description: "Mobile banking app", image: "/placeholder.svg?height=200&width=300" },
    {
      name: "Project C",
      description: "AI-powered analytics dashboard",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

