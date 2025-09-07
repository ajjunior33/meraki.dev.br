'use client'

import { BarChart3, ExternalLink, MessageCircle, Puzzle, Zap } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"
import { Card } from "../ui/card"
const partner = {
  name: "Zenvia",
  description:
    "Plataforma de comunicação omnichannel para empresas que revoluciona a forma como nos conectamos com nossos clientes",
  logo: "https://www.zenvia.com/wp-content/uploads/2025/02/logo_zenvia.svg",
  website: "https://zenvia.com",
  features: [
    { name: "Comunicação Omnichannel", icon: MessageCircle },
    { name: "Automação Inteligente", icon: Zap },
    { name: "Analytics Avançado", icon: BarChart3 },
    { name: "Integração Completa", icon: Puzzle },
  ],
}

export const Partners = () => {

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Nosso Parceiro Oficial</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Orgulhosamente em parceria com a Zenvia, líder em soluções de comunicação empresarial
          </p>
        </div>



        <Card className="w-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 border-2 border-primary/20 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 group overflow-hidden relative mb-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
          <div className="relative z-10 p-12 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="p-4 bg-gradient-to-r from-blue-600 via-primary/40 to-purple-600 rounded-2xl  transition-all duration-300">
                    <Image
                      src={partner.logo}
                      width={120}
                      height={60}
                      alt={`Logo ${partner.name}`}
                      className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">{partner.description}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => window.open(partner.website, "_blank")}
                  >
                    Visite o Site da Zenvia
                    <ExternalLink className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
              className="border-2 border-primary/90 text-primary hover:bg-primary hover:text-white bg-white px-6 py-3"
                   >
                    Saiba Mais
                  </Button>
                </div>

              </div>
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-foreground mb-6">Recursos Principais</h4>
                <div className="grid grid-cols-1 gap-4">
                  {partner.features.map((feature, index) => {
                    const IconComponent = feature.icon
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-4 bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl border border-primary/10 hover:border-primary/20 transition-all duration-300 group/feature"
                      >
                        <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover/feature:from-primary/30 group-hover/feature:to-primary/20 transition-all duration-300">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-lg font-medium text-foreground">{feature.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-foreground mb-4">Parceria Estratégica</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Nossa parceria exclusiva com a Zenvia nos permite oferecer as mais avançadas soluções de comunicação
              empresarial, garantindo que nossos clientes tenham acesso às melhores tecnologias do mercado.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/90 text-primary hover:bg-primary hover:text-white bg-white px-6 py-3"
            >
              Saiba Como Funciona
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}