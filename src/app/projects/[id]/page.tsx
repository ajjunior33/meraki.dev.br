import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/#projects">
        <Button variant="outline" className="mb-4">
          ← Back to Projects
        </Button>
      </Link>
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.name}
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <ul className="list-disc list-inside mb-4">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Project Description</h2>
          <p className="mb-4">{project.longDescription}</p>
          {project.clientTestimonial && (
            <>
              <h2 className="text-2xl font-semibold mb-2">Client Testimonial</h2>
              <blockquote className="italic border-l-4 border-gray-300 pl-4 mb-4">
                {project.clientTestimonial}
              </blockquote>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

