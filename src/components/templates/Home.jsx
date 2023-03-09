import { Header } from "../molecules/Header"
import { Hero } from "../organisms/Hero"
import { Work } from "../organisms/Work"
import { About } from "../organisms/About"
import { Contact } from "../organisms/Contact"
import { Footer } from "../molecules/Footer"

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="pt-20 lg:pt-32 px-4 flex flex-col gap-20 lg:gap-32">
          <Work />
          <About />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}
