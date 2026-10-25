import { FEATURES } from "../content.js";

export default function Features() {
  return (
    <section className="features" aria-labelledby="fordeler-tittel">
      <div className="wrap">
        <h2 id="fordeler-tittel" className="sr-only">
          Slik hjelper vi deg
        </h2>
        <ul className="feature-row">
          {FEATURES.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
