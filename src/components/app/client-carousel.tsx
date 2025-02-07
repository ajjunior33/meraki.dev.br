"use client"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

const clients = [
  { name: "Client 1", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Client 2", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Client 3", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Client 4", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Client 5", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Client 6", logo: "/placeholder.svg?height=100&width=200" },
]

export function ClientCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 100,
    cssEase: "linear",
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
    <section className="w-full py-12 bg-gray-100 flex items-center justify-center z-0">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Clientes</h2>
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

