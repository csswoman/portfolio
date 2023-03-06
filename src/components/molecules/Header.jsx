export function Header() {
  return (
    <header className="h-12 sm:h-16 fixed w-full top-0 text-white">
      <div className="wrapper p-4 mx-auto flex justify-between h-full">
        <a href="#"
          className="flex items-center logo"
          aria-label="Ir al inicio de la página">
          @csswoman
        </a>
        <nav className="flex gap-2 text-sm items-center md:text-base">
          <a className="inline-block p-2 font-semibold" href="#work">
            Mi trabajo
          </a>
          <a className="inline-block p-2 font-semibold" href="#about">
            Sobre mí
          </a>
          <a className="inline-block p-2 font-semibold" href="#contact">
            ¡Hablemos!
          </a>
        </nav>
      </div>
    </header>
  )
}
