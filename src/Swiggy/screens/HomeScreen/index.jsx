import React from "react";
import { HeroSection } from "./HeroSection";
import { NavBar } from "./NavBar";
import { HeroHeader } from "./HeroHeader";
import { NavTiles } from "./NavTiles";
import { GridContainer } from "./GridContainer";
import Grocery from "./GridContainer/GroceryData";
import Food from "./GridContainer/FoodData";
import { Footer } from "./Footer";
import { Banner } from "./Banner";
export function HomeScreen() {
  return (
    <>
      <HeroSection>
        <NavBar />
        <HeroHeader />
        <NavTiles />
      </HeroSection>
      <GridContainer label={"Order our best food options"} data={Food} />
      <GridContainer label={"Shop groceries on Instamart"} data={Grocery} />
      {/* <GridContainer label={"Shop veggies"} data={Grocery} /> */}
      <Banner />
      <Footer />
    </>
  );
}
