import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Globe } from "lucide-react"

export function Services() {
  return (

    <section id="services" className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            O que podemos fazer por você
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Oferecemos soluções personalizadas para atender às necessidades do seu negócio. Conheça nossos serviços e descubra como podemos ajudar.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">

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

