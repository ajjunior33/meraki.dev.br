import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">Desculpe, a página informada não existe.</p>
      <Link href="/">
        <Button>Voltar para página inicial</Button>
      </Link>
    </div>
  )
}

