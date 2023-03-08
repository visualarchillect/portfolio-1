import Link from 'components/Link'
import './index.css'

const Footer = () => (
    <footer className="footer">
        <span className="footer__date">
            {`© ${new Date().getFullYear()} Padgett Ong | `}
        </span>
        <Link secondary className="footer__link" href="/humans.txt" target="_self">
            ⏩ Special thanks to ⏪
        </Link>
    </footer>
)

export default Footer
