import WaitlistForm from './WaitlistForm'
import FluidBackground from './FluidBackground'
import { SiCaldotcom, SiCalendly, SiStripe, SiTwilio } from 'react-icons/si'
import RetellLogo from '../assets/retell-logo-black.svg'

const avatars = [
  'https://i.pravatar.cc/80?img=12',
  'https://i.pravatar.cc/80?img=18',
  'https://i.pravatar.cc/80?img=25',
  'https://i.pravatar.cc/80?img=32',
  'https://i.pravatar.cc/80?img=47',
]

const heroLogos = [
  { name: 'Retell AI', bg: '#ffffff', logo: RetellLogo },
  { name: 'Cal.com', bg: '#101010', icon: <SiCaldotcom size={16} color="#ffffff" /> },
  { name: 'Calendly', bg: '#ffffff', icon: <SiCalendly size={16} color="#006bff" /> },
  { name: 'Stripe', bg: '#ffffff', icon: <SiStripe size={16} color="#635bff" /> },
  { name: 'Twilio', bg: '#ffffff', icon: <SiTwilio size={16} color="#f22f46" /> },
]

// Manually tuned to match the reference waveform silhouette:
// clustered peaks, short gaps, and mirrored symmetry.
const waveHalf = [
  8, 16, 30, 48, 88, 152, 96, 54, 26, 14,
  10, 28, 52, 74, 96, 128, 108, 84, 54, 30,
]
const centerBars = [18, 34, 58, 96, 142, 104, 66]
const waveHeights = [...waveHalf, ...centerBars, ...[...waveHalf].reverse()]

export default function Hero() {
  return (
    <section className="hero">
      {/* ── 3D FLUID DARK BACKGROUND */}
      <FluidBackground />

      {/* ── CORNER SPOTLIGHT BEAM (top-right → lower-left, like the reference) */}
      <div className="hero__beams" aria-hidden="true">
        <div className="beam-cone" />
        <div className="beam-cone-halo" />
        <div className="beam-corner-bloom" />
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
              {item.logo ? <img src={item.logo} alt={`${item.name} logo`} loading="lazy" /> : item.icon}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-wave" aria-hidden="true">
        {waveHeights.map((h, i) => (
          <span
            key={`${h}-${i}`}
            className={h <= 8 ? 'is-dot' : ''}
            style={{ height: `${h}px`, '--i': i }}
          />
        ))}
      </div>
    </section>
  )
}
