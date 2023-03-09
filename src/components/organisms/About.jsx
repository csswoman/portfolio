import aboutImage from '../../assets/images/4.jpg'
import { WorkExperience } from './WorkExperience'

export function About() {
    return (
        <section className="wrapper mx-auto flex flex-col items-center" id="about">
            <h2 className="title text-4xl mb-4">Acerca de mi</h2>
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
            <div className="grid md:grid-cols-2 gap-8">
                <article>
                    <h3 className="title text-3xl mb-4">Experiencia</h3>
                    <WorkExperience />
                </article>
                <div>
                    <article>
                        <h3 className="title text-3xl mb-4">Educación</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit tellus, hendrerit in pellentesque ut, dignissim quis sapien. Nunc ex turpis, placerat et ipsum vitae, blandit facilisis tellus. Praesent ipsum ipsum, congue vitae nisl in, porta luctus leo. Nulla facilisi. Nullam tristique ligula magna, sit amet scelerisque nisl vulputate non.
                        </p>
                    </article>
                    <article>
                        <h3 className="title text-3xl mb-4">Habilidades</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit tellus, hendrerit in pellentesque ut, dignissim quis sapien. Nunc ex turpis, placerat et ipsum vitae, blandit facilisis tellus. Praesent ipsum ipsum, congue vitae nisl in, porta luctus leo. Nulla facilisi. Nullam tristique ligula magna, sit amet scelerisque nisl vulputate non.
                        </p>
                    </article>
                    <h3 className="title text-3xl mb-8">Herramientas</h3>
                    <h3 className="title text-3xl mb-8">Idiomas</h3>
                </div>
            </div>
        </section>
    )
}