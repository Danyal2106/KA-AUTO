import { SERVICES } from "../content.js";

const ICONS = [
  "M4 16h16M14 8l6 8H4l6-8z",
  "M7 7h10v10H7zM4 12h16",
  "M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
  "M12 4l7 3v5c0 4.2-2.8 7.2-7 8.6C7.8 19.2 5 16.2 5 12V7l7-3z",
];

export default function Why() {
  return (
    <section className="section light" id="tjenester">
      <div className="wrap">
        <header className="section-intro">
          <p className="eyebrow">Tjenester</p>
          <h2>Hvorfor handle hos KA AUTO</h2>
          <p>
            KA AUTO i Sandvika hjelper deg med kjøp, salg og formidling. Vi
            jobber med ærlighet og fagkunnskap, og finner løsningen som passer —
            enten du skal kjøpe, selge eller bytte inn.
          </p>
        </header>
        <div className="why-grid">
          {SERVICES.map((service, index) => (
            <article className="why-card" key={service.title}>
              <span className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d={ICONS[index]} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
