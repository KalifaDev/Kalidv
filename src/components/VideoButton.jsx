"use client";

export default function VideoButton() {
  const handleClick = () => {
    window.open(
      //la video ouvrire dans une fenetre popup
      "/video/IMG_1675.mp4",
      "videoWindow",
      "width=800,height=600,resizable=yes"
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button
        onClick={handleClick}
        className="button-Vd"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        ▶ Portfolio VD
      </button>
    </div>
  );
}
