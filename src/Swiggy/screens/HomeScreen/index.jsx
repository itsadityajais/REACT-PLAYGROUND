import React from "react";
import { HeroSection } from "./HeroSection";
import { NavBar } from "./NavBar";
import { HeroHeader } from "./HeroHeader";
import { NavTiles } from "./NavTiles";
export function HomeScreen() {
  return (
    <>
      <HeroSection>
        <NavBar />
        <HeroHeader />
        <NavTiles />
      </HeroSection>
      <>category</>
    </>
  );
}
