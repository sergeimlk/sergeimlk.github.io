import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Application Developer",
          "Freelancer",
          "Ai Developer",
          "Open Source Contributor",
          "Simplon",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        delay: 50,  // Vitesse d'écriture des caractères (réduit pour doubler la vitesse)
      }}
    />
  );
}

export default Type;
