import { FINN_URL, PHOTOS } from "../content.js";

const TILES = [
  {
    title: "Formidlingssalg",
    text: "Vi selger bilen for deg",
    image: PHOTOS.panameraRear,
    href: "#kontakt",
    alt: "Grå Porsche Panamera bakfra",
  },
  {
    title: "Innbytte",
    text: "Vurdering som deloppgjør",
    image: PHOTOS.rs7Front,
    href: "#kontakt",
    alt: "Sort Audi RS7 forfra",
  },
  {
    title: "Salgsvurdering",
    text: "Gratis og uforpliktende",
    image: PHOTOS.amgFront,
    href: "#kontakt",
    alt: "Hvit BMW M5",
  },
  {
    title: "Kjøp av bil",
    text: "Se utvalget på Finn.no",
    image: PHOTOS.m5Black,
    href: FINN_URL,
    external: true,
    alt: "Sort BMW M5",
  },
  {
    title: "Se bilene",
    text: "På Finn.no",
    image: PHOTOS.interior,
    href: FINN_URL,
    external: true,
    alt: "Interiør i en BMW",
  },
];

export default function Help() {
  return (
    <section className="section light tight" id="biler">
      <div className="wrap">
        <header className="section-intro left">
          <p className="eyebrow">Finn riktig vei</p>
          <h2>Hva kan vi hjelpe deg med?</h2>
          <p>Velg det du trenger. Vi tar oss av resten.</p>
        </header>
        <div className="bento">
          {TILES.map((tile) => (
            <a
              key={tile.title}
              href={tile.href}
              {...(tile.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <img src={tile.image} alt={tile.alt} />
              <span>
                <strong>{tile.title}</strong>
                {tile.text}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
