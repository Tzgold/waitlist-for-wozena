const tiers = [
  {
    name: 'Free',
    price: '$0',
    cycle: '/ month forever',
    features: [
      '1 active agent',
      '500 call minutes / mo',
      '1 phone number',
      'AI builder + deploy',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$49',
    cycle: '/ month',
    badge: 'Most Popular',
    featured: true,
    features: [
      'Unlimited agents',
      '10,000 call minutes / mo',
      '10 phone numbers',
      'Outbound campaigns',
      'Full analytics dashboard',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cycle: '\u00a0',
    features: [
      'Unlimited everything',
      'Dedicated infrastructure',
      'SLA guarantee',
      'White-label option',
      'Dedicated success manager',
    ],
  },
]

export default function Pricing() {
  return (
    <section className="section reveal">
      <div className="section__head" style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 3rem' }}>
        <p className="section__eyebrow">Pricing</p>
        <h2>Free to start. Pro from $49/mo.</h2>
        <p className="section__sub" style={{ margin: '0 auto' }}>
          All plans include the AI builder, phone numbers, campaigns, and integrations.
          Enterprise pricing available on request.
        </p>
      </div>

      <div className="pricing__tiers">
        {tiers.map((t) => (
          <div className={`tier${t.featured ? ' tier--featured' : ''}`} key={t.name}>
            {t.badge && <div className="tier__badge">{t.badge}</div>}
            <div className="tier__name">{t.name}</div>
            <div className="tier__price">{t.price}</div>
            <div className="tier__cycle">{t.cycle}</div>
            <ul className="tier__features">
              {t.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
