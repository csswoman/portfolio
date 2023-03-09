import figma from '../../assets/icons/figma.svg'
import notion from '../../assets/icons/notion.svg'
import git from '../../assets/icons/git.svg'

export function Tools() {
    return (
        <ul className="flex gap-4 flex-wrap">
            <li className="tooltip-toggle" aria-label="Figma" tabIndex="0">
                <img src={figma} alt="figma" />
            </li>
            <li className="tooltip-toggle" aria-label="Notion" tabIndex="0">
                <img src={notion} alt="notion" />
            </li>
            <li className="tooltip-toggle" aria-label="Git" tabIndex="0">
                <img src={git} alt="git" />
            </li>
        </ul>
    )
}