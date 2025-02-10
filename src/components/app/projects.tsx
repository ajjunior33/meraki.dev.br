import { Card, CardContent } from "@/components/ui/card"
import type { Project } from "@/lib/projects"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container px-4 md:px-6 flex items-center justify-center gap-5 flex-col">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id}>
              <Link href={`/projects/${project.id}`}>
                <CardContent className="p-4  flex flex-col items-center justify-center">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={300}
                    height={200}
                    className="rounded-lg mb-4 w-full"
                  />
                  <h3 className="text-xl font-semibold mb-2 w-full">{project.name}</h3>
                  <p className="text-gray-600 w-full">{project.description}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        <Button size="lg">Ver mais</Button>
      </div>
    </section>
  )
}

