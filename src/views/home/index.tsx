import React from "react";
import { ImageDataLike } from "gatsby-plugin-image";

import { Hero } from "../../components/Hero";
import { IntroSection } from "./sections/Intro";

interface HomeViewProps {
  images: {
    intro: {
      placeholderImage: ImageDataLike | null;
      icon: ImageDataLike | null;
    };
  };
}

export const HomeView: React.FC<HomeViewProps> = ({ images }) => {
  return (
    <>
      <IntroSection images={images.intro} />
      <Hero
        title="Korzyści w skrócie:"
        bullets={[
          "Automatyczna transkrypcja i generowanie notatek.",
          "Skrócenie czasu pracy lekarzy o 30%.",
          "Zwiększenie liczby obsługiwanych wizyt o 20%.",
        ]}
        ctaText="Get Started"
        ctaLink="/about"
      />
    </>
  );
};
