import { Header } from "../molecules/Header"
import { Hero } from "../organisms/Hero"
import { Work } from "../organisms/Work"

export function Home() {
  return (
    <>
      <div className="rainbow-bg">
        <Header />
        <Hero />
      </div>
      <main className="text-white">
        <Work />
      </main>
    </>
  )
}
