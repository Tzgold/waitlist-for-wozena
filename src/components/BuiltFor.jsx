const industries = [
  {
    icon: '🦷',
    title: 'Dental & Medical Clinics',
    copy: '24/7 appointment handling, insurance pre-qualify, and no missed calls.',
  },
  {
    icon: '🏠',
    title: 'Real Estate Agencies',
    copy: 'Capture leads instantly, route by location, and schedule viewings in-call.',
  },
  {
    icon: '💻',
    title: 'SaaS Support Teams',
    copy: 'Resolve routine requests, triage urgent issues, and sync with your tools.',
  },
  {
    icon: '🍽',
    title: 'Restaurants & Reservations',
    copy: 'Take bookings, confirm slots, and answer high-volume peak-hour calls.',
  },
  {
    icon: '🚗',
    title: 'Automotive Dealerships',
    copy: 'Book test drives, qualify buyers, and automate follow-up campaigns.',
  },
  {
    icon: '🎓',
    title: 'Education & Enrollment',
    copy: 'Guide applicants, answer FAQs, and keep every prospect moving forward.',
  },
]

export default function BuiltFor() {
  return (
    <section className="section reveal built-for">
      <div className="section__head">
        <p className="section__eyebrow">Built For</p>
        <h2>Any business that picks up a phone.</h2>
        <p className="section__sub">
          Purpose-built workflows for teams that handle inbound or outbound calls at scale.
        </p>
      </div>

      <div className="built-grid">
        {industries.map((item) => (
          <article className="built-card" key={item.title}>
            <div className="built-card__icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>

      <div className="built-note">
        <span>...and any business that takes or makes phone calls</span>
      </div>
    </section>
  )
}
