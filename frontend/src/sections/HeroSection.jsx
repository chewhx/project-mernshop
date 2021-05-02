import React from "react";
import { Card } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "450px",
        backgroundImage:
          "url(https://cdn.dribbble.com/users/213309/screenshots/14813782/media/ebcbea51ee12ba11f79b4c53fca4fef2.png)",
        // image credits: https://dribbble.com/shots/14813782-Fluid-matter-illustration-print/attachments/6521556?mode=media
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "center",
        marginBottom: "6rem",
      }}
    >
      <Card
        className="py-5 px-5 bg-light"
        style={{
          position: "absolute",
          bottom: "-70px",
          left: "25%",
          zIndex: "2",
          minWidth: "200px",
          width: "60%",
          maxWidth: "600px",
        }}
      >
        <p className="display-3">Colour essentials</p>
        <p>
          Locally sourced products, carefully picked with quality and freshness
          in mind.
        </p>
      </Card>
    </div>
  );
};

export default HeroSection;
