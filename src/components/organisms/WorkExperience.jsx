export function WorkExperience() {
    return (
        <>
            <ul className="text-[15px] grid gap-6">
                <li>
                    <div className="work-exp pl-4 gap-1 grid relative">
                        <p className="text-purple-300">Diseñadora web</p>
                        <div className="flex gap-x-2 items-center flex-wrap">
                            <p className="font-bold">Uniqo agency</p>
                            <p className="text-sm">Nov 2022 - Feb 2023 (4 meses)</p>
                        </div>
                        <p>
                            Entre las labores que realicé fueron: editar plantillas de WordPress, integración de plugins maquetación de componentes en HubSpot.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="work-exp pl-4 gap-1 grid relative">
                        <p className="text-purple-300">Web UI Developer</p>
                        <div className="flex gap-x-2 items-center flex-wrap">
                            <p className="font-bold">Denomades</p>
                            <p className="text-sm">May 2021 - Ago 2022 (1 año y 4 meses)</p>
                        </div>
                        <p>
                            Entre las labores que realicé fueron: Desarrollar y corregir funcionalidades en las diferentes plataformas de la empresa, Participar en procesos de migración de las diferentes plataformas de la empresa, Mejorar la UX del website con puntuación de 100 en accesibilidad en Lighthouse, Diseñar mockups en papel para determinar la UX/UI, Agregar los nuevos UI componentes a la guía de estilos del proyecto (ej. botones, inputs, menús, etc.), Dar soporte tecnológico al resto de áreas de la empresa.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="work-exp pl-4 gap-1 grid relative">
                        <p className="text-purple-300">Diseñadora web</p>
                        <div className="flex gap-x-2 items-center flex-wrap">
                            <p className="font-bold">Freelancer</p>
                            <p className="text-sm">Dic 2021 - Mar 2022 (4 meses)</p>
                        </div>
                        <p>
                            Desarrollo de sitios web con React para clientes extranjeros.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="work-exp pl-4 gap-1 grid relative">
                        <p className="text-purple-300">Maquetadora web</p>
                        <div className="flex gap-x-2 items-center flex-wrap">
                            <p className="font-bold">EDteam</p>
                            <p className="text-sm">Nov 2020 - Ene 2021 (3 meses)</p>
                        </div>
                        <p>
                            Maquetación de componentes, detectar errores en la maquetación y corregirlos.
                        </p>
                    </div>
                </li>
            </ul>
            <div className="pl-16 pt-8 relative d-cv">
                <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-sm py-2 px-3 text-purple-400 border rounded-lg border-purple-400 hover:bg-purple-400 hover:text-white"
                >
                    Descarga mi CV
                </a>
            </div>
        </>
    )
}