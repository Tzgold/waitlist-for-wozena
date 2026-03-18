import WozenaLogo from '../assets/wozena-logo.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <a href="/" className="footer__logo">
        <span className="footer__logo-mark">
          <img src={WozenaLogo} alt="Wozena logo mark" />
        </span>
        <span>Wozena</span>
      </a>

      <p className="footer__copy">&copy; {year} Wozena Inc. All rights reserved.</p>

      <nav className="footer__links" aria-label="Footer links">
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </nav>
    </footer>
  )
}
