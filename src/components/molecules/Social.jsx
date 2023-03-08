import twitter from '../../assets/icons/twitter.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import github from '../../assets/icons/github.svg'

export function Social() {
    return (
        <div className="flex gap-4 mb-12">
            <a
                href="https://twitter.com/csswoman"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ir a Twitter"
                title="Ir a Twitter"
            >
                <img
                    src={twitter}
                    alt="Twitter icon"
                    className="h-7 w-7 hover:opacity-50"
                />
            </a>
            <a
                href="https://www.linkedin.com/in/csswoman/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ir a Linkedin"
                title="Ir a Linkedin"
            >
                <img
                    src={linkedin}
                    alt="Linkedin icon"
                    className="h-7 w-7 hover:opacity-50"
                />
            </a>
            <a
                href="https://www.github.com/csswoman"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ir a GitHub"
                title="Ir a GitHub"
            >
                <img
                    src={github}
                    alt="GitHub icon"
                    className="h-7 w-7 hover:opacity-50"
                />
            </a>
        </div>
    )
}