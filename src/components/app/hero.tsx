"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react"

const FloatingElement = ({ delay, children }: { delay: number; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="absolute"
    style={{
      animation: `float 6s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}
  >
    {children}
  </motion.div>
)

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary text-white overflow-hidden relative">
      <FloatingElement delay={0.6}>
        <div className="w-16 h-16 bg-primary rounded-full opacity-20 absolute -top-8 -left-8" />
      </FloatingElement>
      <FloatingElement delay={0.8}>
        <div className="w-24 h-24 bg-primary rounded-full opacity-20 absolute top-1/4 -right-12" />
      </FloatingElement>
      <FloatingElement delay={1}>
        <div className="w-20 h-20 bg-primary rounded-full opacity-20 absolute bottom-1/4 -left-10" />
      </FloatingElement>
      <div className="px-4 md:px-6 relative z-10 flex items-center justify-center w-full">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Soluções de software inovadoras
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mx-auto max-w-[700px] text-gray-300 md:text-xl"
            >
             Criamos software de ponta para ajudar empresas a prosperar na era digital.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-x-4"
          >
            <Button asChild className="bg-primary text-white hover:bg-[#B32F00] transition-colors duration-300">
              <Link href="#contact">Vamos nessa</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-secondary transition-colors duration-300"
            >
              <Link href="#services">Ler mais</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

