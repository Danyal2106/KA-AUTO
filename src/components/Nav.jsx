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
            <FinnMark />
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
          <FinnMark />
          Biler til salgs
        </a>
      </nav>
    </div>
    </>
  );
}

function FinnMark() {
  return (
    <svg className="finn-mark" viewBox="0 0 184 64" aria-hidden="true" focusable="false">
      <path
        fill="#06bffc"
        d="M179.8 58V6c0-1-.8-1.9-1.9-1.9H66c-1 0-1.9.8-1.9 1.9v53.8H178c1 0 1.8-.8 1.8-1.8"
      />
      <path
        fill="#0063fc"
        d="M22.5 4.2H6C5 4.2 4.2 5 4.2 6v52c0 1 .8 1.9 1.9 1.9H60V41.5C59.9 20.9 43.2 4.2 22.5 4.2"
      />
      <path
        fill="#fff"
        d="M178 0H66c-3.3 0-6 2.7-6 6v17.4C53.2 9.6 38.9 0 22.5 0H6C2.7 0 0 2.7 0 6v52c0 3.3 2.7 6 6 6h172c3.3 0 6-2.7 6-6V6c0-3.3-2.7-6-6-6m1.8 58c0 1-.8 1.9-1.9 1.9H64.1V6c0-1 .8-1.9 1.9-1.9h112c1 0 1.9.8 1.9 1.9v52zM4.2 58V6C4.2 5 5 4.2 6 4.2h16.5c20.6 0 37.4 16.8 37.4 37.4v18.3H6c-1-.1-1.8-.9-1.8-1.9"
      />
      <path
        fill="#fff"
        d="M110.1 21.1h-4.2c-.7 0-1.2.5-1.2 1.2v19.3c0 .7.5 1.2 1.2 1.2h4.2c.7 0 1.2-.5 1.2-1.2V22.3c0-.6-.6-1.2-1.2-1.2m-12 0H83c-.7 0-1.2.5-1.2 1.2v19.3c0 .7.5 1.2 1.2 1.2h4.2c.7 0 1.2-.5 1.2-1.2v-4h7.7c.7 0 1.2-.5 1.2-1.2v-3.2c0-.7-.5-1.2-1.2-1.2h-7.7v-4.9h9.7c.7 0 1.2-.5 1.2-1.2v-3.7c0-.5-.6-1.1-1.2-1.1m62.8 0h-4.2c-.7 0-1.2.5-1.2 1.2v9.5l-6.6-10c-.3-.4-.8-.7-1.3-.7h-3.2c-.7 0-1.2.5-1.2 1.2v19.3c0 .7.5 1.2 1.2 1.2h4.2c.7 0 1.2-.5 1.2-1.2v-9.4l6.5 9.8c.3.4.8.7 1.3.7h3.4c.7 0 1.2-.5 1.2-1.2V22.3c-.1-.6-.6-1.2-1.3-1.2m-25.4 0h-4.2c-.7 0-1.2.5-1.2 1.2v9.5l-6.6-10c-.3-.4-.8-.7-1.3-.7H119c-.7 0-1.2.5-1.2 1.2v19.3c0 .7.5 1.2 1.2 1.2h4.2c.7 0 1.2-.5 1.2-1.2v-9.4l6.5 9.8c.3.4.8.7 1.3.7h3.4c.7 0 1.2-.5 1.2-1.2V22.3c-.1-.6-.6-1.2-1.3-1.2"
      />
    </svg>
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
