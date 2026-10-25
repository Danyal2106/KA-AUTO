import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import CtaBand from "../components/CtaBand.jsx";

const TEASERS = [
  { to: "/tjenester", title: "Tjenester", text: "Formidling, innbytte, kjøp og garanti." },
  { to: "/biler", title: "Biler", text: "Se bilene, og utvalget på Finn.no." },
  { to: "/om-oss", title: "Om oss", text: "KA AUTO i Sandvika." },
  { to: "/kontakt", title: "Kontakt", text: "Ring, send e-post eller bruk skjemaet." },
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="teaser-band" aria-label="Snarveier">
        <div className="wrap">
          <div className="teaser">
            {TEASERS.map((item) => (
              <Link key={item.to} to={item.to}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
