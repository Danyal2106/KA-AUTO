export const FINN_URL =
  "https://www.finn.no/mobility/search/car?orgId=9854723";

export const PHONE_DISPLAY = "92 67 67 92";
export const PHONE_TEL = "92676792";
export const EMAIL = "kaauto1@hotmail.com";
export const ADDRESS_LINE = "Industriveien 31";
export const POSTAL = "1337 Sandvika";
export const ADDRESS = `${ADDRESS_LINE}, ${POSTAL}`;
export const ORG = "933 923 975";

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Industriveien+31,+1337+Sandvika";

export const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2002.0!2d10.527!3d59.889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416da37e07f2af%3A0x9f24f9f1a23f98f1!2sIndustriveien%2031%2C%201337%20Sandvika!5e0!3m2!1sno!2sno!4v1680000000000!5m2!1sno!2sno";

export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const LOGO = asset("logo.png");

export const PHOTOS = {
  panameraFront: asset("images/panamera-front.png"),
  panameraRear: asset("images/panamera-rear.png"),
  rs7Front: asset("images/rs7-front.png"),
  rs7Rear: asset("images/rs7-rear.png"),
  m5Black: asset("images/m5-black.jpg"),
  amgFront: asset("images/amg-gt-front.jpg"),
  amgRear: asset("images/amg-gt-rear.jpg"),
  interior: asset("images/m5-interior.jpg"),
};

export const NAV = [
  { to: "/", label: "Hjem", end: true },
  { to: "/tjenester", label: "Tjenester" },
  { to: "/biler", label: "Biler" },
  { to: "/om-oss", label: "Om oss" },
  { to: "/kontakt", label: "Kontakt" },
];

export const FOOTER_LINKS = [
  { to: "/", label: "Hjem" },
  { to: "/tjenester", label: "Tjenester" },
  { to: "/biler", label: "Biler" },
  { to: "/om-oss", label: "Om oss" },
  { to: "/kontakt", label: "Kontakt" },
];

export const BULLETS = [
  "Kjøp, salg og formidling",
  "Gratis og uforpliktende vurdering",
  "Trygg handel uten skjulte kostnader",
];

export const FEATURES = [
  { title: "Formidling", text: "Vi selger bilen for deg" },
  { title: "Innbytte", text: "Brukes som deloppgjør" },
  { title: "Direkte kjøp", text: "Raskt oppgjør" },
  { title: "Garanti", text: "Via partnere ved kjøp" },
];

export const SERVICES = [
  {
    title: "Formidlingssalg",
    text: "Vi selger bilen din på vegne av deg. Du beholder eierskapet frem til handelen er gjennomført, mens vi håndterer annonsering, visning, kontrakt og oppgjør. Trygt, enkelt og effektivt.",
  },
  {
    title: "Innbytte",
    text: "Rask og rettferdig vurdering som kan brukes som deloppgjør når du kjøper din neste bil hos oss.",
  },
  {
    title: "Salgsvurdering / kjøp av bil",
    text: "Gratis og uforpliktende vurdering. Vi kjøper også direkte. Raskt oppgjør, ingen skjulte kostnader.",
  },
  {
    title: "Garanti ved kjøp",
    text: "Gjennom partnere tilbyr vi mulighet for garanti ved kjøp.",
  },
];

export const HELP_OPTIONS = [
  "Salg av bil",
  "Kjøp av bil",
  "Salgsvurdering",
  "Annet",
];
