import { asset, FINN_URL, PHOTOS } from "../content.js";
import PageHero from "./PageHero.jsx";

const CARS = [
  { src: PHOTOS.panameraFront, label: "Porsche Panamera, forfra", alt: "Grå Porsche Panamera forfra" },
  { src: PHOTOS.panameraRear, label: "Porsche Panamera, bakfra", alt: "Grå Porsche Panamera bakfra" },
  { src: PHOTOS.rs7Front, label: "Audi RS7, forfra", alt: "Sort Audi RS7 forfra" },
  { src: PHOTOS.rs7Rear, label: "Audi RS7, bakfra", alt: "Sort Audi RS7 bakfra" },
  { src: PHOTOS.amgFront, label: "Mercedes-AMG GT, forfra", alt: "Hvit Mercedes-AMG GT forfra" },
  { src: PHOTOS.amgRear, label: "Mercedes-AMG GT, bakfra", alt: "Hvit Mercedes-AMG GT bakfra" },
  { src: asset("images/m5-black-front.jpg"), label: "BMW M5, sort, forfra", alt: "Sort BMW M5 forfra" },
  { src: PHOTOS.m5Black, label: "BMW M5, sort", alt: "Sort BMW M5" },
  { src: asset("images/bmw-e36-front.jpg"), label: "BMW cabriolet, forfra", alt: "Mørk blå BMW cabriolet forfra" },
  { src: asset("images/bmw-e36-rear.jpg"), label: "BMW cabriolet, bakfra", alt: "Mørk blå BMW cabriolet bakfra" },
  { src: asset("images/m5-white-front.jpg"), label: "BMW M5, forfra", alt: "Hvit BMW M5 forfra" },
  { src: asset("images/m5-white-rear.jpg"), label: "BMW M5, bakfra", alt: "Hvit BMW M5 bakfra" },
  { src: asset("images/golf-r-front.jpg"), label: "Volkswagen Golf R, forfra", alt: "Blå Volkswagen Golf R forfra" },
  { src: asset("images/golf-r-rear.jpg"), label: "Volkswagen Golf R, bakfra", alt: "Blå Volkswagen Golf R bakfra" },
];

export default function Biler() {
  return (
    <>
      <PageHero
        eyebrow="Utvalg"
        title="Biler"
        lede="Et utvalg av bilene vi har hatt inne. Det som er til salgs nå, ligger på Finn.no."
      />
      <section className="page-section">
        <div className="wrap">
          <div className="gallery">
            {CARS.map((car) => (
              <figure key={car.src}>
                <img src={car.src} alt={car.alt} />
                <figcaption>{car.label}</figcaption>
              </figure>
            ))}
          </div>
          <a className="btn btn-primary" href={FINN_URL} target="_blank" rel="noreferrer">
            Se biler til salgs på Finn.no
          </a>
        </div>
      </section>
    </>
  );
}
