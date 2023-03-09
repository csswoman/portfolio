import { Educacion } from './Education'
import { Tools } from './Tools'
import { Skills } from './Skills'
import { WorkExperience } from './WorkExperience'
import { Languages } from '../molecules/Languages'
import { AboutMe } from './AboutMe'

export function About() {
    return (
        <section className="wrapper mx-auto flex flex-col items-center" id="about">
            <h2 className="title text-4xl mb-4">Acerca de mi</h2>
            <AboutMe />
            <div className="grid md:grid-cols-2 gap-8">
                <article>
                    <h3 className="title text-3xl mb-4">Experiencia</h3>
                    <WorkExperience />
                </article>
                <div className="flex flex-col gap-8">
                    <article>
                        <h3 className="title text-3xl mb-4">Educación</h3>
                        <Educacion />
                    </article>
                    <article>
                        <h3 className="title text-3xl mb-4">Habilidades</h3>
                        <Skills />
                    </article>
                    <article>
                        <h3 className="title text-3xl mb-4">Herramientas</h3>
                        <Tools />
                    </article>
                    <article>
                        <h3 className="title text-3xl mb-4">Idiomas</h3>
                        <Languages />
                    </article>
                </div>
            </div>
        </section>
    )
}