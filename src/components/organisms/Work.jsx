import coffee from '../../assets/images/projects/coffee.jpg'
import travels from '../../assets/images/projects/travels.jpg'
import celeste from '../../assets/images/projects/celeste.jpg'

export function Work() {
    return (
        <section className="wrapper mx-auto flex flex-col items-center" id="work">
            <h2 className="title text-4xl mb-4">Mi trabajo</h2>
            <p className="mb-12 text-xl text-center">Una selección de los mejores proyectos que he realizado</p>
            <div className="grid sm:grid-cols-2 gap-8">
                <a
                    href="https://csswoman.github.io/cafe-bistro/"
                    target={"_blank"}
                    className="p-4 rounded-xl bg-transparent hover:bg-white hover:bg-opacity-10"
                >
                    <article className="">
                        <img
                            src={coffee}
                            alt="Café Bistro project"
                            className="rounded-xl mb-4 aspect-[16/9]"
                        />
                        <p className="font-bold text-lg">Café Bistro</p>
                        <p>Creado con HTML & CSS</p>
                    </article>
                </a>
                <a
                    href="https://csswoman.github.io/travel-and-tours/"
                    target={"_blank"}
                    className="p-4 rounded-xl bg-transparent hover:bg-white hover:bg-opacity-10"
                >
                    <article>
                        <img
                            src={travels}
                            alt="Travels and Tours project"
                            className="rounded-xl mb-4 aspect-[16/9]"
                        />
                        <p className="font-bold text-lg">Travels and Tours</p>
                        <p>Creado con HTML & CSS</p>
                    </article>
                </a>
                <a
                    href="https://celeste-art-shop.vercel.app/"
                    target={"_blank"}
                    className="p-4 rounded-xl bg-transparent hover:bg-white hover:bg-opacity-10"
                >
                    <article>
                        <img
                            src={celeste}
                            alt="Celeste project"
                            className="rounded-xl mb-4 aspect-[16/9]"
                        />
                        <p className="font-bold text-lg">Celeste Art Shop</p>
                        <p>Creado con Bootstrap</p>
                    </article>
                </a>
            </div >
        </section >
    )
}