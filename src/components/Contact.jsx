import { useState } from "react";
import {
  ADDRESS,
  EMAIL,
  HELP_OPTIONS,
  MAP_EMBED,
  MAPS_URL,
  ORG,
  PHONE_DISPLAY,
  PHONE_TEL,
  asset,
} from "../content.js";

const ENDPOINT = "https://formsubmit.co/ajax/kaauto1@hotmail.com";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  plate: "",
  message: "",
};

function validate(form) {
  if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.plate.trim()) {
    return "Fyll ut navn, e-post, telefon og reg.nr.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    return "Skriv inn en gyldig e-postadresse.";
  }
  if (form.phone.replace(/\D/g, "").length < 8) {
    return "Skriv inn et gyldig telefonnummer.";
  }
  return "";
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [help, setHelp] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function toggleHelp(option) {
    setHelp((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option],
    );
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;

    const problem = validate(form);
    if (problem) {
      setError(problem);
      setStatus("idle");
      return;
    }

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const regnr = form.plate.trim();

    setError("");
    setStatus("sending");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          regnr,
          help: help.length ? help.join(", ") : "Ikke valgt",
          message: form.message.trim() || "–",
          _replyto: email,
          _subject: `Ny henvendelse fra KA AUTO – ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json().catch(() => null);
      const failed = !response.ok || data?.success === false || data?.success === "false";
      if (failed) {
        const activation = /activat/i.test(String(data?.message || ""));
        const err = new Error(activation ? "activation" : "send failed");
        err.activation = activation;
        throw err;
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err?.activation
          ? "KA AUTO må åpne e-posten fra FormSubmit og trykke aktiveringslenken én gang. Deretter virker skjemaet. Du kan også ringe oss på"
          : "Vi fikk ikke sendt meldingen. Prøv igjen, eller ring oss på",
      );
    }
  }

  return (
    <section id="kontakt">
      <div className="contact-hero">
        <div className="contact-hero-panel">
          <p className="eyebrow">KA AUTO · Sandvika</p>
          <h2>Kontakt oss</h2>
          <p>Fortell oss om bilen, så tar vi kontakt.</p>
        </div>
        <div className="contact-hero-photo">
          <img src={asset("images/bmw-cab-banner.png")} alt="Mørk blå BMW cabriolet" />
        </div>
      </div>

      <div className="contact-panel">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <h2 className="contact-title">Ta gjerne kontakt</h2>
              <p className="contact-lead">
                Vi hjelper deg med kjøp, salg og formidling. Ring, send e-post
                eller bruk skjemaet.
              </p>
              <div className="info-list">
                <a className="info-row" href={`tel:${PHONE_TEL}`}>
                  <Icon kind="phone" />
                  <span>
                    <small>Telefon</small>
                    {PHONE_DISPLAY}
                  </span>
                </a>
                <a className="info-row" href={`mailto:${EMAIL}`}>
                  <Icon kind="mail" />
                  <span>
                    <small>E-post</small>
                    {EMAIL}
                  </span>
                </a>
                <a className="info-row" href={MAPS_URL} target="_blank" rel="noreferrer">
                  <Icon kind="pin" />
                  <span>
                    <small>Adresse</small>
                    {ADDRESS}
                  </span>
                </a>
                <div className="info-row">
                  <Icon kind="org" />
                  <span>
                    <small>Org.nr</small>
                    {ORG}
                  </span>
                </div>
              </div>
            </div>

            {status === "sent" ? (
              <div className="form-card success-card" role="status">
                <p className="eyebrow">Sendt</p>
                <h3 className="plain-title">Takk.</h3>
                <p>Takk. Henvendelsen er sendt til KA AUTO. Vi tar kontakt snart.</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setForm(emptyForm);
                    setHelp([]);
                    setStatus("idle");
                    setError("");
                  }}
                >
                  Send en ny melding
                </button>
              </div>
            ) : (
              <form className="form-card" onSubmit={onSubmit} noValidate aria-busy={status === "sending"}>
                <h3 className="plain-title">Send oss en melding</h3>
                <div className="form-row">
                  <label className="field">
                    <span>Navn *</span>
                    <input
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={update}
                      required
                    />
                  </label>
                  <label className="field">
                    <span>E-post *</span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={update}
                      required
                    />
                  </label>
                </div>
                <label className="field">
                  <span>Telefon *</span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update}
                    required
                  />
                </label>
                <fieldset className="choices">
                  <legend>Hva kan vi hjelpe deg med?</legend>
                  <div className="chips">
                    {HELP_OPTIONS.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className="chip"
                        aria-pressed={help.includes(option)}
                        onClick={() => toggleHelp(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <label className="field">
                  <span>Reg.nr *</span>
                  <input
                    name="plate"
                    autoCapitalize="characters"
                    spellCheck={false}
                    value={form.plate}
                    onChange={update}
                    required
                  />
                </label>
                <label className="field">
                  <span>Melding</span>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={update}
                  />
                </label>
                {error ? (
                  <p className="form-error" role="alert">
                    {error}
                    {status === "error" ? (
                      <>
                        {" "}
                        <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.
                      </>
                    ) : null}
                  </p>
                ) : null}
                <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sender…" : "Send melding"}
                </button>
                <p className="form-note">Meldingen sendes direkte til KA AUTO.</p>
              </form>
            )}
          </div>

          <div className="map-frame">
            <iframe
              title="Kart som viser Industriveien 31, Sandvika"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Icon({ kind }) {
  const paths = {
    phone:
      "M7.2 3.5h2.1c.4 0 .8.3.9.7l.8 2.6c.1.4 0 .8-.3 1.1L9.4 9.2a12.6 12.6 0 0 0 5.4 5.4l1.3-1.3c.3-.3.7-.4 1.1-.3l2.6.8c.4.1.7.5.7.9v2.1c0 .5-.4.9-.9.9C10.8 17.7 6.3 13.2 6.3 4.4c0-.5.4-.9.9-.9Z",
    mail: "M4 7.5h16v10H4v-10Zm0 0 8 6 8-6",
    pin: "M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Zm0-8.2a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z",
    org: "M8 4h8v4H8V4Zm-3 6h6v10H5V10Zm8 3h6v7h-6v-7Z",
  };
  const filled = kind === "phone";
  return (
    <span className="info-ico" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke={filled ? "none" : "currentColor"} strokeWidth="1.7">
        <path d={paths[kind]} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
