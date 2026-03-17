const steps = [
  {
    num: '01',
    title: 'Build',
    desc: 'Describe your agent to the AI co-pilot or design the flow visually. Choose a voice, configure post-call analysis, connect your calendar.',
  },
  {
    num: '02',
    title: 'Deploy',
    desc: 'Assign a phone number, set business hours, and go live with one click. Test with an in-browser call first.',
  },
  {
    num: '03',
    title: 'Scale',
    desc: 'Launch outbound campaigns, manage contacts, track analytics, and upgrade as you grow. Free to start, pro plans for teams.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section reveal">
      <div className="section__head">
        <p className="section__eyebrow">How It Works</p>
        <h2>Up and running in minutes.</h2>
      </div>

      <div className="steps">
        {steps.map((s) => (
          <article className="step" key={s.num}>
            <div className="step__num">Step {s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
