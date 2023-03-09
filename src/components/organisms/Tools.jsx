import figma from '../../assets/icons/figma.svg'
import notion from '../../assets/icons/notion.svg'
import git from '../../assets/icons/git.svg'

export function Tools() {
    return (
        <ul className="flex gap-4 flex-wrap">
            <li>
                <img src={figma} alt="figma" />
            </li>
            <li>
                <img src={notion} alt="notion" />
            </li>
            <li>
                <img src={git} alt="git" />
            </li>
        </ul>
    )
}