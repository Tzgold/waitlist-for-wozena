const tags = [
  { label: '🦷 Dental & medical clinics' },
  { label: '🏠 Real estate agencies' },
  { label: '💻 SaaS customer support' },
  { label: '🍽 Restaurants & reservations' },
  { label: '🚗 Automotive dealerships' },
  { label: '🎓 Education & enrollment' },
]

export default function BuiltFor() {
  return (
    <section className="section reveal">
      <div className="section__head">
        <p className="section__eyebrow">Built For</p>
        <h2>Any business that picks up a phone.</h2>
      </div>

      <div className="use-cases">
        {tags.map((t) => (
          <span className="use-case-tag" key={t.label}>{t.label}</span>
        ))}
        <span className="use-case-tag wide">
          …and any business that takes or makes phone calls
        </span>
      </div>
    </section>
  )
}
