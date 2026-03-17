export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <a href="/" className="footer__logo">
        <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
          <path d="M14 6L7 10v8l7 4 7-4v-8L14 6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
          <path d="M7 10l7 4 7-4M14 14v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
        </svg>
        Wozena
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
