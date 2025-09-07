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

    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Soluções que geram impacto real
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Veja projetos que entregamos com excelência — do planejamento à execução, sempre com foco em performance, inovação e valor para o cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

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

      </div>


    </section>
  )
}

