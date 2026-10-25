import { Link } from "react-router-dom";
import {
  ADDRESS,
  EMAIL,
  FINN_URL,
  FOOTER_LINKS,
  LOGO,
  ORG,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "../content.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link to="/" className="footer-logo">
            <img src={LOGO} alt="KA AUTO" />
          </Link>
          <p>Kjøp, salg og formidling av bil i Sandvika.</p>
        </div>
        <nav aria-label="Bunnmeny">
          {FOOTER_LINKS.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
          <a href={FINN_URL} target="_blank" rel="noreferrer">
            Finn.no
          </a>
        </nav>
        <div className="footer-contact">
          <span>{ADDRESS}</span>
          <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>
          © {year} KA AUTO · Org.nr {ORG}
        </span>
        <p className="footer-credit">
          Designet &amp; utviklet av{" "}
          <a href="https://sitebuilder.no" target="_blank" rel="noopener noreferrer">
            sitebuilder.no
          </a>
        </p>
      </div>
    </footer>
  );
}
