import image from '../../assets/images/5.jpg'
import twitter from '../../assets/icons/twitter.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import github from '../../assets/icons/github.svg'

export function Hero() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center h-full text-white hero px-10 max-w-md">
      <img src={image} alt="Memoji of Karla" width={160} className="mb-4" />
      <p className="mb-4">Hey, soy</p>
      <h1 className="text-5xl font-bold mb-6 tracking-wide text-center title">
        Karla Agraz
      </h1>
      <p className="mb-8 text-center">
        Como <strong>UX Engineer</strong> me dedico a crear
        productos digitales que mejoren la vida de las personas
      </p>
      <div className="flex gap-4 mb-12">
        <img src={twitter} alt="Twitter icon" />
        <img src={linkedin} alt="Linkedin icon" />
        <img src={github} alt="GitHub icon" />
      </div>
      <a href="#work">
        <div class="mousey">
          <div class="scroller"></div>
        </div>
      </a>
    </section>
  )
}
