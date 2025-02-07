import { Contact } from "@/components/app/contact";
import { Footer } from "@/components/app/footer";
import { Header } from "@/components/app/header";
import { Hero } from "@/components/app/hero";
import { Projects } from "@/components/app/projects";
import { Services } from "@/components/app/services";
import { Team } from "@/components/app/team";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">

      <Header />
      <main className="flex-1 pt-20">
        <Hero />
        <Services />

        <Projects />
        <Team />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
