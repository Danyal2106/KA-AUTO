import { PHOTOS } from "../content.js";

export default function About() {
  return (
    <section className="about" id="om-oss">
      <img className="about-bg" src={PHOTOS.m5Black} alt="" />
      <div className="about-scrim" />
      <div className="about-card">
        <img src={PHOTOS.panameraFront} alt="Grå Porsche Panamera hos KA AUTO" />
        <div>
          <p className="eyebrow">Om oss</p>
          <h2>Ærlig bilhandel i Sandvika</h2>
          <p>
            KA AUTO holder til i Industriveien 31. Vi hjelper deg med kjøp, salg
            og formidling — med ærlighet, fagkunnskap og uten skjulte kostnader.
          </p>
          <a className="btn btn-primary" href="#kontakt">
            Ta kontakt
          </a>
        </div>
      </div>
    </section>
  );
}
