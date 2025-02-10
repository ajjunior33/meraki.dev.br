"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const team = [
  {
    name: "André Souza",
    role: "CTO | Full Stack Engineer",
    image: "/andre_souza.png",
  },
  {
    name: "Matheus Oliveira",
    role: "Co - Founder | Full Stack Engineer",
    image: "/matheus_oliveira.jpeg",
  },
  {
    name: "Samuel Vermeuln",
    role: "CEO | Frontend Engineer",
    image: "/samuel_vermeuln.jpeg",
  },
  {
    name: "M. Carolina",
    role: "CFO",
    image: "/profile.jpg",
  },
  {
    name: "Raquel Patez",
    role: "CMO",
    image: "/raquel_patez.jpeg",
  },
  {
    name: "Yan Bada",
    role: "QA Director",
    image: "/profile.jpg",
  },
];

export function Team() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="team"
      className="w-full py-12 md:py-24 lg:py-32 bg-white relative flex items-center justify-center"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Nosso time</h2>

        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Team Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="flex-none w-[300px] snap-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="overflow-hidden border-none shadow-none">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
