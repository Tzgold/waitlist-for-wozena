import { SiCaldotcom, SiCalendly, SiStripe, SiTwilio } from 'react-icons/si'
import RetellLogo from '../assets/retell-logo-black.svg'

const integrations = [
  {
    name: 'Retell AI',
    desc: 'Voice AI Engine',
    bg: '#ffffff',
    logo: RetellLogo,
  },
  {
    name: 'Cal.com',
    desc: 'Scheduling',
    bg: '#101010',
    icon: <SiCaldotcom size={20} color="#fff" />,
  },
  {
    name: 'Calendly',
    desc: 'Calendar Booking',
    bg: '#ffffff',
    icon: <SiCalendly size={20} color="#006bff" />,
  },
  {
    name: 'Stripe',
    desc: 'Payments',
    bg: '#ffffff',
    icon: <SiStripe size={20} color="#635bff" />,
  },
  {
    name: 'Twilio',
    desc: 'Telephony',
    bg: '#ffffff',
    icon: <SiTwilio size={20} color="#f22f46" />,
  },
]

export default function Integrations() {
  return (
    <section className="section reveal">
      <div className="section__head">
        <p className="section__eyebrow">Integrations</p>
        <h2>Works with your stack.</h2>
        <p className="section__sub">
          Native connections to the tools your team already relies on.
          More integrations added every sprint.
        </p>
      </div>

      <div className="integrations-grid">
        {integrations.map(({ name, desc, icon, logo, bg }) => (
          <div className="int-card" key={name}>
            <div className="int-card__logo" style={{ background: bg }}>
              {logo ? <img src={logo} alt={`${name} logo`} loading="lazy" /> : icon}
            </div>
            <div>
              <div className="int-card__name">{name}</div>
              <div className="int-card__desc">{desc}</div>
            </div>
          </div>
        ))}
        <div className="int-card int-card--more">
          <span>+ More integrations coming soon</span>
        </div>
      </div>
    </section>
  )
}
