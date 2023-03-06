import image from '../../assets/images/5.jpg'
import twitter from '../../assets/icons/twitter.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import github from '../../assets/icons/github.svg'

export function Hero() {
  return (
    <section className="rainbow-bg">
      <div className="mx-auto flex flex-col items-center justify-center h-full text-white hero px-10 max-w-md text-lg">
        <img src={image} alt="Memoji of Karla" width={160} className="mb-8 hero-img" />
        <p className="mb-4">Hey, soy</p>
        <h1 className="text-6xl font-bold mb-6 tracking-wide text-center title">
          Karla Agraz
        </h1>
        <p className="mb-8 text-center">
          Como <strong>UX Engineer</strong> me dedico a crear
          soluciones digitales que mejoren la vida de las personas
        </p>
        <div className="flex gap-4 mb-12">
          <img src={twitter} alt="Twitter icon" />
          <img src={linkedin} alt="Linkedin icon" />
          <img src={github} alt="GitHub icon" />
        </div>
        <a href="#work">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </a>
      </div>
    </section>
  )
}
