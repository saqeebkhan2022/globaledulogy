"use client";
import React from "react";

const CallFloat = () => {
  const phoneNumber = "+918447374123";
  const callLink = `tel:${phoneNumber}`;

  const styles = {
    container: {
      position: "fixed",
      right: "20px",
      bottom: "90px", // placed above WhatsApp button
      width: "50px",
      height: "50px",
      backgroundColor: "#34B7F1", // Blue color for call
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
      width: "50px",
      height: "50px",
      backgroundColor: "transparent",
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
      href={callLink}
      style={styles.container}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
        alt="Call"
        style={styles.image}
      />
    </a>
  );
};

export default CallFloat;
