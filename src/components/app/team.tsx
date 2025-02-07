import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function Team() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Nosso Time</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card key={1}>
            <CardContent className="p-4 flex flex-col items-center">
              <Image
                src='/andre_souza.png'
                alt={"André Souza"}
                width={200}
                height={200}
                className="rounded-full mb-4 h-[200px] w-[200px] object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">André Souza</h3>
              <p className="text-gray-600">CTO</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

