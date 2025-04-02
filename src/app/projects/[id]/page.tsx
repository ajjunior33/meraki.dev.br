import { Footer } from "@/components/app/footer"
import { Header } from "@/components/app/header"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const techLogos: { [key: string]: string } = {
  React: "/icons/react.svg",
  "Node.js": "/placeholder.svg",
  MongoDB: "/icons/MongoDB.svg",
  Redux: "/placeholder.svg",
  Stripe: "/placeholder.svg",
  "React Native": "/icons/react.svg",
  "Express.js": "/icons/express.svg",
  "Vite.js": "/icons/vite.svg",
  PostgreSQL: "/icons/PostgresSQL.svg",
  JWT: "/placeholder.svg",
  AWS: "/icons/aws.svg",
  "Digital Ocean": "/icons/digital_ocean.svg",
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-8">
          <Link href="/#projects">
            <Button variant="outline" className="mb-8">
              <ArrowLeft />
              Voltar para projetos
            </Button>
          </Link>

          {/* Client Logo and Project Title */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
              <p className="text-gray-600 text-xl">{project.description}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Image
                src={project.customerLogo}
                alt="Client Logo"
                width={200}
                height={60}
                className="object-contain"
              />
            </div>
          </div>

          {/* Project Image */}
          <div className="relative aspect-video w-full mb-12 rounded-lg overflow-hidden">
            <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
          </div>

          {/* Technologies Used */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Tecnologias usadas</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex-none flex flex-col items-center bg-gray-50 rounded-lg p-4 min-w-[120px]"
                >
                  <Image
                    src={techLogos[tech] || "/placeholder.svg"}
                    alt={tech}
                    width={30}
                    height={30}
                    className="mb-2"
                  />
                  <span className="text-sm font-medium text-center">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Descrição</h2>
              <p className="text-gray-600">{project.longDescription}</p>
            </div>

            {project.clientTestimonial && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Testemunho</h2>
                <blockquote className="text-gray-600 italic">&quot;{project.clientTestimonial}&quot;</blockquote>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

