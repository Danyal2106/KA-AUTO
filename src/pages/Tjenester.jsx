import { useState } from "react";
import { Link } from "react-router-dom";
import { asset } from "../content.js";

const SERVICES = [
  {
    tab: "Formidlingssalg",
    title: "Formidlingssalg",
    text: "Vi selger bilen din på vegne av deg. Du beholder eierskapet frem til handelen er gjennomført, mens vi håndterer annonsering, visning, kontrakt og oppgjør. Trygt, enkelt og effektivt.",
    card: "Vi selger bilen din på vegne av deg, fra annonsering til oppgjør.",
    photo: asset("images/hero-rs7-front.jpg"),
    alt: "Sort Audi RS7 forfra",
    icon: "tag",
  },
  {
    tab: "Innbytte",
    title: "Innbytte",
    text: "Rask og rettferdig vurdering som kan brukes som deloppgjør når du kjøper din neste bil hos oss.",
    card: "Rask og rettferdig vurdering som deloppgjør når du kjøper din neste bil hos oss.",
    photo: asset("images/hero-m5-black-front.jpg"),
    alt: "Sort BMW M5 forfra",
    icon: "swap",
    link: true,
  },
  {
    tab: "Oppkjøp av bil",
    title: "Oppkjøp av bil",
    text: "Gratis og uforpliktende vurdering. Vi kjøper også direkte. Raskt oppgjør, ingen skjulte kostnader.",
    card: "Gratis og uforpliktende vurdering. Vi kjøper også direkte, med raskt oppgjør.",
    photo: asset("images/hero-panamera-front.jpg"),
    alt: "Grå Porsche Panamera forfra",
    icon: "check",
  },
  {
    tab: "Garanti",
    title: "Garanti ved kjøp",
    text: "Gjennom partnere tilbyr vi mulighet for garanti ved kjøp, slik at du kan kjøre av gårde med større trygghet.",
    card: "Gjennom partnere tilbyr vi mulighet for garanti ved kjøp.",
    photo: asset("images/hero-amg-gt-front.jpg"),
    alt: "Hvit Mercedes-AMG GT forfra",
    icon: "shield",
  },
];

export default function Tjenester() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];

  return (
    <div className="services-page">
      <section className="svc-banner">
        <img src={asset("images/hero-golf-r.jpg")} alt="Blå Volkswagen Golf R" />
        <div className="svc-banner-panel">
          <p className="svc-crumb">
            <Link to="/">Hjem</Link>
            <span aria-hidden="true">/</span>
            Tjenester
          </p>
          <h1>Våre tjenester</h1>
          <p>Alt du trenger for en trygg og enkel bilhandel – under ett tak.</p>
        </div>
      </section>

      <section className="svc-main">
        <div className="wrap">
          <p className="svc-kicker">Hovedtjenester</p>
          <h2>Kjøp, salg og formidling</h2>
          <p className="svc-intro">Kjøp, salg og formidling. Vi finner løsningen som passer deg.</p>
          <div className="svc-tabs" role="tablist" aria-label="Tjenester">
            {SERVICES.map((item, index) => (
              <button
                key={item.tab}
                type="button"
                role="tab"
                id={`tab-${index}`}
                aria-selected={index === active}
                aria-controls="tjeneste-panel"
                className={index === active ? "is-active" : ""}
                onClick={() => setActive(index)}
              >
                {item.tab}
              </button>
            ))}
          </div>

          <article
            className="svc-panel"
            id="tjeneste-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
          >
            <img src={current.photo} alt={current.alt} />
            <div>
              <h3>{current.title}</h3>
              <p>{current.text}</p>
              <Link className="btn btn-primary" to="/kontakt">
                Kontakt oss
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="svc-more-band">
        <div className="wrap">
          <p className="svc-kicker">I tillegg hos oss</p>
          <h2>Mer vi tilbyr</h2>
          <p className="svc-intro">
            De samme tjenestene, samlet. Ring oss eller send en melding, så tar vi det derfra.
          </p>
          <div className="svc-more">
            {SERVICES.map((item) => (
              <article key={item.title}>
                <Icon kind={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.card}</p>
                {item.link ? (
                  <Link className="svc-mini" to="/kontakt">
                    Ta kontakt
                  </Link>
                ) : null}
              </article>
            ))}
          </div>

          <div className="svc-cta">
            <div>
              <h2>Klar for å finne din neste bil?</h2>
              <p>Vi hjelper deg med kjøp, salg og innbytte.</p>
            </div>
            <Link className="btn btn-dark" to="/biler">
              Se våre biler
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Icon({ kind }) {
  const paths = {
    tag: "M4 12V5h7l9 9-7 7-9-9Zm3-4.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z",
    swap: "M7 7h11M15 4l3 3-3 3M17 17H6M9 20l-3-3 3-3",
    check: "M5 12.5 9.2 17 19 7",
    shield: "M12 3.5 19 6.5v6.2c0 4.2-2.9 6.8-7 8.3-4.1-1.5-7-4.1-7-8.3V6.5L12 3.5Z",
  };
  return (
    <span className="svc-ico" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d={paths[kind]} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
