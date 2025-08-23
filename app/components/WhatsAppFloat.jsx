"use client";
import React from "react";

const WhatsAppFloat = () => {
  const whatsappNumber = "+918447374123";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const styles = {
    container: {
      position: "fixed",
      right: "20px",
      bottom: "20px",
      width: "50px",
      height: "50px",
      backgroundColor: "#25D366",
      borderRadius: "50%",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      cursor: "pointer",
      transition: "transform 0.3s",
    },
    image: {
      width: "35px",
      height: "35px",
    },
  };

  const handleHover = (e) => {
    e.currentTarget.style.transform = "scale(1.1)";
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.container}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={styles.image}
      />
    </a>
  );
};

export default WhatsAppFloat;
