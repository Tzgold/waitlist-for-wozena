const plans = [
  {
    name: 'Pre-seed',
    price: '$49',
    subtitle: 'Perfect for founders taking their first big steps toward growth.',
    trial: '14 days free trial',
    features: [
      'Core tools for MVP launch',
      'Milestone tracking',
      'Access to founder community',
      'Launch-ready templates',
      'Investor outreach kit',
    ],
    featured: true,
  },
  {
    name: 'Series B',
    price: '$199',
    subtitle: 'Designed for startups ready to scale fast and reach new heights.',
    trial: '14 days free trial',
    features: [
      'Full access to all tools',
      'Custom workflows',
      'Customer journey reports',
      'High-conversion templates',
      'Quarterly strategy calls',
    ],
  },
]

export default function Pricing() {
  return (
    <section className="section reveal">
      <div className="section__head pricing__head">
        <p className="section__eyebrow">Pricing</p>
        <h2>Plans That Scale With You</h2>
        <p className="section__sub pricing__subcopy">
          Choose the plan that fits your needs and budget.
        </p>
      </div>

      <div className="pricing__tiers">
        {plans.map((plan) => (
          <article className={`tier${plan.featured ? ' tier--featured' : ''}`} key={plan.name}>
            <div className="tier__name">{plan.name}</div>
            <div className="tier__price">
              {plan.price}
              <span>/month</span>
            </div>
            <p className="tier__desc">{plan.subtitle}</p>
            <button className="tier__button" type="button">Get started for free</button>
            <ul className="tier__features">
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <p className="tier__trial">{plan.trial}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
