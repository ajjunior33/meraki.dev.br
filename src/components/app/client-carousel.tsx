"use client"

import Image from "next/image"
import Slider from "react-slick"

import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

const clients = [
  { name: "Nexux", logo: "/nexux-logo.png" },
  { name: "NWT", logo: "/nwt-logo.png" },
  { name: "SDEC Tecnologia", logo: "/sdec-logo.png" },
  { name: "Vibbra", logo: "/vibbra-logo.svg" },
  { name: "Remessa Online", logo: "/remessa-online-logo.svg" },
  { name: "Universus", logo: "/universus-logo.svg" },
]

export function ClientCarousel() {
  const settings = {
    dots: false,
    focusOnSelect: true,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 1,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (

    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Quem confia em nosso trabalho
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Atendemos empresas de diversos setores que compartilham nosso compromisso com qualidade, inovação e resultado. Conheça alguns dos nossos parceiros.
          </p>
        </div>

          <Slider {...settings} className="client-carousel z-0">
            {clients.map((client, index) => (
              <div key={index} className="px-4 z-0">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center h-32 z-0">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={150}
                    height={75}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>

      </div>


    </section>
  )
}