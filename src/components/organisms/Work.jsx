import image from '../../assets/images/placeholder.jpg'

export function Work() {
    return (
        <section className="wrapper mx-auto flex flex-col items-center" id="work">
            <h2 className="title text-4xl mb-4">Mi trabajo</h2>
            <p className="mb-12 text-xl text-center">Una selección de los mejores proyectos que he realizado</p>
            <div className="grid sm:grid-cols-2 gap-8">
                <a href="https://csswoman.github.io/cafe-bistro/" target={"_blank"}>
                    <article>
                        <img
                            src={image}
                            alt="Café Bistro project"
                            className='rounded-2xl work-img mb-4'
                        />
                        <p className='font-bold text-lg'>Café Bistro</p>
                        <p>Creado con HTML & CSS</p>
                    </article>
                </a>
                <a href="https://csswoman.github.io/travel-and-tours/" target={"_blank"}>
                    <article>
                        <img
                            src={image}
                            alt="Travels and Tours project"
                            className='rounded-2xl work-img mb-4'
                        />
                        <p className='font-bold text-lg'>Travels and Tours</p>
                        <p>Creado con HTML & CSS</p>
                    </article>
                </a>
            </div>
        </section>
    )
}