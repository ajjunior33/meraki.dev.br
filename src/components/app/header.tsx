import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="w-full px-4 lg:px-6 h-20 flex items-center">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
        <Image src="./meraki.svg" width={40} height={40} alt="Logo" />
          <span className="text-2xl font-bold">Meraki Consultoria</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#services" className="text-lg font-medium hover:underline">
            Serviços
          </Link>
          <Link href="#projects" className="text-lg font-medium hover:underline">
            Projetos
          </Link>
          <Link href="#team" className="text-lg font-medium hover:underline">
            Time
          </Link>
          <Link href="#contact" className="text-lg font-medium hover:underline">
            Contato
          </Link>
        </nav>
        <Button className="hidden md:flex">Área do Cliente</Button>
      </div>
    </header>
  )
}

