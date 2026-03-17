const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI-Powered Agent Builder',
    desc: 'Design conversation flows with an AI co-pilot or visual drag-and-drop canvas. 11 node types, 540+ voices, instant validation.',
    mock: (
      <div className="pillar__mock">
        <span className="mock-node">Greet</span>
        <span className="mock-edge" />
        <span className="mock-node">Qualify</span>
        <span className="mock-edge" />
        <span className="mock-node">Book</span>
      </div>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'One-Click Deployment',
    desc: 'Deploy production-ready voice agents in seconds. Test in-browser before going live with zero downtime.',
    mock: (
      <div className="pillar__mock mock-deploy">
        <div className="mock-status">
          <span className="mock-dot-ok" />
          Agent live — 0ms latency
        </div>
        <div className="mock-bar"><div className="mock-bar-fill" /></div>
      </div>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Phone Number Management',
    desc: 'Provision numbers, configure inbound routing with business hours, after-hours handling, and voicemail — per number.',
    mock: (
      <div className="pillar__mock mock-phone">
        <span className="mock-number">+1 (555) 012-3456</span>
        <div className="mock-tags">
          <span className="mock-tag">Business Hours</span>
          <span className="mock-tag">Voicemail</span>
        </div>
      </div>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: 'Outbound Campaigns',
    desc: 'Upload contacts, launch outbound calling campaigns, and monitor results in real time. Start, pause, resume at will.',
    mock: (
      <div className="pillar__mock mock-campaigns">
        <div className="mock-camp-row">
          <span className="mock-dot-run" />
          <span>Campaign A — Running</span>
          <span className="mock-camp-count">1.2k calls</span>
        </div>
        <div className="mock-camp-row">
          <span className="mock-dot-pause" />
          <span>Campaign B — Paused</span>
          <span className="mock-camp-count">340 calls</span>
        </div>
      </div>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Contact & Call Management',
    desc: 'Import contacts via CSV, track every call with full history and per-agent analytics — duration, success rates, direction breakdown.',
    mock: (
      <div className="pillar__mock mock-stats">
        <div className="mock-stat"><span>Calls</span><strong>4,821</strong></div>
        <div className="mock-stat"><span>Avg. Duration</span><strong>2m 14s</strong></div>
        <div className="mock-stat"><span>Success</span><strong>94.7%</strong></div>
      </div>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: 'Integrations That Work',
    desc: 'Connect Cal.com, Calendly, Stripe, and more. Agents can check availability and book appointments mid-call. Webhooks for everything else.',
    mock: (
      <div className="pillar__mock mock-ints">
        <span className="mock-int-chip">Cal.com</span>
        <span className="mock-int-chip">Calendly</span>
        <span className="mock-int-chip">Stripe</span>
        <span className="mock-int-chip">+ Webhooks</span>
      </div>
    ),
  },
]

export default function Capabilities() {
  return (
    <section className="section reveal">
      <div className="section__head">
        <p className="section__eyebrow">Platform Capabilities</p>
        <h2>One platform. Everything you need.</h2>
        <p className="section__sub">
          Build, launch, and operate production AI voice agents — no engineering team required.
        </p>
      </div>

      <div className="pillars">
        {pillars.map((p) => (
          <article className="pillar" key={p.title}>
            <div className="pillar__icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            {p.mock}
          </article>
        ))}
      </div>
    </section>
  )
}
