import WaitlistForm from './WaitlistForm'
import FluidBackground from './FluidBackground'
import { SiCaldotcom, SiCalendly, SiStripe, SiTwilio } from 'react-icons/si'

const avatars = [
  'https://i.pravatar.cc/80?img=12',
  'https://i.pravatar.cc/80?img=18',
  'https://i.pravatar.cc/80?img=25',
  'https://i.pravatar.cc/80?img=32',
  'https://i.pravatar.cc/80?img=47',
]

export default function Hero() {
  return (
    <section className="hero">
      {/* ── 3D FLUID DARK BACKGROUND */}
      <FluidBackground />

      {/* ── CORNER SPOTLIGHT BEAM (top-right → lower-left, like the reference) */}
      <div className="hero__beams" aria-hidden="true">
        <div className="beam-cone" />
        <div className="beam-cone-halo" />
        <div className="beam-edge-glow" />
      </div>

      {/* ── HERO CONTENT */}
      <div className="hero__inner reveal">
        <div className="hero__badge">
          <span className="badge__pulse" />
          Early Access — Limited Spots
        </div>

        <h1>
          Your AI Voice Agent<br />
          Platform — From Build to Scale
        </h1>

        <p className="hero__sub">
          Build intelligent voice agents, assign phone numbers, launch inbound
          and outbound campaigns, connect your tools — all from one platform.{' '}
          <em>No code required.</em>
        </p>

        <WaitlistForm inputId="hero-email" />

        {/* Social proof with person avatar icons */}
        <div className="hero__proof">
          <div className="avatars" aria-label="200+ companies on the waitlist">
            {avatars.map((src) => (
              <div key={src} className="avatar">
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
          <span className="hero__proof-text">Join 200+ companies on the waitlist</span>
        </div>
      </div>

      {/* ── TRUST BAR */}
      <div className="trust-bar reveal">
        <p className="trust-bar__label">Trusted by businesses worldwide</p>
        <div className="trust-bar__logos trust-bar__logos--icons">
          <span className="logo-chip" aria-label="Retell AI">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="2" y="10" width="3" height="4" rx="1.5" fill="#a78bfa" />
              <rect x="7" y="7" width="3" height="10" rx="1.5" fill="#c4b5fd" />
              <rect x="12" y="4" width="3" height="16" rx="1.5" fill="#ddd6fe" />
              <rect x="17" y="7" width="3" height="10" rx="1.5" fill="#c4b5fd" />
            </svg>
          </span>
          <span className="logo-chip" aria-label="Cal.com"><SiCaldotcom size={17} /></span>
          <span className="logo-chip" aria-label="Calendly"><SiCalendly size={17} color="#006bff" /></span>
          <span className="logo-chip" aria-label="Stripe"><SiStripe size={17} color="#635bff" /></span>
          <span className="logo-chip" aria-label="Twilio"><SiTwilio size={17} color="#f22f46" /></span>
        </div>
      </div>
    </section>
  )
}
