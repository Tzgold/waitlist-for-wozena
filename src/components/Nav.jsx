export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <a href="/" className="nav__logo">
          <span className="nav__logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="7" fill="rgba(255,255,255,0.06)" />
              <path
                d="M14 6L7 10v8l7 4 7-4v-8L14 6z"
                stroke="rgba(255,255,255,0.85)"
                strokeWidth="1.4"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M7 10l7 4 7-4M14 14v8"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </span>
          Wozena
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
