import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full py-6  bg-tertiary text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-lg font-semibold">Meraki Consultoria</span>
          </div>
          <nav className="flex gap-4">
            <Link href="#" className="hover:underline">
              Politicas de Privacidade
            </Link>
            <Link href="#" className="hover:underline">
              Termos de serviço
            </Link>
          </nav>
        </div>
        <div className="mt-4 text-center text-sm">
          © {new Date().getFullYear()} Meraki Consultoria. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

