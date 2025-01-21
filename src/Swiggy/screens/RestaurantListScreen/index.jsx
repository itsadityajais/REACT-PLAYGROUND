import React, { useState } from "react";
import { useEffect } from "react";
import { Line } from "../../components/Line";
import { Footer } from "../HomeScreen/Footer";
import { GridContainer } from "../HomeScreen/GridContainer";
import Food from "../HomeScreen/GridContainer/FoodData";
import { RestaurantList, RestaurantListContainer } from "./RestaurantList";
import RestaurantData from "./RestaurantList/RestaurantData";
import { RestaurantListPageHeader } from "./RestaurantListPageHeader";
import Loader from "../../components/Loader/Loader";

export function RestaurantListScreen() {
  const [data, setData] = useState({
    data: [],
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://real-time-tripadvisor-scraper-api.p.rapidapi.com/tripadvisor_restaurants_search_v2?location=new%20york",
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "8e78f6c3fdmsh70f762daa59ab19p1747d8jsnf06a5b21eb8a",
              "x-rapidapi-host":
                "real-time-tripadvisor-scraper-api.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <RestaurantListPageHeader />
      <GridContainer label={"What's on your mind?"} data={Food} />
      <Line />
      <RestaurantListContainer
        label={"Top restaurant chains in Bangalore"}
        data={data.data.slice(0, 10)}
        displayType="sliding"
      />
      <Line />
      <RestaurantListContainer
        label={"Restaurants with online food delivery in Bangalore"}
        data={data.data}
        displayType="column"
      />
      <Footer />
    </div>
  );
}
