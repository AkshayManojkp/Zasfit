import { Hero } from "@/components/Hero"
import { Navbar } from "@/components/Navbar"
import { ProgramCards } from "@/components/ProgramCards"
import { KidsABC } from "@/components/KidsABC"
import { Nutrition } from "@/components/Nutrition"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProgramCards />
      <KidsABC />
      <Nutrition />
    </>
  )
}
