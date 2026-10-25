import { Link } from "react-router-dom";
import { asset } from "../content.js";

const PARAS = [
  "KA Auto drives av en ung entreprenør med en stor og ekte lidenskap for biler. Det som startet som en hobby, har vokst til noe mer – et arbeid han legger mye tid, energi og stolthet i. Bilinteressen er en viktig del av hvem han er, og motivasjonen kommer fra gleden ved å jobbe med biler og hjelpe bileiere med å ta vare på dem.",
  "KA Auto har særlig god kunnskap om BMW, Audi og Mercedes-Benz. Dette er merker han kjenner godt og har stor interesse for. Samtidig er alle biler velkomne. Hver bil har sine egne behov, og derfor legges det vekt på å møte hver kunde på en personlig måte og gjøre en grundig jobb med fokus på kvalitet og detaljer.",
  "Målet er at kundene skal føle seg trygge på at bilen deres blir tatt godt vare på. God service, ærlig kommunikasjon og stolthet over arbeidet står sentralt hos KA Auto. Her handler det ikke bare om biler, men også om å bygge gode relasjoner med kundene og sørge for at de får en positiv opplevelse.",
  "KA Auto holder til i Industriveien 31 i Sandvika, rett ved togstasjonen. Beliggenheten gjør det enkelt å komme innom, enten du bor i nærheten eller reiser kollektivt. Ta gjerne kontakt for mer informasjon eller for å avtale et besøk. Velkommen til KA Auto!",
];

export default function OmOss() {
  return (
    <div className="om-page">
      <div className="wrap">
        <p className="om-crumb">
          <Link to="/">Hjem</Link>
          <span aria-hidden="true">/</span>
          Om oss
        </p>
        <section className="om-sheet">
          <div>
            <p className="eyebrow">KA AUTO</p>
            <h1>Om KA Auto</h1>
            <figure className="om-shot">
              <div className="om-shot-frame">
                <img src={asset("images/hero-m5-black-front.jpg")} alt="Sort BMW M5 forfra" />
              </div>
              <figcaption>
                <span>Bilhandel gjort trygt og enkelt.</span>
                <span>100% kundetilfredshet</span>
              </figcaption>
            </figure>
          </div>
          <div className="om-copy">
            {PARAS.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <Link className="btn btn-primary" to="/kontakt">
              Ta kontakt
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
