import Image from "next/image";
import styles from "../styles/Dernierpro.module.css";
import PhotoModal from "../components/PhotoModal";

export default function Dernierpro() {
  const projects = [
    {
      id: 1,
      title: "Web app",
      description: "To view project details or other projects",
      img: "/image russie.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Desktop app",
      description: "Amazing UI concepts",
      img: "/IMG_1683.PNG",
      link: "#",
    },
    {
      id: 3,
      title: "Desktop app",
      description: "Frontent & Backend",
      img: "/WhatsApp Image 2025-09-25 at 03.53.47.jpeg",
      link: "#",
    },
  ];

  return (
    <section
      id="Project"
      style={{
        background: "#2c2c2c",
        borderRadius: "10px",
        width: "96%",
        margin: "40px auto",   // ✅ centré
        padding: "20px",       // un peu d'air
        marginTop:"20%",
      }}
    >
      <h1
        style={{
          marginTop:"15",
          fontSize: "32px",
          fontWeight: "bold",
          fontFamily: "Poppins",
          color: "white",
          textAlign: "center",
          marginBottom: "30px", // ✅ plus de marginTop énorme
        }}
      >
        <i
          className="fa-solid fa-circle-check"
          style={{ paddingRight: "10px", fontSize: "70%" }}
        ></i>
        Dernier Project
      </h1>

      <div className={styles.grid}>
        {projects.map((p) => (
          <div key={p.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className={styles.image}
              />
            </div>
            <div className={styles.overlay}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <PhotoModal imageUrl={p.img} buttonText="Voir la photo" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
