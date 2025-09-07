import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Globe, BotMessageSquare } from "lucide-react"

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          <Card>
            <CardHeader>
              <Code className="w-10 h-10 mb-2" />
              <CardTitle>Desenvolvimento de Softwares Customizados</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Desenvolvemos sistemas sob medida para resolver os desafios específicos do seu negócio. Nossa equipe entende a fundo seus processos para entregar soluções seguras, escaláveis e integráveis a outras plataformas. Tudo com foco em performance e usabilidade, do back-end ao front-end.              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Smartphone className="w-10 h-10 mb-2" />
              <CardTitle>Desenvolvimento de Aplicativos Móveis</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Criamos aplicativos robustos, intuitivos e com visual moderno para iOS e Android. Utilizamos tecnologias nativas e híbridas para garantir fluidez, estabilidade e ótima experiência do usuário. Desde o design até a publicação nas lojas, cuidamos de tudo para você.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Globe className="w-10 h-10 mb-2" />
              <CardTitle>Desenvolvimento Web</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Projetamos sites e aplicações web com foco em velocidade, acessibilidade e experiência. Utilizamos as melhores práticas de UX/UI, SEO e segurança, garantindo presença digital forte e eficiente. Seja para sistemas internos ou portais públicos, entregamos com qualidade.              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BotMessageSquare className="w-10 h-10 mb-2" />
              <CardTitle>Criação de Chatbots Inteligentes</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Automatize interações com clientes usando chatbots personalizados e inteligentes. Desenvolvemos bots para WhatsApp, sites e aplicativos, com integração a CRMs, ERPs e bancos de dados. Nossos bots são treinados para oferecer respostas rápidas, humanas e eficientes.              </CardDescription>
            </CardContent>
          </Card>
        </div>

      </div>


    </section>
  )
}

