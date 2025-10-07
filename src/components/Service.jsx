import { useState } from "react";
import "../styles/Service.css";

export default function Service() {
  const [expanded, setExpanded] = useState([false, false, false]);

  const toggleText = (index) => {
    setExpanded((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  const services = [
    {
      icon: "fa-solid fa-code",
      title: "Développement",
      short: (
        <>
          Nous concevons des applications modernes, rapides et sécurisées,
          <br /> adaptées à vos besoins.
        </>
      ),
      full: (
        <>
          Nous concevons des applications modernes,
          <br /> rapides et sécurisées, adaptées à vos besoins.
          <br /> De la vitrine en ligne aux plateformes complexes,
          <br /> nous assurons un design attrayant et une performance optimale
          <br /> pour offrir une expérience fluide à vos utilisateurs.
        </>
      ),
    },
    {
      icon: "fa-solid fa-dna",
      title: "Solutions Personnalisées",
      short: (
        <>
          Chaque projet est unique. Nous analysons vos objectifs et mettons
          <br /> en place des solutions sur mesure.
        </>
      ),
      full: (
        <>
          Chaque projet est unique. Nous analysons vos
          <br /> objectifs et mettons en place des solutions sur mesure :
          intégration de nouvelles
          <br /> fonctionnalités, automatisation des processus, optimisation de
          vos
          <br /> outils existants. Notre priorité est de transformer vos idées
          en résultats concrets.
        </>
      ),
    },
    {
      icon: "fa-solid fa-people-arrows",
      title: "Accompagnement et Support",
      short: (
        <>
          Nous ne nous arrêtons pas au développement. Nous vous accompagnons
          <br /> dans le déploiement et la maintenance.
        </>
      ),
      full: (
        <>
          Nous ne nous arrêtons pas au développement.
          <br /> Nous vous accompagnons dans le déploiement, la maintenance et
          l'évolution
          <br /> de vos projets, avec un support réactif et des conseils
          stratégiques
          <br /> pour garantir la réussite à long terme
          <br /> de votre activité.
        </>
      ),
    },
  ];

  return (
    <section className="Section-service" id="service">
      <div>
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            fontFamily: "Poppins",
          }}
          className="Service"
        >
          <i
            className="fa-solid fa-circle-check"
            style={{ paddingRight: "10px", fontSize: "70%" }}
          ></i>{" "}
          Mon Service
        </h1>

        <section>
          <div className="list-service">
            {services.map((s, i) => (
              <li key={i} type="none" className="dernier-conteneur">
                <div
                  style={{ textAlign: "center" }}
                  className="service-descrip"
                >
                  <i
                    className={s.icon}
                    style={{ fontSize: "60px", color: "blue" }}
                  ></i>
                  <h1
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginTop: "15px",
                    }}
                  >
                    {s.title}
                  </h1>

                  <p style={{ fontFamily: "Quicksand" }}>
                    {expanded[i] ? s.full : s.short}
                  </p>

                  <button
                    style={{ fontFamily: "Montserrat" }}
                    className="Button-plus"
                    onClick={() => toggleText(i)}
                  >
                    {expanded[i] ? "Voir moins" : "Plus de voir..."}
                  </button>
                </div>
              </li>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
