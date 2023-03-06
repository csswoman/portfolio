import { Header } from "../molecules/Header"
import { Hero } from "../organisms/Hero"
import { Work } from "../organisms/Work"
import { About } from "../organisms/About"
import { Contact } from "../organisms/Contact"

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="pt-36 px-4 flex flex-col gap-36">
          <Work />
          <About />
          <Contact />
        </div>
      </main>
    </>
  )
}
