import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FINN_URL, LOGO, NAV, PHONE_DISPLAY, PHONE_TEL } from "../content.js";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
    <header className={`nav${scrolled || open ? " is-solid" : ""}`}>
      <a className="skip" href="#innhold">
        Hopp til innhold
      </a>
      <div className="nav-bar">
        <Link to="/" className="logo">
          <img src={LOGO} alt="KA AUTO" />
        </Link>
        <nav className="nav-links" aria-label="Hovedmeny">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-end">
          <a className="nav-phone" href={`tel:${PHONE_TEL}`}>
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
          <a className="btn btn-primary nav-cta" href={FINN_URL} target="_blank" rel="noreferrer">
            Biler til salgs
          </a>
          <button
            type="button"
            className={`menu-btn${open ? " is-open" : ""}`}
            aria-expanded={open}
            aria-controls="mobilmeny"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Lukk meny" : "Åpne meny"}</span>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
    <div id="mobilmeny" className={`menu${open ? " is-open" : ""}`} hidden={!open}>
      <nav aria-label="Mobilmeny">
        {NAV.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end} onClick={close}>
            {item.label}
          </NavLink>
        ))}
        <a href={`tel:${PHONE_TEL}`} onClick={close}>
          {PHONE_DISPLAY}
        </a>
        <a className="btn btn-primary menu-cta" href={FINN_URL} target="_blank" rel="noreferrer" onClick={close}>
          Biler til salgs
        </a>
      </nav>
    </div>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="phone-icon">
      <path
        fill="currentColor"
        d="M7.2 3.5h2.1c.4 0 .8.3.9.7l.8 2.6c.1.4 0 .8-.3 1.1L9.4 9.2a12.6 12.6 0 0 0 5.4 5.4l1.3-1.3c.3-.3.7-.4 1.1-.3l2.6.8c.4.1.7.5.7.9v2.1c0 .5-.4.9-.9.9C10.8 17.7 6.3 13.2 6.3 4.4c0-.5.4-.9.9-.9Z"
      />
    </svg>
  );
}
