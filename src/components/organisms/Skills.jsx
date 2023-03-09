import html from '../../assets/icons/html.svg'
import css from '../../assets/icons/css.svg'
import javascript from '../../assets/icons/javascript.svg'
import tailwind from '../../assets/icons/tailwind.svg'

export function Skills() {
    return (
        <ul className="flex gap-4 flex-wrap items-center">
            <li className="tooltip-toggle" aria-label="HTML" tabIndex="0">
                <img src={html} alt="HTML" height={32} width={29} />
            </li>
            <li className="tooltip-toggle" aria-label="CSS" tabIndex="0">
                <img src={css} alt="css" height={32} width={27} />
            </li>
            <li className="tooltip-toggle" aria-label="JavaScript" tabIndex="0">
                <img src={javascript} alt="javascript" height={38} width={38} />
            </li>
            <li className="tooltip-toggle" aria-label="Tailwind" tabIndex="0">
                <img src={tailwind} alt="tailwind" height={38} width={42} />
            </li>
        </ul>
    )
}