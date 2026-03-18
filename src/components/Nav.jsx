import WozenaLogo from '../assets/wozena-logo.png'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <a href="/" className="nav__logo">
          <span className="nav__logo-mark">
            <img src={WozenaLogo} alt="Wozena logo mark" />
          </span>
          <span className="nav__logo-text">Wozena</span>
        </a>

        <div className="nav__links">
          <a href="#capabilities">Capabilities</a>
          <a href="#how">How it works</a>
          <a href="#integrations">Integrations</a>
          <a href="#pricing">Pricing</a>
        </div>

        <a className="nav__cta" href="#footer-email">Get Early Access</a>
      </div>
    </nav>
  )
}
