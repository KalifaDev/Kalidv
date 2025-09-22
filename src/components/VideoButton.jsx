"use client";
import { useState } from "react";

export default function VideoButton() {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button
        onClick={handleClick}
        className="button-Vd"
        style={{fontFamily:"Monsterrat, Sans-serif" }}
      >
        ▶ Portfolio VD
      </button>

      {showVideo && (
        <div style={{ marginTop: "20px" }}>
          {/* Exemple 1 : vidéo locale */}
          <video width="320" height="240" controls autoPlay>
            <source src="/video/IMG_1675.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>

          {/* Exemple 2 : vidéo YouTube en iframe */}
          {/* <iframe
            width="320"
            height="240"
            src="https://www.youtube.com/embed/ID_DE_LA_VIDEO"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>  */}
         
        </div>
      )}
    </div>
  );
}
