import WaitlistForm from './WaitlistForm'
import FluidBackground from './FluidBackground'

const avatars = [
  'https://i.pravatar.cc/80?img=12',
  'https://i.pravatar.cc/80?img=18',
  'https://i.pravatar.cc/80?img=25',
  'https://i.pravatar.cc/80?img=32',
  'https://i.pravatar.cc/80?img=47',
]

const heroLogos = [
  { name: 'Retell AI', logo: 'https://www.retellai.com/favicon.ico', bg: '#ffffff' },
  { name: 'Cal.com', logo: 'https://cdn.simpleicons.org/caldotcom/ffffff', bg: '#111111' },
  { name: 'Calendly', logo: 'https://cdn.simpleicons.org/calendly/006bff', bg: '#ffffff' },
  { name: 'Stripe', logo: 'https://cdn.simpleicons.org/stripe/635bff', bg: '#ffffff' },
  { name: 'Twilio', logo: 'https://cdn.simpleicons.org/twilio/f22f46', bg: '#ffffff' },
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
          {heroLogos.map((item) => (
            <span className="logo-chip" aria-label={item.name} key={item.name} style={{ background: item.bg }}>
              <img src={item.logo} alt={`${item.name} logo`} loading="lazy" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
