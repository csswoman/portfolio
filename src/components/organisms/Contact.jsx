import { Social } from '../molecules/Social'
import contactImage from '../../assets/images/3.jpg'

export function Contact() {
    return (
        <section className="wrapper mx-auto flex flex-col items-center mb-4" id="contact">
            <h2 className="title text-4xl mb-4 md:mb-10 text-center">¡Trabajemos juntos!</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className='mx-auto'>
                    <img src={contactImage} alt="Contact image" width={200} />
                </div>
                <article className="contact text-center px-6 py-4 rounded-lg">
                    <p className="mb-6">
                        ¿Tienes alguna idea de proyecto? ¿Necesitas ayuda con diseño UI o maquetación? o ¿Simplemente quieres conversar?
                        Estaré feliz de contestar.
                    </p>
                    <a
                        href="mailto:dev.csswoman@gmail.com"
                        className="underline text-purple-300"
                    >dev.csswoman@gmail.com</a>
                </article>
            </div>
            <Social />
        </section>
    )
}