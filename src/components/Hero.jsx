import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { asset, BULLETS, FINN_URL, PHONE_DISPLAY, PHONE_TEL } from "../content.js";

const SLIDES = [
  { src: asset("images/hero-amg-gt-front.jpg"), alt: "Hvit Mercedes-AMG GT forfra" },
  { src: asset("images/hero-m5-black-front.jpg"), alt: "Sort BMW M5 forfra" },
  { src: asset("images/hero-rs7-front.jpg"), alt: "Sort Audi RS7 forfra" },
  { src: asset("images/hero-panamera-front.jpg"), alt: "Grå Porsche Panamera forfra" },
  { src: asset("images/hero-m5-white-rear.jpg"), alt: "Hvit BMW M5 bakfra" },
];

const INTERVAL = 2000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(0);
  const [paused, setPaused] = useState(false);
  const [motionOk, setMotionOk] = useState(true);
  const indexRef = useRef(0);

  useEffect(() => {
    SLIDES.forEach((slide) => {
      const image = new Image();
      image.src = slide.src;
    });
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotionOk(!media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!motionOk || paused) return undefined;
    const id = window.setTimeout(() => {
      const current = indexRef.current;
      const next = (current + 1) % SLIDES.length;
      indexRef.current = next;
      setPrev(current);
      setIndex(next);
    }, INTERVAL);
    return () => window.clearTimeout(id);
  }, [motionOk, paused, index]);

  return (
    <section className="hero" id="hjem">
      <div className="glow" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">KA AUTO · Sandvika</p>
          <h1>
            <span>Bilhandel</span>
            <span>
              Gjort <em>trygt</em>
            </span>
            <span>
              og <em>enkelt.</em>
            </span>
          </h1>
          <ul className="points">
            {BULLETS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="hero-actions">
            <a className="btn btn-primary" href={FINN_URL} target="_blank" rel="noreferrer">
              Se biler til salgs
            </a>
            <Link className="btn btn-line" to="/kontakt">
              Kontakt oss
            </Link>
          </div>
          <p className="hero-phone">
            <a href={`tel:${PHONE_TEL}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M7.2 3.5h2.1c.4 0 .8.3.9.7l.8 2.6c.1.4 0 .8-.3 1.1L9.4 9.2a12.6 12.6 0 0 0 5.4 5.4l1.3-1.3c.3-.3.7-.4 1.1-.3l2.6.8c.4.1.7.5.7.9v2.1c0 .5-.4.9-.9.9C10.8 17.7 6.3 13.2 6.3 4.4c0-.5.4-.9.9-.9Z"
                />
              </svg>
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>

        <div className="hero-visual">
          <div
            className="hero-frame"
            onPointerEnter={() => setPaused(true)}
            onPointerLeave={() => setPaused(false)}
          >
            <div className="hero-clip">
              {SLIDES.map((slide, slideIndex) => {
                const active = slideIndex === index;
                const under = slideIndex === prev && prev !== index;
                return (
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={active ? slide.alt : ""}
                    aria-hidden={active ? undefined : true}
                    className={active ? "is-active" : under ? "is-under" : ""}
                    fetchPriority={slideIndex === 0 ? "high" : "low"}
                  />
                );
              })}
            </div>
            <div className="stat-row">
              <article className="stat">
                <strong>100%</strong>
                <span>Kundetilfredshet</span>
              </article>
              <article className="stat">
                <strong>Rask</strong>
                <span>Salgsvurdering</span>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
