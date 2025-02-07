import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Entre em contato</h2>
        <form className="max-w-md mx-auto space-y-4">
          <Input type="text" placeholder="Seu nome" />
          <Input type="email" placeholder="Seu email" />
          <Textarea placeholder="Uma breve mensagem..." />
          <Button type="submit" className="w-full">
            Enviar mensagem
          </Button>
        </form>
      </div>
    </section>
  )
}

