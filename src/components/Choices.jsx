import { FINN_URL, PHOTOS } from "../content.js";

export default function Choices() {
  return (
    <section className="split">
      <div className="wrap split-grid">
        <div className="split-photo">
          <img src={PHOTOS.rs7Rear} alt="Sort Audi RS7 bakfra" />
        </div>
        <div className="split-copy">
          <p className="eyebrow">Kjøp eller salg</p>
          <h2>Hva passer for deg?</h2>
          <div className="choice-grid">
            <article className="choice-card">
              <h3>Selge bilen din</h3>
              <p>
                Formidling eller direkte kjøp. Du får en ærlig vurdering, uten
                skjulte kostnader.
              </p>
            </article>
            <article className="choice-card">
              <h3>Kjøpe bil hos oss</h3>
              <p>Se utvalget på Finn.no, eller fortell oss hva du ser etter.</p>
            </article>
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href={FINN_URL} target="_blank" rel="noreferrer">
              Se biler til salgs
            </a>
            <a className="btn btn-line" href="#kontakt">
              Ta kontakt
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
