import { Link } from "react-router-dom";
import { FINN_URL } from "../content.js";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="wrap cta-inner">
        <h2>Vi hjelper deg med bilen — enten du skal kjøpe, selge eller bytte inn.</h2>
        <div className="hero-actions">
          <a className="btn btn-dark" href={FINN_URL} target="_blank" rel="noreferrer">
            Se våre biler
          </a>
          <Link className="btn btn-light" to="/kontakt">
            Kontakt oss
          </Link>
        </div>
      </div>
    </section>
  );
}
