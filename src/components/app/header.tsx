"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useCallback } from "react"

export function Header() {
  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <header className="w-full px-4 lg:px-6 h-20 flex items-center fixed top-0 bg-white z-50">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
        <Image src="./meraki.svg" width={40} height={40} alt="Logo" />
          <span className="text-2xl font-bold">Meraki Consultoria</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#services" className="text-lg font-medium hover:underline" onClick={(e) => scrollToSection(e, "services")}>
            Serviços
          </Link>
          <Link href="#projects" className="text-lg font-medium hover:underline" onClick={(e) => scrollToSection(e, "projects")}>
            Projetos
          </Link>
          <Link href="#team" className="text-lg font-medium hover:underline" onClick={(e) => scrollToSection(e, "team")}>
            Time
          </Link>
          <Link href="#contact" className="text-lg font-medium hover:underline" onClick={(e) => scrollToSection(e, "contact")}>
            Contato
          </Link>
        </nav>
        <Button className="hidden md:flex bg-primary hover:bg-[#B32F00] text-white">Área do Cliente</Button>
      </div>
    </header>
  )
}

