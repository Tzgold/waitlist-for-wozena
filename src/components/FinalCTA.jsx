import WaitlistForm from './WaitlistForm'

export default function FinalCTA() {
  return (
    <section className="final-cta reveal">
      <div className="final-cta__radial" aria-hidden="true" />

      <div className="final-cta__inner">
        <p className="section__eyebrow">Get Early Access</p>
        <h2>Be the first to launch your AI voice agent.</h2>
        <p className="final-cta__sub">
          Join 200+ companies already on the waitlist. No credit card required.
        </p>
        <WaitlistForm inputId="footer-email" />
      </div>
    </section>
  )
}
