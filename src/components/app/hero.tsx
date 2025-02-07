import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Soluções de software inovadoras
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
            Criamos software de ponta para ajudar empresas a prosperar na era digital.
            </p>
          </div>
          <div className="space-x-4">
            <Button>Começar agora!</Button>
            <Button variant="outline">Leia mais</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

