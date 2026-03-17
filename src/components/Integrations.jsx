const integrations = [
  {
    name: 'Retell AI',
    desc: 'Voice AI Engine',
    logo: 'https://www.retellai.com/favicon.ico',
    bg: '#ffffff',
  },
  {
    name: 'Cal.com',
    desc: 'Scheduling',
    logo: 'https://cdn.simpleicons.org/caldotcom/ffffff',
    bg: '#111111',
  },
  {
    name: 'Calendly',
    desc: 'Calendar Booking',
    logo: 'https://cdn.simpleicons.org/calendly/006bff',
    bg: '#ffffff',
  },
  {
    name: 'Stripe',
    desc: 'Payments',
    logo: 'https://cdn.simpleicons.org/stripe/635bff',
    bg: '#ffffff',
  },
  {
    name: 'Twilio',
    desc: 'Telephony',
    logo: 'https://cdn.simpleicons.org/twilio/f22f46',
    bg: '#ffffff',
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
        {integrations.map(({ name, desc, logo, bg }) => (
          <div className="int-card" key={name}>
            <div className="int-card__logo" style={{ background: bg }}>
              <img src={logo} alt={`${name} logo`} loading="lazy" />
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
