
import aboutImage from '../../assets/images/4.jpg'

export function AboutMe() {
    return (
        <>
            <p className="mb-12 text-xl text-center">La compañera de trabajo más creativa 💻</p>
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div>
                    <img
                        src={aboutImage}
                        alt="About img"
                        className="about-img"
                    />
                </div>
                <div className="flex flex-col gap-4 text-lg">
                    <p>Soy UX Engineer, me apasiona el diseño y el desarrollo de interfaces, cuento con 2 años de experiencia profesional.
                    </p>
                    <p>Mi objetivo es crear soluciones que mejoren la experiencia del usuario tanto en su atractivo, funcionalidad,
                        simplicidad y facilidad de uso.
                    </p>
                    <p>Me gusta estar en constante aprendizaje, compartir conocimientos y jugar videojuegos en mi tiempo libre.</p>
                    <p>Soy originaria de Venezuela y vivo hace casi 5 años en Perú ☀️</p>
                </div>
            </div>
        </>
    )
}