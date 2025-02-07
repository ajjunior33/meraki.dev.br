import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Globe } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-10 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Code className="w-10 h-10 mb-2" />
              <CardTitle>Desenvolvimento de Softwares Customizados</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Nós criamos soluções de software personalizadas para atender às necessidades exclusivas do seu negócio.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Smartphone className="w-10 h-10 mb-2" />
              <CardTitle>Desenvolvimento de Aplicativos Móveis</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Crie aplicativos móveis poderosos e fáceis de usar para iOS e Android. Com as melhores tecnologias do mercado.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Globe className="w-10 h-10 mb-2" />
              <CardTitle>Desenvolvimento Web</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Projetar e desenvolver sites e aplicativos da web responsivos e de alto desempenho.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

