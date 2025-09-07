"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import type React from "react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-white flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter">Vamos conversar?</h2>
              <p className="text-gray-400">Entre em contato com a gente para tirar dúvidas, solicitar uma proposta ou iniciar um novo projeto. Estamos prontos para te ouvir.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="text-primary" />
                <span>+55 27 98886 4790</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-primary" />
                <span>contato@meraki.dev.br</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary" />
                <span>Av. Valadares, 124, Presidente Medici, Cariacica/ES</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-primary hover:bg-[#B32F00] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary hover:bg-[#B32F00] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary hover:bg-[#B32F00] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="bg-white text-secondary">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Seu nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seumelhor@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Escreva de maneira clara sua ideia."
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[150px] resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-[#B32F00] text-white h-12">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

