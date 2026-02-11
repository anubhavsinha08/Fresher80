import React from "react";

function Librarys({ images = [] }) {
  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(4 ,1fr)",
      gridAutoRows: "180px",
      gap: "12px",
    },
    item: {
      overflow: "hidden",
      borderRadius: "16px",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.4s ease",
    },
  };

  const positions = [
    { gridColumn: "span 2", gridRow: "span 2" },
    { gridColumn: "span 1", gridRow: "span 1" },
    { gridColumn: "span 1", gridRow: "span 1" },
    { gridColumn: "span 2", gridRow: "span 2" },
    { gridColumn: "span 1", gridRow: "span 1" },
    { gridColumn: "span 1", gridRow: "span 1" },
    { gridColumn: "span 2", gridRow: "span 2" },
    { gridColumn: "span 1", gridRow: "span 2" },
    { gridColumn: "span 1", gridRow: "span 2" },
  ];

  // Responsive tweak
  if (window.innerWidth < 768) {
    styles.grid.gridTemplateColumns = "repeat(2, 1fr)";
    styles.grid.gridAutoRows = "150px";
  }

  return (
    <div className="container-fluid p-5 my-5">
        <div style={styles.grid}>
      {images.slice(0, 9).map((img, index) => (
        <div
          key={index}
          style={{ ...styles.item, ...positions[index] }}
          onMouseEnter={(e) =>
            (e.currentTarget.firstChild.style.transform = "scale(1.08)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.firstChild.style.transform = "scale(1)")
          }
        >
          <img src={img} alt={`gallery-${index}`} style={styles.img} />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Librarys;
