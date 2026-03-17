import { SiCaldotcom, SiCalendly, SiStripe, SiTwilio } from 'react-icons/si'

function RetellMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="10" width="3" height="4" rx="1.5" fill="#a78bfa" />
      <rect x="7" y="7" width="3" height="10" rx="1.5" fill="#c4b5fd" />
      <rect x="12" y="4" width="3" height="16" rx="1.5" fill="#ddd6fe" />
      <rect x="17" y="7" width="3" height="10" rx="1.5" fill="#c4b5fd" />
    </svg>
  )
}

const integrations = [
  {
    name: 'Retell AI',
    desc: 'Voice AI Engine',
    icon: <RetellMark />,
  },
  {
    name: 'Cal.com',
    desc: 'Scheduling',
    icon: <SiCaldotcom size={20} color="#fff" />,
  },
  {
    name: 'Calendly',
    desc: 'Calendar Booking',
    icon: <SiCalendly size={20} color="#006bff" />,
  },
  {
    name: 'Stripe',
    desc: 'Payments',
    icon: <SiStripe size={20} color="#635bff" />,
  },
  {
    name: 'Twilio',
    desc: 'Telephony',
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
        {integrations.map(({ name, desc, icon }) => (
          <div className="int-card" key={name}>
            <div className="int-card__logo">
              {icon}
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
